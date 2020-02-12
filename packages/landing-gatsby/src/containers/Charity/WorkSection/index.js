import React from 'react';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import BlogPost from 'common/src/components/BlogPost';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { SectionHeader, FeatureWrapper } from './workSection.style';

import Connection from 'common/src/assets/image/charity/connection.svg';
import Goal from 'common/src/assets/image/charity/goal.svg';
import Idea from 'common/src/assets/image/charity/idea.svg';

const WorkSection = () => {
  return (
    <SectionWrapper id="work">
      <Container width="1260px">
        <SectionHeader>
          <Heading content='A Indigo Hive' />
          <Text content='Nossa instituição apresenta 3 principais braços de atuação, todos conectados e integrados à associação denominada Indigo Hive.' />
        </SectionHeader>
        <FeatureWrapper>
          <BlogPost
            thumbUrl={Connection}
            title='Indigo.health'
            link='/indigohealth'
            excerpt='É o braço de projetos de nossa iniciativa, compondo-se de 4 eixos de atividades principais: challenges, sprints, consultorias e capacitações.'
          />
          <BlogPost
            thumbUrl={Goal}
            title='Indigo.Social'
            link='/social'
            excerpt='Área voltada para a promoção de projetos sociais. Aqui, realizamos mentorias, cursos, oficinas e atividades diverrsas com pessoas em algum tipo de marginalização social. Também empoderamos vários dos jovens que adentram na Indigo por meio desse braço para que atuem em outras frentes da Indigo, como realizando projetos ou mesmo sendo acelerado para um futuro empreendedor.'
          />
          <BlogPost
            thumbUrl={Idea}
            title='Ecossistema'
            link='ecossistema'
            excerpt='Para viabilizar a excelência de nossa atuação e impactar cada vez mais o cenário nacional, promovemos algumas iniciativas para estruturar o nosso ecossistema e habilitar o progresso de nossos membros: Talks, Lean Coffees, Design Jams, Hackathons e núcleos, como o Health.'
          />
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default WorkSection;
