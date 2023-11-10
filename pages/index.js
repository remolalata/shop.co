import { useEffect } from "react";
import { useMainContext } from "@/context/MainContext";
import { setShopMetric, setBrands, setProducts, setProductStyle } from "@/actions/mainActions";
import Head from "next/head";

import Header from "@/components/Layout/Header/header";
import Layout from "@/components/Layout/layout";
import Footer from "@/components/Layout/Footer/footer";
import Banner from "@/components/Banner/banner";
import Brands from "@/components/Brands/brands";
import ProductListing from "@/components/ProductListing/productListing";
import FeaturedStyles from "@/components/FeaturedStyles/featuredStyles";

import { getAllShopMetric, getAllBrands, getAllProducts } from "@/helpers/api-util";

const Home = props => {

  const { state, dispatch } = useMainContext();

  useEffect(() => {

    const dispatchActions = [
      { prop: props.shopMetric, action: setShopMetric },
      { prop: props.brands, action: setBrands },
      { prop: props.products, action: setProducts }
    ];

    dispatchActions.forEach(({ prop, action }) => {
      if (prop && prop.length) {
        dispatch(action(prop));
      }
    });
  }, [props]);

  return (
    <>
      <Head>
        <title>SHOP.CO</title>
      </Head>
      <Header />
      <Layout>
        <Banner shopMetric={props.shopMetric} />

        {state.brands && state.brands.length && <Brands />}

        <div className="h-full mt-16 overflow-hidden md:overflow-auto">
          <ProductListing filterBy="new-arrival" />
        </div>

        <div className="container relative px-4 my-12 overflow-hidden">
          <hr className="h-px bg-gray-200 border-0 bg-black/[0.1]" />
        </div>

        <div className="h-full overflow-hidden md:overflow-auto">
          <ProductListing filterBy="top-selling" />
        </div>

        <div className="container px-4">
          <FeaturedStyles />
        </div>

      </Layout>
      <Footer />
    </>
  )
}

export async function getStaticProps() {

  const [shopMetric, brands, products] = await Promise.all([
    getAllShopMetric(),
    getAllBrands(),
    getAllProducts()
  ]);

  return {
    props: {
      shopMetric,
      brands,
      products
    }
  }
}

export default Home;
