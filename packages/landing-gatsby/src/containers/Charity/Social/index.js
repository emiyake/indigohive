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
import Imagem from 'common/src/assets/image/desenho.svg';

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
              <Subtitulo>Treinamentos</Subtitulo>
              <Text content="Aqui se inserem algumas iniciativas, como cursos para jovens de baixa renda em temas como programação de computador, design thinking e empreendedorismo." />

              <Subtitulo>Mentorias</Subtitulo>
              <Text content="Conectamos nossa rede de mentores a jovens em situação de marginalização social, auxiliando na definição de propósito, criação de jornadas e conexão com oportunidades de transformação de vida."/>
                
              <Subtitulo>Monitorias</Subtitulo>
              <Text content="Programas de aulas e preparação de jovens sem oportunidades de acesso à educação de qualidade com foco em concursos públicos, como ENEM, FUVEST, ITA, olimpíadas e muito mais." />

              <Subtitulo>Geração de oportunidadeleos</Subtitulo>
              <Text content="Junto a nossa rede de apoio, estruturamos diversas iniciativas que aportam recursos para transformar a realidade de jovens em situação de exclusão social."/>

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
