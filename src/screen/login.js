import React from 'react'

import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../action'


const loginScreen = ({ navigation }) => {
    const [username, setUser] = React.useState("")
    const [password, setPass] = React.useState("")
    
    const dispatch = useDispatch()
    
    const {name} = useSelector((state) => {
        return {
            name: state.userReducer.username
        }
    })

    const loginBtn = () => {
        dispatch(login(username))
        setUser('')
        setPass('')
    }

    React.useEffect(() => {
        if(name) return navigation.navigate('Drawer')
    }, [name])

    return (
        <View style={{padding:20, flex: 1}} >
            <Text style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: 'black',
                marginBottom:20
            }}>Login</Text>
            <Input
                placeholder='Username'
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                onChangeText={setUser}
                value={username}
                label='Username'
                labelStyle={{ fontSize: 20, color: 'black' }}
            />
            <Input
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={setPass}
                value={password}
                secureTextEntry
                label='Password'
                labelStyle={{ fontSize: 20, color: 'black' }}
            />
            <Button title='Login' onPress={loginBtn} />
        </View>
    )
}

export default loginScreen