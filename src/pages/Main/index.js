import React, {useState, useEffect} from 'react';

import {Container, ContainerScrollView} from './styles';
import SlideCard from '../../components/SlideCard';
import TabBar from '../../components/TabBar';
import Mock from '../../services/mock';

const Main = (props) => {
  const [slides, setSlides] = useState([]);

  const onFetchSlides = async () => {
    let response = await Mock.fetchSlides();
    console.warn(response);
    setSlides(response);
  };

  useEffect(() => {
    // console.warn('props',props);
    onFetchSlides();
  }, []);

  return (
    <Container>
      <ContainerScrollView>
        {slides &&
          slides.map((slide, index) => (
            <SlideCard
              onPress={() => console.warn('teste')}
              key={index}
              slide={slide}
            />
          ))}
      </ContainerScrollView>
      <TabBar />
    </Container>
  );
};

export default Main;
