import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from 'common/src/theme/charity';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/Charity/Navbar';
import HumanityBlock from '../containers/Charity/Ecossistema';
import Footer from '../containers/Charity/Footer';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from '../containers/Charity/charity.style';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        <SEO title="Indigo Hive" />
        <ResetCSS />
        <GlobalStyle />
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <ContentWrapper> 
            {/* <BannerSection /> */}
            <HumanityBlock /> 
            {/* <FeatureSection />
            <BranchSection />
            <WorkSection />
            <MilestoneBlock />
            <PromotionBlock />
            <DonateSection /> 
            <MapSection /> 
            <FundraiserSection />
            <BlogSection />
            <ClientBlock /> */}
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        End of charity wrapper section
      </Fragment>
    </ThemeProvider>
  );
};
