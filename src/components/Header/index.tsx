import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { Container, LeftButton } from './styles';
import { Image, View } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

interface Props {
  back?: boolean;
}

const Header: React.FC<Props> = ({ back }) => {
  const navigation = useNavigation()

  return (
    <Container>
      { back 
        ? (
          <LeftButton onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={18} color="#231E36" />
          </LeftButton>
        )
        : (
          <LeftButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon name="bars" size={18} color="#231E36" />
          </LeftButton>
        )
      }

      <Image source={require('../../assets/logo.png')} />

      <View/>
    </Container>
  );
}

export default Header;