import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>News | Object Press</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Object Press" />

        {/* ========== End of meta tags ============ */}
        <link
          rel="icon"
          href="/images/favicon.ico"
          author="Object Press"
          type="image/png"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="/css/flexslider.css"
          media="screen"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="/css/animate.min.css"
          media="screen"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="/css/style.css"
          media="screen"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="/css/normalize.css"
          media="screen"
        />

        <link
          rel="stylesheet"
          media="all"
          type="text/css"
          href="/css/green.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="/css/custom.css"
          media="screen"
        />
      </Head>
      <div>
        <div id="wrapper" className="container">
          <div className="row">
            <div
              id="left-sidebar"
              className="col-lg-2 col-md-2 col-sm-4 col-xs-12"
            >
              <Sidebar />
            </div>

            {props.children}
          </div>
        </div>
        <a className="dmtop" href="#">
          <img src="/images/arrow.png" alt="arrow" />
        </a>
        <Footer />
      </div>
    </>
  );
}
