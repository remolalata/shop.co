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

import { PRODUCT_TITLE, CASUAL } from "@/constants/labelsConfig";

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
            <Layout>
                <div className="container px-4">
                    <Separator />
                </div>
                <div className="container px-4 my-6">
                    <Breadcrumb />
                </div>
                <div className="container px-4">
                    <h2 className="font-satoshi-bold text-3xl mb-4">{CASUAL}</h2>
                    <ProductListing viewAll={false} customClasses="flex-wrap gap-y-9" />
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