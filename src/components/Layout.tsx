import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import { MetaData } from "@/utils/metaData";

type LayoutProps = {
  metaData: MetaData;
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ metaData, children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        {/* Add more meta tags as needed */}
      </Head>
      <Header />
      <main className="flex-grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
