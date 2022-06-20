import Footer from "../../components/Footer";
import Head from "../../components/Head";
import Jscript from "../../components/Jscript";
import HelpCard from "../../components/molecules/HelpCard";
import Navbar from "../../components/Navbar";

export default function HelpPage() {
  return (
    <>
      <Head></Head>
      <div className="container-fluid bg-[#120227] lg:-m-16 -m-0 lg:pt-20 sm:pt-2">
        <Navbar />
        <div className="container lg:mt-14 mt-3">
          <h1 className="text-white font-semibold text-4xl lg:mb-9 mb-3">
            Help
          </h1>
          <div className="flex flex-wrap -mx-3">
            <HelpCard />
            <HelpCard />
            <HelpCard />
            <HelpCard />
            <HelpCard />
            <HelpCard /> 
          </div>
        </div>
        <Footer />
        <Jscript />
      </div>
    </>
  );
}
