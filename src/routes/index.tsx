import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Shop from '../pages/Shop'
import Details from '../pages/Details'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const StackRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen name="details" component={Details} />
  </Stack.Navigator>
)

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="shop" component={Shop} />
        <Drawer.Screen name="details" component={StackRoutes} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}