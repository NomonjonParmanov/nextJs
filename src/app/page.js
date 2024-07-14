import Carousel from "@/components/carousel/Carousel";
import Consulting from "@/components/consulting/Consulting";
import Contact from "@/components/contact/Contact";
import Delever from "@/components/delever/Delever";
import Design from "@/components/design/Design";
import Erp from "@/components/erp/Erp";
import Goodzone from "@/components/goodzone/Goodzone";
import Hero from "@/components/hero/Hero";
import Iman from "@/components/iman/Iman";
import Mobile from "@/components/mobile/Mobile";
import Navbar from "@/components/navbar/Navbar";
import Optimization from "@/components/optimization/Optimization";
import Services from "@/components/services/Services";
import Smm from "@/components/smm/Smm";
import Team from "@/components/team/Team";
import Work from "@/components/work/Work";
import "@/sass/global.scss";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Mobile />
      <Erp />
      <Design />
      <Optimization />
      <Consulting />
      <Delever />
      <Smm />
      <Goodzone />
      <Iman />
      <Carousel />
      <Work />
      <Contact />
    </>
  );
}
