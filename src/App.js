import styled from "styled-components";
import GlobalStyles  from './GlobalStyles';
import { QUERIES}  from './constants';

import Card from './components/Card';
import Footer from './components/Footer';


const Wrapper = styled.div`
--very-dark-blue: hsl(216, 12%, 8%); 
--attribution: hsl(228, 45%, 44%); 
--light-grey: hsl(217, 12%, 63%);
--medium-grey: hsl(216, 12%, 54%);
--dark-blue: hsl(213, 19%, 18%);
--orange: hsl(25, 97%, 53%);
--white: hsl(0, 0%, 100%);
--gradient: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%); 

  font-family: 'Outfit', sans-serif;
  color: var(--white);
  min-height: 100% ;
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 30px ;
  background-color: var(--very-dark-blue);
  padding: 0 24px;

  @media ${QUERIES.tabletAndUp} {
    padding: 0;
  }
`; 

function App() {
  return (
    <Wrapper>
    <Card/>
    <Footer name='oscar rodriguez' github='https://github.com/OscarRobertRodriguez'/>
    <GlobalStyles/>
    </Wrapper>
  );
}

export default App;
