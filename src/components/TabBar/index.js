import React, {useState} from 'react';
import {Container, SubContainer, GroupAction, ActionName} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TabBar = () => {
  const [iconConfigure] = useState({
    color: '#fff',
    size: 25,
  });
  return (
    <Container>
      <SubContainer>
        <GroupAction>
          <Icon name="home" {...iconConfigure} />
          <ActionName> Início </ActionName>
        </GroupAction>
        <GroupAction>
          <Icon name="search" {...iconConfigure} />
          <ActionName> Buscar </ActionName>
        </GroupAction>
        <GroupAction>
          <Icon name="book-reader" {...iconConfigure} />
          <ActionName> Sua Biblioteca </ActionName>
        </GroupAction>
      </SubContainer>
    </Container>
  );
};

export default TabBar;
