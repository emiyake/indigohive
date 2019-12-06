import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Image from 'gatsby-image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import BlockWrapper, {
  ContentWrapper,
  List,
  ImageWrapper,
} from './networkSection.style';

import styled from 'styled-components';

const Subtitulo = styled.h4`
  margin-bottom: 0;
`;

const NetworkSection = ({ row, col }) => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        networkData {
          image {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const { image } = data.charityJson.networkData;

  const [index, setIndex] = React.useState(0);

  const handleMouse = (index) => () => {
    setIndex(index);
  }

  return (
    <BlockWrapper id="initiave">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ImageWrapper index={index}>
              <Image fluid={image.childImageSharp.fluid} alt="Charity Landing" />
            </ImageWrapper>
          </Box>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading as="h5" content='Nossa rede' />
              <Heading content='Indigo Hive' />
              <Text content='A Indigo Hive faz jus ao seu nome, atuando como uma verdadeira colmeia que conecta pessoas e oportunidades. Acreditamos no desenvolvimento dos participantes por meio do ecossistema que estamos criando. Por isso, dividimos nossa iniciativa em 3 grandes braços:' />
              <List>
                <div onMouseEnter={handleMouse(0)}>
                  <Subtitulo>Indigo.X</Subtitulo>
                  <Text content='É o braço de projetos de nossa iniciativa, compondo-se de 4 eixos de atividades principais: challenges, sprints, consultorias e capacitações.' />
                </div>
                <div onMouseEnter={handleMouse(1)}>
                  <Subtitulo>Ecossistema Indigo</Subtitulo>
                  <Text content='Para viabilizar a excelência de nossa atuação e impactar cada vez mais o cenário nacional, promovemos algumas iniciativas para estruturar o nosso ecossistema e habilitar o progresso de nossos membros: talks, lean coffees, design jams e hackathons' />
                </div>
                <div onMouseEnter={handleMouse(2)}>
                  <Subtitulo>Indigo.Social</Subtitulo>
                  <Text content='Área voltada para a promoção de projetos sociais. Empoderamos os jovens formando-os profissionalmente ou mesmo sendo capacitando-os para um futuro empreendedor.' />
                </div>
              </List>
            </ContentWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// NetworkSection style props
NetworkSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// NetworkSection default style
NetworkSection.defaultProps = {
  // NetworkSection row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // NetworkSection col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default NetworkSection;
