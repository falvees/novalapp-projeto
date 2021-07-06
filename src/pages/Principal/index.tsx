import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  Title,
  SubTitle,
  ContainerTotal,
  ContentTotal,
  IconUsers,
  TotalInfo,
  TextTotal,
  NumberTotal,
  ContainerListUsers,
  IconUser,
  TitleList,
  ContentListUsers,
  UserRow,
  UserTextRow,
  TextHeaderList,
  HeaderList,
} from './styles';

export type User = {
  id: number;
  name: string;
  age: string;
  gender: string;
  type: string;
};

const Principal: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(json => {
        setUsers(json.users);
      });
  }, []);

  return (
    <Container>
      <Title>Novel Consultoria</Title>
      <SubTitle>Teste react</SubTitle>
      <ContainerTotal>
        <ContentTotal>
          <IconUsers name="users" size={30} color="#000" />
          <TotalInfo>
            <TextTotal>TOTAL</TextTotal>
            <NumberTotal>{users.length}</NumberTotal>
          </TotalInfo>
        </ContentTotal>
      </ContainerTotal>
      <ContainerListUsers>
        <TitleList>Lista de usuários</TitleList>
        <ContentListUsers>
          <HeaderList>
            <IconUser name="user" size={20} color="#000" />
            <TextHeaderList>Nome</TextHeaderList>
          </HeaderList>
          <FlatList
            data={users}
            persistentScrollbar
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item, index }) => (
              <UserRow index={index}>
                <UserTextRow>{item.name}</UserTextRow>
              </UserRow>
            )}
          />
        </ContentListUsers>
      </ContainerListUsers>
    </Container>
  );
};

export default Principal;
