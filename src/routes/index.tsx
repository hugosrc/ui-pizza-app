import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Shop from '../pages/Shop'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerRoutes = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="shop" component={Shop} />
  </Drawer.Navigator>
)

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="drawer" component={DrawerRoutes} />
    </Stack.Navigator>
  </NavigationContainer>
)