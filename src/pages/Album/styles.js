import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #111;
`;

export const ContainerHeader = styled(LinearGradient).attrs({
  colors: ['#111', 'transparent', 'transparent', '#111'],
})`
  height: 50%;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonRandomOrder = styled.TouchableOpacity`
  background-color: #1dd15d;
  padding: 20px 90px;
  border-radius: 30px;
`;
export const ButtonRandomOrderText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const InfoCategory = styled.Text`
  color: #fff;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerMusic = styled.View`
  flex: 1;
  width: 100%;
`;

export const Music = styled.View`
  flex-direction: row;
  height: 60px;
  align-items: center;
  justify-content: space-between;
`;
export const MusicGroupAllItens = styled.View`
  flex-direction: row;
`;
export const MusicGroupItens = styled.View``;
export const MusicNumber = styled.Text`
  color: #e6e6e6;
  padding: 20px;
`;

export const MusicName = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: #fff;
  padding: 5px 0px;
  width: 320px;
  font-size: 18px;
`;

export const MusicListening = styled.Text`
  color: #aaa;
  font-size: 16px;
`;

export const Photo = styled.Image`
  position: absolute;
  left: 0;
  top: 0%;
  right: 0;
  height: 290px;
  bottom: 50%;
`;

export const ContainerNavBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const GroupItemNavBar = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonFollow = styled.Text`
  margin-right: 20px;
  color: #ffffff;
  font-weight: bold;
  border-color: #fff;
  border-width: 2px;
  padding: 6px 10px;
  border-radius: 6px;
`;

export const ContainerInfoBand = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const BandName = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  padding: 15px;
`;
export const BandFooter = styled.Text`
  font-size: 13px;
  text-transform: uppercase;
  color: #e6e6e6;
  font-weight: bold;
`;
