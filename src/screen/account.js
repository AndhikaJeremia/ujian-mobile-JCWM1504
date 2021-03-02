import React from 'react'
import {View, Text} from 'react-native'
import {Button, Header} from 'react-native-elements'

import {useDispatch} from 'react-redux'
import { logout } from '../action'

const accountScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const logoutBtn = () => {
        dispatch(logout())
    }

    const openDrawer = () => {
        navigation.toggleDrawer()
    }

    return(
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress:openDrawer }}
                centerComponent={{ text: 'Covid-19', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                rightComponent={{icon: 'add-alert', color: '#fff'}}
                backgroundColor='black'
                containerStyle={{ height: 80 }}
            />
            <Text style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: 'black',
                margin:20
            }} >Account</Text>
            <Button title='Log Out' onPress={logoutBtn}  />
        </View>
    )
}

export default accountScreen