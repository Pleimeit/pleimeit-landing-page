import { useState, useRef, useEffect } from "react";
import countriesData from "@/app/data/countries.json";

interface Country {
  code: string;
  name: string;
  dial_code: string;
  flag: string;
}

const CountrySelect = () => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const countries: Country[] = countriesData;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [open]);

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    setOpen(false);
    setSearchTerm("");
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.dial_code.includes(searchTerm) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div ref={ref} className="relative w-32">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between
          rounded-lg border border-gray-200
          bg-white px-3 py-3 text-sm
          text-textGraySecundary
          shadow-sm
          focus:outline-none focus:ring-2 focus:ring-purpleBackground
        "
      >
        {selectedCountry ? (
          <span className="flex items-center gap-1">
            <span>{selectedCountry.flag}</span>
            <span className="text-black">{selectedCountry.dial_code}</span>
          </span>
        ) : (
          "País"
        )}
        <span className="ml-2 text-xs">▾</span>
      </button>

      {open && (
        <div
          className="
            absolute z-20 mt-1 w-64
            rounded-lg border border-gray-200
            bg-white shadow-lg
          "
        >
          <div className="p-2 border-b border-gray-200">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Buscar país..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full px-3 py-2 text-sm
                border border-gray-200 rounded-md
                focus:outline-none focus:ring-2 focus:ring-purpleBackground
              "
            />
          </div>
          <ul className="max-h-48 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <li
                  key={country.code}
                  onClick={() => handleSelect(country)}
                  className="
                    cursor-pointer px-3 py-2 text-sm
                    text-textGraySecundary
                    hover:bg-gray-100
                    flex items-center gap-2
                  "
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="flex-1">{country.name}</span>
                  <span className="text-xs font-medium text-purpleBackground">
                    {country.dial_code}
                  </span>
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-sm text-gray-400 text-center">
                No se encontraron resultados
              </li>
            )}
          </ul>
        </div>
      )}

      <input
        type="hidden"
        name="country_code"
        value={selectedCountry?.dial_code || ""}
      />
    </div>
  );
};

export default CountrySelect;