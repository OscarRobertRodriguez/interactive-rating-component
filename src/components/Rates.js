import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { QUERIES } from "../constants";


const Wrapper = styled.div`
  /* figure out how to use grid to get items to go to next row on smaller screens */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: calc(24 / 16 * 1rem);

  @media ${QUERIES.tabletAndUp} {
    padding-bottom: calc(32 / 16 * 1rem); 
  }
`;


const Rate = styled.div`
  width: calc(42/ 16 * 1rem);
  height: calc(42/ 16 * 1rem);
  background-color: var(--dark-blue);
  border-radius: 50% ;
  display: grid;
  place-items: center;
  font-weight: 700;
  color: var(--medium-grey);
  font-size: calc(14/ 16 * 1rem);
  cursor: pointer;

  &:hover {
    background: var(--orange);
    color: var(--white);
  }

  ${({ active }) =>
    active && 
    `
     background-color: var(--medium-grey);
     color: var(--white);
  `}

@media ${QUERIES.tabletAndUp} {
  width: calc(51/ 16 * 1rem);
  height: calc(51/ 16 * 1rem);
  font-size: calc(16/ 16 * 1rem);
  }
`;


const values = [1, 2, 3, 4, 5];


const Rates = ({selectedRateHandler}) => {
  const [active, setActive] = useState(values[0]);
  
  useEffect(() => {
     selectedRateHandler(values[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
  
 
  return (
    <Wrapper>
      {values.map((value) => (
        <Rate onClick={() => { setActive(value); selectedRateHandler(value)}} key={value} active={active === value}>
          {value}
        </Rate>
      ))}
    </Wrapper>
  );
};



export default Rates;
