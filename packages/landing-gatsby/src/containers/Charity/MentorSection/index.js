import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'reusecore/src/elements/Text';
import Tab, { Panel } from 'common/src/components/Tabs';
import SectionWrapper, { ContentWrapper } from './mentorSection.style';
import Heading from 'reusecore/src/elements/Heading';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const MentorSection = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        mentorData {
          edmar {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          erica {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ricardo {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          vinicius {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ivan {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const { erica, edmar, ricardo, vinicius, ivan } = data.charityJson.mentorData;

  return (
    <>
      <SectionWrapper id="branch">
        <Heading as="h2" content='Nossos mentores' />
        <Tab active={0}>
          <Panel title={<Text content='Ricardo di Lazzaro'/>} >
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <Image fluid={ricardo.childImageSharp.fluid} alt="Ricardo di Lazzaro" />
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
                  <Image fluid={edmar.childImageSharp.fluid} alt="Edmar Miyake" />
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
                  <Image fluid={erica.childImageSharp.fluid} alt="Erica Isomura" />
                </div>
              </Fade>
              <div className="content">
                <h2>Erica Isomura</h2>
                <Text content='Erica Isomura é sócia da Corall, consultora e coach sistêmica com mais de 15 anos de experiência em estratégia e gestão com pessoas, especialista em desenvolvimento humano e organizacional, mudança cultural, desenvolvimento de liderança e times. Trabalha com implantação e cocriação de modelos alternativos de gestão, tais como: empresas horizontais sem chefes, autogeridas em redes e flats em contextos tecnológicos e criativos. Doutoranda em psicologia social, pela Universidade John F. Kennedy, especialista em estratégia e gestão de pessoas pela Fundação Getúlio Vargas, psicóloga, Executive & Professional Coach certificada pela Behavioural Coach Institute e International Coaching Council, facilitadora de grupos QUEST e mentora pelo CAC - Center for Advanced Coach e consteladora sistêmica pelo Instituto Koziner. Professora universitária e pesquisadora da espiritualidade organizacional e das relações de trabalho do futuro.' />
              </div>
            </ContentWrapper>
          </Panel>
          <Panel title={<Text content='Vinicius Oyama'/>} >
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <Image fluid={vinicius.childImageSharp.fluid} alt="Vinicius Oyama"/>
                </div>
              </Fade>
              <div className="content">
                <h2>Vinicius Oyama</h2>
                <Text content='Fundador da Codus, consultoria de produtos digitais, começou a empreender com 22 anos no último ano da faculdade. Vinicius passou pelo ciclo completo de uma empresa bem sucedida: tirou do papel seu sonho concebido na sala de casa, passou pela consolidação, pelo crescimento e, fechando o ciclo, passou pela aquisição de sua empresa. Aficcionado por tecnologia e muito curioso, não só entendendo, mas participando ativamente no impacto que ela pode gerar nas pessoas e na sociedade, formou iniciativas de ensino e mentorias dentro da própria empresa, proporcionando valiosos aprendizados a muitas pessoas que por lá passaram. Aprender, colaborar, criar e se desafiar são valores que sempre nortearam suas ações. Assim, a IndigoHive se conecta enquanto oportunidade para que ele possa reafirmar todos esses valores, utilizar sua experiência para ajudar outras pessoas e também aprender muito nessa jornada!' />
              </div>
            </ContentWrapper>
          </Panel>
          <Panel title={<Text content='Rafael Garcia'/>} >
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <Image fluid={ivan.childImageSharp.fluid} alt="Rafael Garcia"/>
                </div>
              </Fade>
              <div className="content">
                <h2>Rafael Garcia</h2>
                <Text content='Engenheiro de Computação pela Poli-USP, começou a empreender durante a graduação em 2006, aos 19 anos e não parou. Casado e pai de uma menina, é co-fundador da Infosimples, da Neuronio.ai e de outras startups que ficaram pelo caminho. Acredita que o empreendedorismo é a forma mais eficiente de transformar positivamente a própria vida e além de contribuir para sociedade e, em última instância, para o Brasil. Desde 2014, é voluntário em cursos de empreendedorismo e computação na Poli-USP, que fomenta a formação de futuros engenheiros e empreendedores. Durante a sua jornada, teve a felicidade encontrar mentores que acabaram virando amigos e tiveram papel importante na sua evolução profissional e pessoal. Por isso, acredita muito na Indigo Hive e no quanto elas podem ajudar outros a explorarem seu potencial e serem agentes de transformação.' />
              </div>
            </ContentWrapper>
          </Panel>
          
        </Tab>
      </SectionWrapper>
    </>
  );
};

export default MentorSection;
