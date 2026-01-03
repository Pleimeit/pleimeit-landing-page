import HeaderComponent from "./home/components/HeaderComponent";
import BannerComponent from "./home/components/BannerComponent";
import FooterComponent from "./home/components/FooterComponent";
import ContactComponent from "./home/components/ContactComponent";
import DownloadComponent from "./home/components/DownloadComponent";
import AboutUsComponent from "./home/components/AboutUsComponent";
import SportingEventsComponent from "./home/components/SportingEventsComponent";
import RateEventComponent from "./home/components/RateEventComponent";
import CreateGameComponent from "./home/components/CreateGameComponent";
import SportsCommunitiesComponent from "./home/components/SportsCommunitiesComponent";

export default function Page() {
  return (
    <main
      className="
      bg-white  
    h-screen
    overflow-y-scroll
    overflow-x-hidden

    lg:snap-y
    lg:snap-mandatory

    scroll-smooth
      "
    >
      <HeaderComponent />

      <BannerComponent />
      <SportingEventsComponent />
      <CreateGameComponent />
      <RateEventComponent />
      <SportsCommunitiesComponent />
      <AboutUsComponent />
      <ContactComponent />
      <DownloadComponent />
      <FooterComponent />
    </main>
  );
}
