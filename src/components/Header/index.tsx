import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import { Container, DrawerButton } from './styles';
import { Image, View } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const Header: React.FC = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <DrawerButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon name="bars" size={18} color="#231E36" />
      </DrawerButton>

      <Image source={require('../../assets/logo.png')} />

      <View/>
    </Container>
  );
}

export default Header;