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
  Item,
  ImageWrapper,
} from './humanityBlock.style';

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

  const { slogan, title, text, lists, image } = data.charityJson.humanityData;

  return (
    <BlockWrapper id="initiave">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ImageWrapper>
              <Image src={image.publicURL} alt="Charity Landing" />
            </ImageWrapper>
          </Box>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading as="h5" content={slogan} />
              <Heading content={title}/>
              <Text content={text} />
              <List>
                <Subtitulo>Indigo.X</Subtitulo>
                É o braço de projetos de nossa iniciativa, compondo-se de 4 eixos de atividades principais: challenges, sprints, consultorias e capacitações.

                <Subtitulo>Indigo.Social</Subtitulo>
                Área voltada para a promoção de projetos sociais. Aqui, realizamos mentorias, cursos, oficinas e atividades diverrsas com pessoas em algum tipo de marginalização social. Também empoderamos vários dos jovens que adentram na Indigo por meio desse braço para que atuem em outras frentes da Indigo, como realizando projetos ou mesmo sendo acelerado para um futuro empreendedor.

                <Subtitulo>Ecossistema Indigo</Subtitulo>
                Para viabilizar a excelência de nossa atuação e impactar cada vez mais o cenário nacional, promovemos algumas iniciativas para estruturar o nosso ecossistema e habilitar o progresso de nossos membros: talks, lean coffees, design jams e hackathons, bem como constituimos núcleos voltados paar áreas de atuação específicas, como o Indigo.health.

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
