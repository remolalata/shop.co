import { useEffect } from "react";

import Head from "next/head";

import { useMainContext } from "@/context/MainContext";
import { setProducts } from "@/actions/mainActions";
import { getAllProducts } from "@/helpers/api-util";

import Header from "@/components/Layout/Header/header";
import Layout from "@/components/Layout/layout";
import Footer from "@/components/Layout/Footer/footer";
import ProductListing from "@/components/ProductListing/productListing";
import Breadcrumb from "@/components/Breadcrumb/breadcrumb";
import Separator from "@/components/Separator/separator";
import Filters from "@/components/Filters/filters";
import ResultSummary from "@/components/ProductListing/resultSummary";

import { PRODUCT_TITLE, CASUAL, PRODUCT_RESULT_SUMMARY_TEXT } from "@/constants/labelsConfig";

const Product = props => {

  const { state, dispatch } = useMainContext();

  useEffect(() => {
    const dispatchActions = [
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
        <title>{PRODUCT_TITLE}</title>
      </Head>
      <Header />
      <Layout customClasses="mb-20">
        <div className="container px-4">
          <Separator />
        </div>
        <div className="container px-4 my-6">
          <Breadcrumb />
        </div>
        <div className="container px-4">
          <div className="flex justify-between gap-x-5">
            <div className="w-filters">
              <Filters />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="font-satoshi-bold text-3xl mb-4">{CASUAL}</h2>
                <div className="text-black/[0.60]">
                  <ResultSummary />
                </div>
              </div>
              <ProductListing viewAll={false} customClasses="flex-wrap gap-y-9" />
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {

  const [products] = await Promise.all([
    getAllProducts()
  ]);

  return {
    props: {
      products
    }
  }
}

export default Product;