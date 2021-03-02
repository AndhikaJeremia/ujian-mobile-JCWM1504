import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeTab from './HomeTab'
import accountScreen from '../screen/account'

const drawer = createDrawerNavigator()

const Drawer = () => {
    return(
        <drawer.Navigator>
            <drawer.Screen name='HomeTab' component={HomeTab} />
            <drawer.Screen name='accountScreen' component={accountScreen} />
        </drawer.Navigator>
    )
}

export default Drawer