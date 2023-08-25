import Carousel from "../components/carousel/Carousel";
import Accordion from "../components/accordion/Accordion";
export default function PortfolioPage() {
  return (
    <section className="flex flex-col items-center justify-between py-24 px-16 blue-background">
      <h1 className="text-4xl font-bold text-center text-blue-700 pb-5">
         Portfolio
      </h1>
      <Carousel />
      <div className="pt-24 px-16 w-screen">
        <Accordion />
      </div>
    </section>
  );
}
