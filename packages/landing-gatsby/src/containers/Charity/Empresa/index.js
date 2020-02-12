import React from 'react';

import styled from 'styled-components';
import HeroImg from 'common/src/assets/image/hero.svg';
import Challenge from 'common/src/assets/image/challenge.svg';
import World from 'common/src/assets/image/world.svg';
import Process from 'common/src/assets/image/process.svg';
import Deal from 'common/src/assets/image/deal.svg';
import Contact from 'common/src/assets/image/contact.svg';
import Taq from 'common/src/assets/image/taqtile.png';
import Corall from 'common/src/assets/image/corall.png';


const HeroWrapper = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    padding: 10%;
    background-image: url(${HeroImg});
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: right center;
`;

const ColumnWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 0 20%;
    align-items: center;
    margin-bottom: 100px;
    margin-top: 100px;
`;

const ContatosWrapper = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    padding: 10%;
    background-image: url(${Contact});
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: right center;
`;

const LastColumnWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 0 20%;
    align-items: center;
    margin-bottom: 30px;
`;

const ParceiroWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 0 25%;
    align-items: center;
    margin-bottom: 50px;

`;

const H1 = styled.h1`
    font-family: Helvetica;
    font-size: 70px;
    font-weight: lighter;
    width: 50%; 
    display: block;
    margin-bottom: 8px;
`;

const H2 = styled.h2`
    font-family: Helvetica;
    font-size: 30px;
    font-weight: lighter;
    width: 30%; 
    display: block;
    margin-top: 8px;
    color: grey;
    line-height: 35px;
`;

const H3 = styled.h3`
    font-family: Helvetica;
    font-size: 35px;
    font-weight: lighter;
    display: block;
    margin-bottom: 8px; 

`;

const H5 = styled.h5`
    font-family: Helvetica;
    font-size: 25px;
    display: block;
    margin-bottom: 8px; 
`;

const P = styled.p`
    font-family: Helvetica;
    font-size: 20px;
    font-weight: lighter; 
    display: block;
    margin-bottom: 8px; 
    line-height: 30px;
`;

const P2 = styled.p`
    font-family: Helvetica;
    font-size: 16px;
    font-weight: lighter; 
    display: block;
    margin-bottom: 8px; 
    line-height: 24px;
`;

const Img = styled.img`
    width: 50%; 
    padding: 30px; 
`;

const Img2 = styled.img`
    width: 250px; 
    padding: 30px; 
`;

export const Hero = () => {
    return (
        <HeroWrapper>
            <H1>Indigo.health</H1>
            <H2>Uma nova forma de lidar com os desafios na saúde</H2>
        </HeroWrapper>
    );
}

export const What = () => {
    return (
        <ColumnWrapper>
            <Img src={Challenge} />
            <div>
                <H3>Ajudamos nossos parceiros a resolverem desafios na área da saúde</H3>
                <P>A Indigo tem por missão suportar projetos concebidos nas diversas áreas da saúde, passando por desafios que vão de agendamento de consultas até cuidados paliativos.</P>
            </div>

        </ColumnWrapper>
    );
}

export const What2 = () => {
    return (
        <ColumnWrapper>
            <div>
                <H3>O melhor dos mundos</H3>
                <P>Juntamos não só pessoas de diferentes contextos profissionais, como também as capacitamos para se tornarem profissionais híbridos, entendendo diferentes áreas de forma integral. Assim, associamos expertises técnicas de diversas áreas da saúde a conhecimentos sobre Design Thinking, gestão, negócios e inovação.</P>
            </div>
            <Img src={World} />
        </ColumnWrapper>
    );
}

export const What3 = () => {
    return (
        <ColumnWrapper>
            <Img src={Process} />
            <div>
                <H3>Processos pragmáticos e adaptados ao setor da saúde</H3>
                <P>Utilizamos abordagens de Design Thinking, criação de modelos de negócio e análise estratégica de processos para ajudar nossos parceiros a resolverem seus desafios. </P>
                <P>Cocriamos, prototipamos, testamos e conduzimos pesquisas com diversos stakeholders para maximizar aprendizados e conceber soluções viáveis e relevantes para quem as utiliza. </P>
                <P>Entregamos especial valor não só pela capilaridade que temos em diversos ambientes acadêmicos e profissionais na área da saúde, como pelas parcerias e mecanismos que desenvolvemos a fim de assegurar uma sinérgica atuação de todos no processo de entrega de valor.</P>
            </div>

        </ColumnWrapper>
    );
}

export const What4 = () => {
    return (
        <LastColumnWrapper>
            <div>
                <H3>Fazendo com quem entende do assunto</H3>
                <P>Para desafios nesse setor tão complexo que é a saúde, não poderíamos deixar de atuar junto a profundos conhecedores do mercado e das metodologias inerentes ao que fazemos. Assim, contamos com o apoio estratégico e operacional dos seguintes parceiros em nossos projetos</P>
            </div>
            <Img src={Deal} />

        </LastColumnWrapper>
    );
}

export const Parceiros = () => {
    return (
        <div>
            <ParceiroWrapper>
                <div>
                    <H5>Taqtile</H5>
                    <P2>Desenvolvedora de estratégias de concepção de produtos e serviços digitais. Com 12 nos no mercado e grandes cases internacionais e na área da saúde, é referência no mercado na área de desenvolvimento, Design Sprints e operação na área tecnológica.</P2>
                </div>               
                <Img2 src={Taq} />
            </ParceiroWrapper>
            <ParceiroWrapper>
                <div>
                    <H5>Corall</H5>
                    <P2>Para desafios nesse setor tão complexo que é a saúde, não poderíamos deixar de atuar junto a profundos conhecedores do mercado e das metodologias inerentes ao que fazemos. Assim, contamos com o apoio estratégico e operacional dos seguintes parceiros em nossos projetos</P2>
                </div>               
                <Img2 src={Corall} />
            </ParceiroWrapper>
        </div>
    );
}

export const Contatos = () => {
    return (
        <ContatosWrapper>
            <H1>Contato</H1>
            <H2>contato@indigohive.com.br</H2>
        </ContatosWrapper>
    );
}


