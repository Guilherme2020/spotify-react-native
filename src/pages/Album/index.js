import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  ContainerHeader,
  ContainerNavBar,
  GroupItemNavBar,
  ButtonFollow,
  ContainerInfoBand,
  BandName,
  BandFooter,
  Photo,
  Content,
  ButtonRandomOrder,
  ButtonRandomOrderText,
  InfoCategory,
  ContainerMusic,
  MusicGroupAllItens,
  MusicGroupItens,
  Music,
  MusicNumber,
  MusicName,
  MusicListening,
} from './styles';

// import musics from './music.json';
import TabBar from '../../components/TabBar';

const Album = props => {
  const [detail, setDetail] = useState({});
  const [iconConfigure] = useState({
    size: 16,
    color: '#fff',
  });
  useEffect(() => {
    console.warn(props);
    const detailProp = props.navigation.state.params.album;
    setDetail(detailProp);
  }, []);
  const musicsC = musics => {
    if (musics) {
      return (
        // musics &&
        musics.map((music, index) => (
          <Music key={index++}>
            <MusicGroupAllItens>
              <MusicNumber>{index++}</MusicNumber>
              <MusicGroupItens>
                <MusicName>{music.name}</MusicName>
                <MusicListening>{music.listening}</MusicListening>
              </MusicGroupItens>
            </MusicGroupAllItens>
            <Icon
              name="ellipsis-v"
              color="#aaa"
              size={16}
              style={{padding: 30}}
            />
          </Music>
        ))
      );
    }
  };
  const goBack = () => {
    props.navigation.pop();
  };
  return (
    <Container>
      <ContainerHeader>
        <Photo
          source={{
            uri: detail && detail.photo,
          }}
        />
        <ContainerNavBar>
          <Icon onPress={() => goBack()} name="arrow-left" {...iconConfigure} />
          <GroupItemNavBar>
            <ButtonFollow>Seguindo</ButtonFollow>
            <Icon name="ellipsis-v" {...iconConfigure} />
          </GroupItemNavBar>
        </ContainerNavBar>
        <ContainerInfoBand>
          <BandName>{detail && detail.name}</BandName>
          <BandFooter>{detail && detail.listening} ouvintes mensais</BandFooter>
        </ContainerInfoBand>
      </ContainerHeader>

      <Content>
        <ButtonRandomOrder>
          <ButtonRandomOrderText>Ordem Aleatória</ButtonRandomOrderText>
        </ButtonRandomOrder>
        <InfoCategory>Popular</InfoCategory>
        <ContainerMusic>
          <ScrollView>
            {/* <Musics musics={detail.musics} /> */}
            {musicsC(detail && detail.musics)}
          </ScrollView>
        </ContainerMusic>
      </Content>
      <TabBar />
    </Container>
  );
};

export default Album;
