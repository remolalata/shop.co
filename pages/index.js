import { useEffect } from "react";
import { useMainContext } from "@/context/MainContext";
import { setShopMetric, setBrands, setProducts } from "@/actions/mainActions";
import Head from "next/head";

import Header from "@/components/Layout/Header/header";
import Layout from "@/components/Layout/layout";
import Banner from "@/components/Banner/banner";
import Brands from "@/components/Brands/brands";
import ProductListing from "@/components/ProductListing/productListing";
import HorizontalLine from "@/components/HorizontalLine/horizontalLine";

import { getAllShopMetric, getAllBrands, getAllProducts } from "@/helpers/api-util";

const Home = props => {

  const { state, dispatch } = useMainContext();

  useEffect(() => {
    if (props.shopMetric && props.shopMetric.length) {
      dispatch(setShopMetric(props.shopMetric));
    }

    if (props.brands && props.brands.length) {
      dispatch(setBrands(props.brands));
    }

    if (props.products && props.products.length) {
      dispatch(setProducts(props.products))
    }
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

        <div className="h-full">
          <ProductListing filterBy="new-arrival" />
        </div>

        {/* <div className="container relative px-4">
        <hr class="h-px my-8 bg-gray-200 border-0 bg-black/[0.1]" />
        </div> */}

        <div className="h-full">
          <ProductListing filterBy="top-selling" />
        </div>


      </Layout>
    </>
  )
}

export async function getStaticProps() {

  const shopMetric = await getAllShopMetric();
  const brands = await getAllBrands();
  const products = await getAllProducts();

  return {
    props: {
      shopMetric,
      brands,
      products
    }
  }
}

export default Home;
