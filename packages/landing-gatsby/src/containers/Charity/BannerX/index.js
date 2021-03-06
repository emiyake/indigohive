import React from 'react';
// import  { Fragment } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Image from 'gatsby-image';
// import Text from 'reusecore/src/elements/Text';
// import Heading from 'reusecore/src/elements/Heading';
// import GlideCarousel from 'common/src/components/GlideCarousel';
// import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
// import LeftBar from './leftBar';
import IntroMp4 from 'common/src/assets/video/intro.mp4';

// import BannerWrapper, {
//   ContentWrapper,
//   TextArea,
//   ImageArea,
// } from './bannerSection.style';


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
    <video controls={false} autoPlay={true} muted={true} width={'100%'} loop={true}>
      <source src={IntroMp4} type="video/mp4" />
    </video>
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