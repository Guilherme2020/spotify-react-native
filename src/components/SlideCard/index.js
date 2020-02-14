import React from 'react';

import { Container, Title, SlideScroll } from './styles';
import Card from '../Card';

const SlideCard = ({slide}, ...props) => {
  return (
    <Container>
      <Title>{slide.title}</Title>
      {/* <SlideScroll>
        {slide.itens &&
          slide.itens.map((itens, index) => <Card key={index} itens={itens} />)}
      </SlideScroll> */}
      <SlideScroll
        data={slide.itens}
        keyExtractor={item => String(item.id)}
        renderItem={() =>
          slide.itens.map((itens, index) => (
            <Card onPress={props.onPress} key={index} itens={itens} />
          ))
        }
      />
    </Container>
  );
};

export default SlideCard;
