import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  Photo,
  ContainerSubtitle,
  SubtitleDescription,
  SubtitleTitle,
} from './styles';

const Card = ({itens}, props) => {
  return (
    <Container>
      <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
        <Photo source={{uri: itens.photo}} />
        <ContainerSubtitle>
          <SubtitleTitle>{itens.subtitle.title}</SubtitleTitle>
          <SubtitleDescription>
            {itens.subtitle.description}
          </SubtitleDescription>
        </ContainerSubtitle>
      </TouchableOpacity>
    </Container>
  );
};

export default Card;
