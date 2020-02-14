import styled from 'styled-components/native';

export const Container = styled.View`
  height: 80px;
  background-color: #222;
  border-top-color: #000;
  border-top-width: 2px;
`;

export const SubContainer = styled.View`
  margin-top: 5px;
  height: 60px;
  flex-direction: row;
`;

export const GroupAction = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ActionName = styled.Text`
  color: #fff;
  font-size: 11px;
  padding: 5px;
`;
