import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import BlockWrapper, {
  ContentWrapper,
  List,
  ImageWrapper,
} from './humanityBlock.style';
import Imagem from 'common/src/assets/image/undraw.svg';

import styled from 'styled-components';

const Subtitulo = styled.h4`
  margin-bottom: 0;
`;

const HumanityBlock = ({ row, col }) => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        humanityData {
          image {
            publicURL
          }
          slogan
          title
          text
          lists {
            id
            text
          }
        }
      }
    }
  `);

  const { image } = data.charityJson.humanityData;

  return (
    <BlockWrapper id="initiave">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ImageWrapper>
              <img src={Imagem} alt="Charity Landing" />
            </ImageWrapper>
          </Box>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading as="h5" content='' />
              <Heading content="Ecossistema Indigo"/>
              <Text content="Conjunto de iniciativas voltadas para a criação, capacitação, expansão e impacto de nossa comunidade." />
              <List>
              <Subtitulo>Indigo.leancoffee</Subtitulo>
              <Text content="Aqui realizamos rodas de discussão aberta transdisciplinar sobre temas diversos, incluindo nossos membros e convidados especiais. A ideia é não só trazer conteúdos ambientados em diferentes perspectivas em diálogo, como também estimular a crítica sob as circunstâncias da sociedade atual e do futuro." />
                
              <Subtitulo>Design Jams e Hackathons</Subtitulo>
              <Text content="Atividades de aplicação de metodologias de design thinking em curtos ciclos processuais. Treinamos nossos membros e nos debruçamos sobre diversos desafios internos e sociais como foco desses eventos."/>

              <Subtitulo>Núcleos</Subtitulo>
              <Text content="Os núcleos são agrupamentos de membros com interesses compartilhados para áreaa específica, ainda que extremamente transdisciplinares. Um dos nossos principais é o Núcleo de Saúde, embrião de toda a rede Indigo Hive, que se mantém atuante." />
                {/* {lists.map(item => (
                  <>
                    <Item key={`list_key${item.id}`}>{item.text}</Item>
                    fdfdfd
                  </>
                ))} */}
              </List>

              {/* <a className="learn__more-btn" href="#1">
                <span className="hyphen" />
                <span className="btn_text">Learn More </span>
              </a> */}
            </ContentWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// HumanityBlock style props
HumanityBlock.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// HumanityBlock default style
HumanityBlock.defaultProps = {
  // HumanityBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // HumanityBlock col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default HumanityBlock;
