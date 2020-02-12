import React from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import BlockWrapper, {
  ContentWrapper,
  List,
  ImageWrapper,
} from './humanityBlock.style';
import Imagem from 'common/src/assets/image/5-01.png';

import styled from 'styled-components';

const Subtitulo = styled.h4`
  margin-bottom: 0;
`;

const HumanityBlock = ({ row, col }) => {

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
              <Heading content="Indigo.health"/>
              <Text content="Uma nova forma de lidar com os desafios na saúde" />
              <List>
                <Subtitulo>Ajudamos nossos parceiros a resolverem desafios na área da saúde</Subtitulo>
                <Text content="A Indigo tem por missão suportar projetos concebidos nas diversas áreas da saúde, passando por desafios que vão de agendamento de consultas até cuidados paliativos." />

                <Subtitulo>O melhor dos mundos</Subtitulo>
                <Text content="Juntamos não só pessoas de diferentes contextos profissionais, como também as capacitamos para se tornarem profissionais híbridos, entendendo diferentes áreas de forma integral.
                Assim, associamos expertises técnicas de diversas áreas da saúde a conhecimentos sobre Design Thinking, gestão, negócios e inovação."/>

                <Subtitulo>Processos pragmáticos e adaptados ao setor da saúde</Subtitulo>
                <Text content="Utilizamos abordagens de Design Thinking, criação de modelos de negócio e análise estratégica de processos para ajudar nossos parceiros a resolverem seus desafios.
Cocriamos, prototipamos, testamos e conduzimos pesquisas com diversos stakeholders para maximizar aprendizados e conceber soluções viáveis e relevantes para quem as utiliza.
Entregamos especial valor não só pela capilaridade que temos em diversos ambientes acadêmicos e profissionais na área da saúde, como pelas parcerias e mecanismos que desenvolvemos a fim de assegurar uma sinérgica atuação de todos no processo de entrega de valor." />

                <Subtitulo>Fazendo com quem entende do assunto</Subtitulo>
                <Text content="Para desafios nesse setor tão complexo que é a saúde, não poderíamos deixar de atuar junto a profundos conhecedores do mercado e  das metodologias inerentes ao que fazemos. 
Assim, contamos com o apoio estratégico e operacional dos seguintes parceiros em nossos projetos" /> 
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
