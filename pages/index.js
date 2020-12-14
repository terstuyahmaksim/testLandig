import Head from "next/head";
import Header from "../components/common/header";
import PageContent from "../components/product-page/page-content";
import Footer from "../components/common/footer";

export default function Page() {
  return (
    <div id="wrapper">
      {/* <Head>
        <title>Some title</title>
      </Head>
      <Header></Header> */}
      <PageContent></PageContent>
      <Footer></Footer>
    </div>
  );
}
