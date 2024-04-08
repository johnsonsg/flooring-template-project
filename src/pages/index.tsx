import React from "react";
import Layout from "@/components/Layout";
import { MetaData } from "@/utils/metaData";
import About from '@/pages/about'

const Home: React.FC = () => {
  const metaData: MetaData = {
    title: 'Test',
    description: 'Testing'
  }

  return (
    <Layout metaData={metaData}>
      <About />
    </Layout>
  )
}

export default Home;
