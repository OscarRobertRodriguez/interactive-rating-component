
import styled from "styled-components";


const Wrapper = styled.footer`
font-size: calc(11 / 16 * 1rem); 
color: var(--medium-grey);
& a {
  color: var(--attribution);
  text-transform: capitalize ;
}
`;


const Footer = ({name, github})  => {
  return (
    <Wrapper>  
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" alt='frontend mentor site' rel='noreferrer' target="_blank">Frontend Mentor</a>. 
       Coded by <a href={github}>{name}</a>. 
    </Wrapper>
  )
}


export default Footer;