import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface UserRowProps {
  index: number;
}

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 25px;
  text-align: center;
  margin-top: 40px;
`;

export const SubTitle = styled.Text`
  font-size: 25px;
  color: #9b9b9b;
  text-align: center;
  margin-bottom: 40px;
`;

export const ContainerTotal = styled.View`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  border-width: 1px;
  border-radius: 10px;
  border-color: #e7e7e7;
  border-bottom-width: 2px;
  border-top-width: 0;
  elevation: 2;
`;

export const ContentTotal = styled.View`
  background-color: #dbf6ff;
  padding: 20px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconUsers = styled(FeatherIcon)``;

export const TotalInfo = styled.View`
  align-items: center;
`;

export const TextTotal = styled.Text`
  font-size: 14px;
`;

export const NumberTotal = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const ContainerListUsers = styled.View`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  flex: 1;
  border-width: 1px;
  border-radius: 10px;
  border-color: #e7e7e7;
  border-bottom-width: 2px;
  border-top-width: 0;
  elevation: 2;
`;

export const IconUser = styled(FeatherIcon)`
  margin-right: 10px;
`;

export const TitleList = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ContentListUsers = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const UserRow = styled.View<UserRowProps>`
  padding: 5px;
  background-color: ${props => (props.index % 2 === 0 ? '#FFFFFF' : '#f2f2f2')};
`;

export const UserTextRow = styled.Text``;

export const HeaderList = styled.View`
  flex-direction: row;
  background-color: #f2f2f2;
  padding: 5px;
`;

export const TextHeaderList = styled.Text`
  font-weight: bold;
`;
