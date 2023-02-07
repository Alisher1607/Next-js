import "@/styles/globals.css";
import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  /// NADO ZAPUSKAT SAIT S COMONDOI " SERVE OR NPM RUN DEV "
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}


