import React from 'react';

import {Container, Title, SlideScroll} from './styles';
import Card from '../Card';

const SlideCard = ({slide}) => {
  return (
    <Container>
      <Title>{slide.title}</Title>
      <SlideScroll>
        {slide.itens &&
          slide.itens.map((itens, index) => <Card key={index} itens={itens} />)}
      </SlideScroll>
    </Container>
  );
};

export default SlideCard;
