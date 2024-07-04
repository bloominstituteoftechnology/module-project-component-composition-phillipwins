import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  background: tan;
`;

const CardTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
  background: tan;
`;

const CardDate = styled.p`
  font-size: 1em;
  color: #555;
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const CardText = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
`;

function Card({ title, text, imageURL, date }) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardDate>{date}</CardDate>
      <CardImage src={imageURL} alt={title} />
      <CardText>{text}</CardText>
    </CardContainer>
  );
}

export default Card;
