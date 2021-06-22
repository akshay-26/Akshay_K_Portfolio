import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { DiCssdeck } from 'react-icons/di';
import { AiFillGithub} from 'react-icons/ai'
import { ListItem } from '../Technologies/TechnologiesStyles';



const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <br/>
    <SectionTitle >Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          {/* <Img src ={image} /> */}
          <TitleContent>
            
            <HeaderThree title>{title}</HeaderThree>
            <Hr /> 
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <br/>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key="i">{tag}</Tag>
              ))}
            </TagList>
          </div>
          <AiFillGithub size="3rem" />
            <UtilityList>             
              <ExternalLinks href={visit} target="_blank">Code</ExternalLinks>                
                {/* <ExternalLinks href={source}>Source</ExternalLinks> */}
            </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;