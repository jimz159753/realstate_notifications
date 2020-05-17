import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInbox, faFolderPlus, faEdit, faFolderMinus } from '@fortawesome/free-solid-svg-icons'

import Show from './Show/Show';
import Add from './Add/Add';
import Modify from './Modify/Modify';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => (
    <Tab.Navigator>
        <Tab.Screen
            name='Mostrar'
            options={{
                tabBarIcon: () => <FontAwesomeIcon icon={faInbox} />
            }} component={Show} />
        <Tab.Screen
            name="Agregar"
            options={{
                tabBarIcon: () => <FontAwesomeIcon icon={faFolderPlus} />
            }}
            component={Add} />
    </Tab.Navigator>
)

export default class Routes extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitleStyle: {
                            textAlign: 'center'
                        }
                    }}>
                    <Stack.Screen
                        name="Home"
                        options={{
                            title: 'Portal de Condominios'
                        }}
                        component={HomeScreen} />
                    <Stack.Screen 
                    name="Modify" 
                    options={{
                        title: ''
                    }}
                    component={Modify} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
