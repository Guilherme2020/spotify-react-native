import React from 'react';
import {
  Container,
  Photo,
  ContainerSubtitle,
  SubtitleDescription,
  SubtitleTitle,
} from './styles';

const Card = ({itens}) => {
  return (
    <Container>
      <Photo source={{uri: itens.photo}} />
      <ContainerSubtitle>
        <SubtitleTitle>{itens.subtitle.title}</SubtitleTitle>
        <SubtitleDescription>{itens.subtitle.description}</SubtitleDescription>
      </ContainerSubtitle>
    </Container>
  );
};

export default Card;
