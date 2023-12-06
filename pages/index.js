import { useEffect } from "react";
import { useMainContext } from "@/context/MainContext";
import { setShopMetric, setBrands, setProducts, setReviews } from "@/actions/mainActions";
import Head from "next/head";

import Header from "@/components/Layout/Header/header";
import Layout from "@/components/Layout/layout";
import Footer from "@/components/Layout/Footer/footer";
import Banner from "@/components/Banner/banner";
import Brands from "@/components/Brands/brands";
import FeaturedStyles from "@/components/FeaturedStyles/featuredStyles";
import Separator from "@/components/Separator/separator";
import ReviewList from "@/components/ReviewList/reviewList";

import { getAllShopMetric, getAllBrands, getAllProducts, getAllReviews } from "@/helpers/api-util";
import { OUR_HAPPY_CUSTOMERS, NEW_ARRIVALS, TOP_SELLING } from "@/constants/labelsConfig";
import FeautredProducts from "@/components/ProductListing/featuredProducts";


const Home = props => {
  const { state, dispatch } = useMainContext();

  useEffect(() => {

    const dispatchActions = [
      { prop: props.shopMetric, action: setShopMetric },
      { prop: props.brands, action: setBrands },
      { prop: props.products, action: setProducts },
      { prop: props.reviews, action: setReviews }
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

        <div className="h-full mt-12 md:mt-16 overflow-hidden md:overflow-auto">
          <h2 className="font-integral-bold text-3xl md:text-5xl mb-8 md:mb-14 text-center">{NEW_ARRIVALS}</h2>
          <div className="container px-4">
            <FeautredProducts />
          </div>
        </div>

        <div className="container relative px-4 my-12 overflow-hidden">
          <Separator />
        </div>

        <div className="h-full overflow-hidden md:overflow-auto">
          <h2 className="font-integral-bold text-3xl md:text-5xl mb-8 md:mb-14 text-center">{TOP_SELLING}</h2>
          <div className="container px-4">
            <FeautredProducts filterBy="top-selling" />
          </div>
        </div>

        <div className="container px-4 my-12 md:my-20">
          <FeaturedStyles />
        </div>

        <div className="container relative px-4 mb-12 md:mb-20">
          <h2 className="mb-6 md:mb-10 text-3xl md:text-5xl font-integral-bold">{OUR_HAPPY_CUSTOMERS}</h2>
          <div className="-mr-5">
            <ReviewList />
          </div>
        </div>

      </Layout>
      <Footer />
    </>
  )
}

export async function getStaticProps() {

  const [shopMetric, brands, products, reviews] = await Promise.all([
    getAllShopMetric(),
    getAllBrands(),
    getAllProducts(),
    getAllReviews()
  ]);

  return {
    props: {
      shopMetric,
      brands,
      products,
      reviews
    }
  }
}

export default Home;
