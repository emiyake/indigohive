import React from 'react';
// import  { Fragment } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Image from 'gatsby-image';
// import Text from 'reusecore/src/elements/Text';
// import Heading from 'reusecore/src/elements/Heading';
// import GlideCarousel from 'common/src/components/GlideCarousel';
// import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
// import LeftBar from './leftBar';
// import IntroMp4 from 'common/src/assets/video/intro.mp4';
import styled from 'styled-components';

// import BannerWrapper, {
//   ContentWrapper,
//   TextArea,
//   ImageArea,
// } from './bannerSection.style';


const VideFgStyled = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  pointer-events: none;

& iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;


const Video = ({ videoSrcURL, videoTitle }) => (
  <VideFgStyled>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allowFullScreen={true}
      frameBorder='0'

    />
  </VideFgStyled>
)

const BannerSection = () => {
  // const glideOptions = {
  //   type: 'carousel',
  //   perView: 1,
  //   gap: 0,
  // };

  // const data = useStaticQuery(graphql`
  //   query {
  //     charityJson {
  //       bannerSlides {
  //         id
  //         thumb_url {
  //           childImageSharp {
  //             fluid(quality: 90) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <Video
      videoSrcURL="https://www.youtube.com/embed/WLeFxCa1oTA?controls=0&showinfo=0&rel=0&autoplay=1&playlist=WLeFxCa1oTA&loop=1&mute=1"
      videoTitle="Indigo Hive intro"
    />
  );
};

export default BannerSection;

/* <ContentWrapper>
  <TextArea>
    <br />
    <br />
    <Heading
      content="Desenvolvendo pessoas para iniciativas de impacto" 
    />
    <Heading
      as="h4"
      content="A sua evolução como meio de melhorar o Brasil"
    />
    <Text
      content="Vivemos um cotidiano repleto de pessoas excepcionais inconformadas com suas realidades querendo se inserir em iniciativas reais. Além disso, temos um universo de desafios e oportunidades para os quais urgem indivíduos capazes devotados à sua contemplação. Essa é a Era Indigo, uma era inovação, ideias e criatividade, movida por pessoas que querem melhorar o mundo. 
    "
    />
    <Link className="learn__more-btn" to="/charity">
      <span className="hyphen" />
      <span className="btn_text">Explore Our Project</span>
    </Link>
  </TextArea>
  <ImageArea>
    <GlideCarousel
      carouselSelector="charitySlide"
      options={glideOptions}
      nextButton={<span className="next_arrow" />}
      prevButton={<span className="prev_arrow" />}
    >
      <Fragment>
        {data.charityJson.bannerSlides.map(slide => (
          <GlideSlide key={slide.id}>
            <Image
              fadeIn={true}
              fluid={
                (slide.thumb_url !== null) | undefined
                  ? slide.thumb_url.childImageSharp.fluid
                  : {}
              }
              alt={`Charity slide image ${slide.id}`}
              className="slide_image"
            />
          </GlideSlide>
        ))}
      </Fragment>
    </GlideCarousel>
  </ImageArea>
</ContentWrapper> */