import Head from "../../components/Head";
import Header from "../../components/Header";
import Jscript from "../../components/Jscript";

import Category from "../../components/Category";
import Footer from "../../components/Footer";
import PopularItem from "../../components/PopularItem";
import Poster from "../../components/Poster";


const LandingPage = () => {
  return (
    <>
    <div className="App">
      <Head>
      </Head>
      <Header />
      <Category />
      <PopularItem />
      <Poster />
      <Footer />
      <Jscript />
    </div>
    </>
  );
}

export default LandingPage;
