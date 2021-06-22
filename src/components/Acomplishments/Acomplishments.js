import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from '../../components/Technologies/TechnologiesStyles';

const data = [
  {  text: 'Set up the end to end application monitoring and alerting system for Apache kafka, spark and elastic search instances'},
  { text: 'Implemented CI/CD pipeline integration to spin up the JMeter scripts when a new code deployment is taken and provide automated test results', },
  { text: 'Used Visual Studio profiler to identify the bottlenecks in the application and recommend the code optimization for the same', },
  {  text: 'Recommended utilizing a RabbitMQ service in order to queue the service request from the client to the server and not to overwhelm the server at once', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    
    <Boxes>
      {data.map((card, index) => (
        <Box key = {index}>
          {/* <List> */}
      {/* <ListItem> */}
        {/* <ListContainer> */}
          {/* <BoxNum>{card.number}+</BoxNum> */}
          <BoxText>{card.text}</BoxText>
          {/* </ListContainer> */}
       {/* </ListItem> */}
    {/* </List> */}
        </Box>
      ))}
      
    </Boxes>
   
  </Section>
);

export default Acomplishments;
