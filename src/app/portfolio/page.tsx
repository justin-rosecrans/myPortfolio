import Carousel from "../components/carousel";
import Accordion from "../components/accordion/Accordion";
export default function PortfolioPage() {
  return (
    <section className="flex flex-col items-center justify-between py-24 px-16 blue-background">
      <h2>Portfolio Page</h2>
      <Carousel />
      <div className="pt-24 px-16 w-screen">
        <Accordion />
      </div>
    </section>
  );
}
