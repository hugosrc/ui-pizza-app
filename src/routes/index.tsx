import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Shop from '../pages/Shop'
import Details from '../pages/Details'
import Cart from '../pages/Cart'

const Drawer = createDrawerNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="shop" component={Shop} />
        <Drawer.Screen name="cart" component={Cart} />
        <Drawer.Screen name="details" component={Details} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}