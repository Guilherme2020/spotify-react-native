import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #111;
`;

export const ContainerScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;
