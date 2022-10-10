import "animate.css";
import ResetCSS from "common/assets/css/style";
import { DrawerProvider } from "common/contexts/DrawerContext";
import { theme } from "common/theme/appCreative2";
import AnalyticsTool from "containers/AppCreative2/AnalyticsTool";
import {
  ContentWrapper,
  GlobalStyle,
} from "containers/AppCreative2/appCreative2.style";
import Banner from "containers/AppCreative2/Banner";
import CTA from "containers/AppCreative2/CTA";
import EverNeed from "containers/AppCreative2/EverNeed";
import FAQ from "containers/AppCreative2/FAQ";
import Footer from "containers/AppCreative2/Footer";
import Navbar from "containers/AppCreative2/Navbar";
import PricingPolicy from "containers/AppCreative2/PricingPolicy";
import Technology from "containers/AppCreative2/Technology";
import WalletExperience from "containers/AppCreative2/WalletExperience";
import WhatsappButton from "containers/AppCreative2/WhatsappButton";
import WhyYouChoose from "containers/AppCreative2/WhyYouChoose";
import Head from "next/head";
import React, { Fragment } from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";

const appCreativeTwo = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Fábrica do App | Fabrica de Software e Apps sob Demanda</title>
          <meta
            name="title"
            content="Fábrica do App | Fabrica de Software e Apps sob Demanda"
          />
          <meta
            name="description"
            content="Fábrica do App | Fabrica de Software e Apps sob Demanda"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.fabricadoapp.com/" />
          <meta
            property="og:title"
            content="Fábrica do App | Fabrica de Software e Apps sob Demanda"
          />
          <meta
            property="og:description"
            content="Fábrica do App | Fabrica de Software e Apps sob Demanda"
          />
          <meta
            property="og:image"
            content="https://firebasestorage.googleapis.com/v0/b/stcar-automotive.appspot.com/o/Group%20148.png?alt=media&token=8b4cea59-cdb3-44bf-bdf0-d466d1ed7735.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.fabricadoapp.com/"
          />
          <meta
            property="twitter:title"
            content="Fábrica do App | Fabrica de Software e Apps sob Demanda"
          />
          <meta
            property="twitter:description"
            content="Fábrica do App | Fabrica de Software e Apps sob Demanda"
          />
          <meta
            property="twitter:image"
            content="https://firebasestorage.googleapis.com/v0/b/stcar-automotive.appspot.com/o/Group%20148.png?alt=media&token=8b4cea59-cdb3-44bf-bdf0-d466d1ed7735.png"
          />
          {/* <meta name="theme-color" content="#ec5555" /> */}
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@700;800&display=swap"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <WhatsappButton />
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <WhyYouChoose />
          <AnalyticsTool />
          <EverNeed />
          <WalletExperience />
          <Technology />
          <div className="app_creative_combined_section_wrapper">
            <PricingPolicy className="pricing_policy" />
            <div
              className="app_creative_dark_section app_creative_section"
              style={{ backgroundColor: `${theme?.colors?.dark}` }}
            >
              <FAQ className="faq_section" />
              <CTA className="cta_section" />
            </div>
          </div>
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default appCreativeTwo;
