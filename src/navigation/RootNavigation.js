import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StackNavigaiton from './Stack/StackNavigaiton'

const RootNavigation = () => {
  return (
    <NavigationContainer>
        <StackNavigaiton />
    </NavigationContainer>
  )
}

export default RootNavigation