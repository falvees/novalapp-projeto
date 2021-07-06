import React from 'react';

import {
  Container,
  ContainerProfile,
  ContentDataProfile,
  NameUser,
  TypeUser,
  AvatarProfile,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <ContainerProfile>
      <ContentDataProfile>
        <NameUser>João da Silva</NameUser>
        <TypeUser>ADMINISTRADOR</TypeUser>
      </ContentDataProfile>

      <AvatarProfile
        source={{ uri: 'https://avatars.githubusercontent.com/u/43909770?v=4' }}
      />
    </ContainerProfile>
  </Container>
);

export default Header;
