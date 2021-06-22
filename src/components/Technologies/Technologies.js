import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaNode} from 'react-icons/fa'
import { GrTest, GrDocumentTest,GrTestDesktop} from 'react-icons/gr'
import { BsCodeSlash} from 'react-icons/bs'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import {BsCardChecklist} from 'react-icons/bs'
const style = { color: "white", fontSize: "3rem" }

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technology</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web and API development world.
    </SectionText>
    <List>
      <ListItem>
        <BsCodeSlash size="3rem"  />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with <br />
          Node.js, Java, Python & Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>FrameWorks</ListTitle>
          <ListParagraph>Experience with <br />
          Apache Kafka, Spark, Express
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BsCardChecklist style={style}  />
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>Experience with <br />
          Functional and Non-Functional Testing
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
