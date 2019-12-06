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
              <Heading content="Indigo.X"/>
              <Text content="É o braço de projetos de nossa iniciativa." />
              <List>
                <Subtitulo>Indigo.challenge</Subtitulo>
                <Text content="Plataforma de inovação aberta estruturada em torno de competições de equipes transdisciplinares de jovens. Aqui, desenvolvemos processos de capacitaçoes, mentorias e facilitações para unir o que há de melhor no mundo dos jovens e do ambiente coorporativo." />

                <Subtitulo>Indigo.sprint</Subtitulo>
                <Text content="Serviço de aplicação da metodologia de Design Sprint. Utilizando um time de pessoas altamente qualificadas no processo, auxiliamos os parceiros na descoberta de dores, exploração do negócio, prototipagem de soluções, condução de testes de usabilidade, validações e design audit de modelos existentes de soluções."/>

                <Subtitulo>Consultorias</Subtitulo>
                <Text content="Prestamos várias serviços no modelo B2B, sobretudo nos orientando em proessos de design, prototipação, research, planejamento estratégico e estruturação de modelo de negócio. Também intermediamos consultorias intermediando o contato com nossa rede e capilaridade, sobretudo em projetos com acadêmicos, jovens e pós-graduandos." />

                <Subtitulo>Capacitações</Subtitulo>
                <Text content="Oferemos diversos cursos, workshops, imersões e oficinas orientadas em temas relacionados à empreendedorismo, inovação, tecnologia, administração e saúde." />
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
