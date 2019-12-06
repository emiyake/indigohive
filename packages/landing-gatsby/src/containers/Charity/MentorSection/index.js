import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'reusecore/src/elements/Text';
import Tab, { Panel } from 'common/src/components/Tabs';
import SectionWrapper, { ContentWrapper, HeaderWrapper } from './mentorSection.style';
import Heading from 'reusecore/src/elements/Heading';

import Edmar from 'common/src/assets/image/charity/mentor/edmar.jpg';
import Erica from 'common/src/assets/image/charity/mentor/erica.png';
import Ricardo from 'common/src/assets/image/charity/mentor/ricardo.jpg';

const MentorSection = () => {

  const title = text => {
    return { __html: text };
  };

  return (
    <>
      <SectionWrapper id="branch">
        <Heading as="h2" content='Nossos mentores' />
        <Tab active={0}>
          <Panel title={<Text content='Ricardo di Lazzaro'/>} >
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <img src={Ricardo} className="tab_image" />
                </div>
              </Fade>
              <div className="content">
                <h2>Ricardo di Lazzaro</h2>
                <Text content='Ricardo di Lazzaro Filho é médico, formado pela Faculdade de Medicina da USP, e farmacêutico-bioquímico, formado pela Faculdade de Ciências Farmacêuticas da USP. É mestre em Aconselhamento Genético e Genômica Humana e doutorando em Genética e Biologia Evolutiva pelo Instituto de Biociências (USP). É cofundador do laboratório Genera, e cofundador/investidor anjo das empresas de tecnologia AppSimples, VR Monkey, LOTAN Agrosciences, NAIAD Drug Discovery, MaChiron, BrainTools e Future4.' />
              </div>
            </ContentWrapper>
          </Panel>
          <Panel title={<Text content='Edmar Miyake'/>} >
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <img src={Edmar} className="tab_image" />
                </div>
              </Fade>
              <div className="content">
                <h2>Edmar Miyake</h2>
                <Text content='Edmar Miyake iniciou sua carreira empreendedora aos 23 anos, fundando a Compass, mas, desde lá, vem criando e fomentando outras startups. Atualmente é fundador da Taqtile, sócio da Black Iron Design e proprietário e coach da CrossFit Perdizes. Contribui também para diversas iniciativas empreendedoras como mentor e investidor-anjo nas horas vagas. Aborda o empreendedorismo como alicerce para transformação das pessoas e mudança do status quo. Em suas iniciativas, busca sempre convergir o sucesso financeiro com o desenvolvimento de agentes e instituições capazes de gerar impactos positivos ao mundo. Em seus projetos, promove os valores de aprendizado contínuo e compartilhamento de conhecimento, pois acredita que são comportamentos basilares para o autoconhecimento e evolução do próximo.' />
              </div>
            </ContentWrapper>
          </Panel>
          <Panel title={<Text content='Erica Isomura'/>} >
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <img src={Erica} className="tab_image" />
                </div>
              </Fade>
              <div className="content">
                <h2>Erica Isomura</h2>
                <Text content='Erica Isomura é sócia da Corall, consultora e coach sistêmica com mais de 15 anos de experiência em estratégia e gestão com pessoas, especialista em desenvolvimento humano e organizacional, mudança cultural, desenvolvimento de liderança e times. Trabalha com implantação e cocriação de modelos alternativos de gestão, tais como: empresas horizontais sem chefes, autogeridas em redes e flats em contextos tecnológicos e criativos. Doutoranda em psicologia social, pela Universidade John F. Kennedy, especialista em estratégia e gestão de pessoas pela Fundação Getúlio Vargas, psicóloga, Executive & Professional Coach certificada pela Behavioural Coach Institute e International Coaching Council, facilitadora de grupos QUEST e mentora pelo CAC - Center for Advanced Coach e consteladora sistêmica pelo Instituto Koziner. Professora universitária e pesquisadora da espiritualidade organizacional e das relações de trabalho do futuro.' />
              </div>
            </ContentWrapper>
          </Panel>
          
        </Tab>
      </SectionWrapper>
    </>
  );
};

export default MentorSection;
