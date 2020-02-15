import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #111;
`;

export const ContainerList = styled.FlatList.attrs({
  // showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  horizontal: false,
})``;
