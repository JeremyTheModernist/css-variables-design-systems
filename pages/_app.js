import Footer from '../components/Footer';
import Nav from '../components/Nav';
import PageWrapper from '../components/PageWrapper';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
      <Footer />
    </>
  );
}

export default MyApp;
