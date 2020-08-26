import Head from 'next/head';
import ThemeContainer from '../contexts/theme/ThemeContainer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cookinho!</title>
      </Head>
      <ThemeContainer>
        <Component {...pageProps} />
        <style jsx global>{`
          @font-face {
            font-family: 'SF Pro Display Regular';
            src: url('/fonts/SFProDisplay-Regular.ttf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'SF Pro Display Bold';
            src: url('/fonts/SFProDisplay-Bold.ttf');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </ThemeContainer>
    </>
  );
}

export default MyApp;
