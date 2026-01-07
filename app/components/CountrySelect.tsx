import { useState, useRef, useEffect } from "react";

const CountrySelect = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (val: string) => {
    setValue(val);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative w-28">
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
        {value || "País"}
        <span className="ml-2 text-xs">▾</span>
      </button>

      {open && (
        <ul
          className="
            absolute z-20 mt-1 w-full
            rounded-lg border border-gray-200
            bg-white shadow-lg
          "
        >
          <li
            onClick={() => handleSelect("PE")}
            className="
              cursor-pointer px-3 py-2 text-sm
              text-textGraySecundary
              hover:bg-gray-100
            "
          >
            PE
          </li>
        </ul>
      )}

      <input type="hidden" name="country" value={value} required />
    </div>
  );
};

export default CountrySelect;
