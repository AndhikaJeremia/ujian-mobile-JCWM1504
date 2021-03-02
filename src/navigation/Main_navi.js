import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'

import loginScreen from '../screen/login'
import Drawer from './Drawer'

import {keeplogin} from '../action'

const stack = createStackNavigator()

const MainNavi = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(keeplogin())
    },[])

    const {name} = useSelector((state) => {
        return {
            name: state.userReducer.username
        }
    })

    return(
        <stack.Navigator headerMode={false}>
            {name ? (
                <stack.Screen name='Drawer' component={Drawer} />
            ) : (
                <stack.Screen name='loginScreen' component={loginScreen} />
            )}
        </stack.Navigator>
    )
}

export default MainNavi