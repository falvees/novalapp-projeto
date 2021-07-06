import styled from 'styled-components/native';

export const ButtomIconHeader = styled.TouchableOpacity`
  padding-left: 20px;
  flex: 1;
`;

export const Container = styled.SafeAreaView`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const ContentHeader = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;
export const Title = styled.Text`
  font-size: 22px;
  color: #000000;
`;
export const SubTitle = styled.Text`
  font-size: 22px;
  color: #9b9b9b;
`;
export const ContainerProfile = styled.View`
  flex-direction: row;

  padding: 20px;
  margin-left: auto;
`;
export const ContentDataProfile = styled.View`
  display: flex;
  flex-direction: column;
`;
export const NameUser = styled.Text`
  font-size: 20px;
  color: #000000;
  font-weight: 300;
`;
export const TypeUser = styled.Text`
  color: #bbbbbb;
  font-size: 14px;
  font-weight: 600;
`;
export const AvatarProfile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin: 0 10px;
`;

export const Logo = styled.Image.attrs({
  resizedMode: 'contain',
})`
  height: 34px;
  width: 100px;
`;
