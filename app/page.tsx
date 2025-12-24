import HeaderComponent from "./home/components/HeaderComponent";
import BannerComponent from "./home/components/BannerComponent";
import FooterComponent from "./home/components/FooterComponent";
import ContactComponent from "./home/components/ContactComponent";
import DownloadComponent from "./home/components/DownloadComponent";
import AboutUsComponent from "./home/components/AboutUsComponent";

export default function Page() {
  return (
    <div>
      <HeaderComponent />
      <BannerComponent />
      <AboutUsComponent />
      <ContactComponent />
      <DownloadComponent />
      <FooterComponent />
    </div>
  );
}
