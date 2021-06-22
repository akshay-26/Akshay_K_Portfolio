import React from 'react';

import { Section, SectionText, SectionTitle,SectionTitle1 } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <section row nopadding>
    <LeftSection>
    <SectionTitle main center>
        Hi! <br />
        I am Akshay Kulkarni 
        </SectionTitle>
        <SectionTitle1>
        Welcome To <br />
        My Personal Portfolio
        </SectionTitle1>
      
      <SectionText>
      Deadline-oriented Programmer with proficiency in Java, Node js, Visual Studio Profilers and Performance testing. Skilled Software development professional in software design, development and testing. A collaborative team player with a commitment to building a positive business culture.
      </SectionText>
      <Button onClick ={() => window.location = 'https://linkedin.com/in/akshay-kulkarni-a1888773'}>
        Learn More
      </Button>
    </LeftSection>
  </section>
);

export default Hero;