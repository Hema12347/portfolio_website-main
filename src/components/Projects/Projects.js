import React from 'react';
import ReactTooltip from 'react-tooltip';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects ,chat} from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source} data-tip="hello-world">Source</ExternalLinks>
              <ReactTooltip effect='solid'/>
            </UtilityList>
            <UtilityList>
            <ExternalLinks href={chat.front}>Code</ExternalLinks>
              <ExternalLinks href={chat.back} data-tip="hello-world">Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
          
          
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;