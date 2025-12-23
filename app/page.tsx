import HeaderComponent from "./home/components/HeaderComponent";
import BannerComponent from "./home/components/BannerComponent";
import FooterComponent from "./home/components/FooterComponent";

export default function Page() {
  return (
    <div>
      <HeaderComponent />
      <BannerComponent />
      <FooterComponent />
    </div>
  );
}
