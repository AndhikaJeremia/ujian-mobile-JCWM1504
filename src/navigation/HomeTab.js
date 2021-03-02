import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeScreen from '../screen/home'
import liveUpdate from '../screen/liveUpdate'


import Icon from 'react-native-vector-icons/FontAwesome5'

const tab = createBottomTabNavigator()

const HomeTab = () => {
    return(
        <tab.Navigator 
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName

                if (route.name === 'homeScreen') {
                    iconName = 'home'
                }
                else if (route.name === 'liveUpdate'){
                    iconName = 'table'
                }
                return <Icon name={iconName} size={size} color={color}/>
            }
            
        })} 
        >
            <tab.Screen name='homeScreen' component={homeScreen} options={{tabBarLabel:''}} />
            <tab.Screen name='liveUpdate' component={liveUpdate} options={{tabBarLabel:''}}/>
        </tab.Navigator>
    )
}

export default HomeTab