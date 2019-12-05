import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Image from 'gatsby-image';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Tab, { Panel } from 'common/src/components/Tabs';
import SectionWrapper, { ContentWrapper } from './branchSection.style';

const BranchSection = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     charityJson {
  //       branchData {
  //         id
  //         menuItem
  //         image {
  //           publicURL
  //           childImageSharp {
  //             fluid(quality: 100) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //         slogan
  //         title
  //         description
  //         linkUrl
  //         linkText
  //       }
  //     }
  //   }
  // `);
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        branchData {
          id
          menuItem
          image
          slogan
          title
          description
          linkUrl
          linkText
        }
      }
    }
  `);
  const title = text => {
    return { __html: text };
  };

  return (
    <>
    gg
    <SectionWrapper id="branch">
      <Tab active={2}>
        {data.charityJson.branchData.map(item => (
          <Panel
            title={<Text content={item.menuItem} />}
            key={`tab_key${item.id}`}
          >
            <ContentWrapper>
              <Fade>
                <div className="image">
                  <img
                    src={item.image.publicURL}
                    alt={`Charity landing image ${item.id}`}
                    className="tab_image"
                  />
                </div>
              </Fade>
              <div className="content">
                <Heading as="h4" content={item.slogan} />
                <h2 dangerouslySetInnerHTML={title(item.title)} />
                <Text content={item.description} />
                <a className="learn__more-btn" href={item.linkUrl}>
                  <span className="hyphen" />
                  <span className="btn_text">{item.linkText}</span>
                </a>
              </div>
            </ContentWrapper>
          </Panel>
        ))}
      </Tab>
    </SectionWrapper>
    </>
  );
};

export default BranchSection;
