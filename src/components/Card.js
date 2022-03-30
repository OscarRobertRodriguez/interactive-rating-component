import styled from "styled-components";
import React, {useState} from "react";
import { QUERIES}  from '../constants';
import IconStar from '../images/icon-star.svg'
import ThankYouImg from '../images/illustration-thank-you.svg'; 
import Rates from './Rates'; 
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { SignalCellularNullSharp } from "@material-ui/icons";


const Wrapper = styled.div`
  width: min( calc(412 / 16 * 1rem), 100%);
  border-radius:  calc(15/ 16 * 1rem);
  background: var(--gradient);
  display: flex;
  flex-direction: column ;
  padding: 0 calc(24/ 16 * 1rem);
  padding-top:  calc(24/ 16 * 1rem);
  padding-bottom:  calc(32/ 16 * 1rem);

  @media ${QUERIES.tabletAndUp} {
    border-radius: calc(30/ 16 * 1rem);
    padding: calc(32 / 16 * 1rem); 
  }

`;

const IconWrapper = styled.div`
  width: calc(40 / 16 * 1rem);
    height: calc(40 / 16 * 1rem);
  border-radius: 50% ;
  background-color: var(--dark-blue);
  justify-self: start ;
  display:grid ;
  align-items:center ;
  justify-content: center;

  @media ${QUERIES.tabletAndUp} {
    width: calc(48 / 16 * 1rem);
    height: calc(48 / 16 * 1rem);
  }
`;

const Icon = styled.img`
width: calc(14/ 16 * 1rem);
height:calc(14/ 16 * 1rem) ;

@media ${QUERIES.tabletAndUp} {
  width: calc(17/ 16 * 1rem);
  height:calc(17/ 16 * 1rem) ;
  }
`;

const TextWrapper = styled.div`
 padding-top: calc(16/ 16 * 1rem) ;

 @media ${QUERIES.tabletAndUp} {
  padding-top: calc(30/ 16 * 1rem) ;
  }
`;

const Title = styled.h2`
font-size:  calc(24/ 16 * 1rem);
font-weight: 700;
line-height: calc(30/ 16 * 1rem);

@media ${QUERIES.tabletAndUp} {
  font-size:  calc(28/ 16 * 1rem);
  line-height: calc(35/ 16 * 1rem);
  }
`;

const Info = styled.p`
  font-size: calc(14 / 16 * 1rem);
  font-weight: 400;
  line-height: calc(22 / 16 * 1rem);
  color: var(--light-grey);
  padding-top: calc(17 / 16 * 1rem);
   padding-bottom: calc(24/ 16 * 1rem); 

   @media ${QUERIES.tabletAndUp} {
    padding-top: calc(15 / 16 * 1rem);
    font-size: calc(15 / 16 * 1rem);
    line-height: calc(24 / 16 * 1rem);
  }
`;



const SubmitButton = styled.button`
   width: min(100% , calc(341 / 16 * 1rem));
   border-radius:  calc(22.5/ 16 * 1rem);
   background-color: var(--orange);
   border: none;
   padding:  calc(12/ 16 * 1rem) 0;
   font-size: calc(14/ 16 * 1rem);
   cursor: pointer ;
   color: inherit;
   text-transform: uppercase ;
   font-weight: 700;
   letter-spacing: calc(1.87/ 16 * 1rem);
   transition: color, background-color .45ms ease-in-out ;

   &:hover {
     color: var(--orange); 
     background-color: var(--white);
   }

   @media ${QUERIES.tabletAndUp} {
    font-size: calc(15/ 16 * 1rem);
    letter-spacing: calc(2/ 16 * 1rem);
  }
`;


const Img = styled.img`
  width: min(100%, 162px);
  padding-top: calc(10 /16 * 1rem);
  padding-bottom: calc(24/ 16 * 1rem)

`;

const ThanksButton = styled.button`
   width: min(100% , calc(341 / 16 * 1rem));
   border-radius:  calc(22.5/ 16 * 1rem);
   background-color: var(--dark-blue);
   border: none;
   padding:  calc(5/ 16 * 1rem) 0;
   font-size: calc(14/ 16 * 1rem);
   cursor: pointer ;
   color: var(--orange);
   text-transform: uppercase ;
   font-weight: 700;
   letter-spacing: calc(1.87/ 16 * 1rem);
   transition: color, background-color .45ms ease-in-out ;
`;

const Card = () => {
  const [submit, setSubmit] = useState(false); 
  const [selectedRate, setSelectedRate] = useState(undefined); 
  const [valueExist, setValueExist] = useState(null); 
 
  const selectedRateHandler = (value) => {
    setSelectedRate(value)  
  } 

  const setReminderHandler = (value) => {
    

    if(!value && value !== null && !selectedRate) {
      return "Select a Value"; 
    } 
      return "Submit" 
    
  }
 
  return (
    <Wrapper>
    {submit  ?  
      <>
      <Img style={{alignSelf: 'center', display: 'block'}} src={ThankYouImg}  />
      <ThanksButton>you selected {selectedRate} out of 5</ThanksButton>
      <Title style={{textAlign: "center", paddingTop: "24px"}}>Thank you!</Title>
      <Info style={{textAlign: "center"}}>
         We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </Info>
      </>
    :
     <>
      <IconWrapper>
        <Icon src={IconStar} />
      </IconWrapper>
      <TextWrapper>
        <Title>How did we do?</Title>
        <Info>
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </Info>
      </TextWrapper>
       <Rates selectedRateHandler={selectedRateHandler}/>
      <div className='buttonWrapper' style={{cursor: 'pointer'}} onClick={(e) => !selectedRate ? setValueExist(false)  : setValueExist(true) }> 
       <SubmitButton disabled={!selectedRate} style={{pointerEvents: selectedRate ? 'auto' : 'none'}} onClick={() => setSubmit(true)} value='button' type='submit'>{ setReminderHandler(valueExist) }</SubmitButton>
      </div>
      </>
  }
    </Wrapper>
  );
};

export default Card;
