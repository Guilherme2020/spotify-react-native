import React, {useState, useEffect} from 'react';

import {Container, ContainerList} from './styles';
import SlideCard from '../../components/SlideCard';
import TabBar from '../../components/TabBar';
import Mock from '../../services/mock';

const Main = props => {
  const [slides, setSlides] = useState([]);

  const onFetchSlides = async () => {
    let response = await Mock.fetchSlides();
    // console.warn(response);
    setSlides(response);
  };

  useEffect(() => {
    // console.warn('props',props);
    onFetchSlides();
  }, []);

  const goAlbumScreen = item => {
    console.warn(item);
    props.navigation.navigate('Album', {album: item.album});
  };

  return (
    <Container>
      <ContainerList
        data={slides}
        keyExtractor={item => String(item.id)}
        renderItem={({item, index}) => (
          <SlideCard
            // key={item.id}
            slide={item}
            goAlbum={goAlbumScreen}
          />
        )}
      />

      <TabBar />
    </Container>
  );
};

export default Main;
// {slides &&
//   slides.map((slide, index) => (
//     <SlideCard
//       onPress={() => goAlbum(slide)}
//       key={index}
//       slide={slide}
//     />
//   ))}
