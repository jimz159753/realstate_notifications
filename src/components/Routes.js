import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInbox, faFolderPlus, faBook } from '@fortawesome/free-solid-svg-icons'

import Show from './Show/Show';
import Add from './Add/Add';
import Modify from './Modify/Modify';
import Description from './Description/Description';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => (
    <Tab.Navigator>
        <Tab.Screen
            name='Description'
            options={{
                tabBarIcon: () => <FontAwesomeIcon icon={faBook} />
            }} component={Description} />
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
                    initialRouteName="Home"
                    screenOptions={{
                        headerTitleStyle: {
                            textAlign: 'center'
                        }
                    }}>
                    <Stack.Screen
                        name="Home"
                        options={{
                            headerTitle: (props) => <View style={styles.titleContainer}>
                                <Image style={styles.logo} source={require('../static/images/realstate.png')} />
                                <Text>Portal Condominios</Text>
                            </View>
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

const styles = StyleSheet.create({
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 50,
        height: 50
    }
});