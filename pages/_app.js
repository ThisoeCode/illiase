import Head from 'next/head'
import '../styles/globals.css'
import IlliaseTemplate from '../template/illiase/tmpl';
import TSKTemplate from '../template/tsk/tmpl';
import BistardTemplate from '../template/bistard/tmpl';
import BnTemplate from '../template/bn/tmpl';
import JerryTemplate from '../template/jerry/tmpl';
import JeffTemplate from '../template/jeff/tmpl';

function Illiase({ Component, pageProps, router }) {
  const {pathname} = router;
  const under = x=>pathname.startsWith(x);
  switch (pathname) {
    case '/':
    case '/members':
    case '/works':
    case '/login':
    case '/cnct':
      return (
      <IlliaseTemplate>
        <Head>
          <title>Illiase</title>
          <link rel="icon" href="/i/con2.png" />
          {/* prevent white-screen flash before bgi loaded */}
          <style>{`body{background:#000}`}</style>
        </Head>
        <Component {...pageProps} />
      </IlliaseTemplate>)

    default: switch (true) {
      case under('/bistard'):
        return <Component {...pageProps} />;
      case under('/tsk'):
        return <TSKTemplate><Component {...pageProps} /></TSKTemplate>;
      default: return <Component {...pageProps} />;
    }
  }
}

export default Illiase
