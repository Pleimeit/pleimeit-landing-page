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
    <main className="bg-white h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <HeaderComponent />

      <section id="home" className="snap-start">
        <BannerComponent />
      </section>

      <section className="snap-start">
        <SportingEventsComponent />
      </section>

      <section className="snap-start">
        <CreateGameComponent />
      </section>

      <section className="snap-start">
        <RateEventComponent />
      </section>

      <section className="snap-start">
        <SportsCommunitiesComponent />
      </section>

      <section id="about" className="snap-start">
        <AboutUsComponent />
      </section>

      <section id="contact" className="snap-start">
        <ContactComponent />
      </section>

      <section className="snap-start">
        <DownloadComponent />
      </section>

      <section className="snap-start">
        <FooterComponent />
      </section>
    </main>
  );
}
