import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import navStrings from "../../constants/navigationStrings"
import { HOME, LOGIN } from '../../Screens';

const Stack = createNativeStackNavigator();

const AuthRoots = () => { // here manage those stack which only show while condition is perform.
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen component={LOGIN} name={navStrings.login} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

const MainRoots = () => { // here manage those stack which only show while condition is perform.
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen component={HOME} name={navStrings.home} />
            </Stack.Group>
        </Stack.Navigator>
    )
}
const StackNavigaiton = () => {
    return (
        <Stack.Navigator initialRouteName={navStrings.mainRoots}>
            <Stack.Screen component={AuthRoots} name={navStrings.authRoots} options={{headerShown:false}} />
            <Stack.Screen component={MainRoots} name={navStrings.mainRoots} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default StackNavigaiton