import React from 'react';
import Figure from './Figure';
import styled from 'styled-components'

const StyleCard = styled.div`
border: 1px solid black;
padding: 2rem;
border-radius: 12px;

  h2 {
    color: ${pr => pr.$color};
    font-size: 2.5em;
    margin: 0 0 1rem 0;
  }

  p {
    margin: 0 0 1.5rem 0;
  

    &::first_line {
        font-size: 1.5em;
    }
  }
`;

export default function Card({ title, text, image, author, date }) {
  return (
    <StyleCard $color="blue" className='card'>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{text}</p>
      <Figure image={image} author={author} date={date} />
    </StyleCard>
  );
}


