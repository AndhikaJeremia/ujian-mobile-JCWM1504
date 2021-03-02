import React from 'react'
import { View, Text } from 'react-native'
import { Header } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import {getGlobal} from '../action'

const homeScreen = ({ navigation }) => {
    const openDrawer = () => {
        navigation.toggleDrawer()
    }
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getGlobal())
    },[])

    const {Data} = useSelector((state) => {
        return {
            Data: state.dataReducer.Global
        }
    })

    console.log(Data)
    return (
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: openDrawer }}
                centerComponent={{ text: 'Covid-19', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                rightComponent={{ icon: 'add-alert', color: '#fff' }}
                backgroundColor='black'
                containerStyle={{ height: 80 }}
            />
            <View style={{backgroundColor:'lightblue', height:250, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Corona Virus Live Update</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ height: 150, backgroundColor: 'salmon', width: 120, borderRadius:20 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', marginVertical:20, textAlign:'center' }}>Total</Text>
                        <Text style={{ fontSize: 20 }}>{Data.TotalConfirmed}</Text>
                        <Text style={{ fontSize: 20 }}> + {Data.NewConfirmed}</Text>
                    </View>
                    <View style={{ height: 150, backgroundColor: 'salmon', width: 120, borderRadius:20 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', marginVertical:20, textAlign:'center' }}>Recovered</Text>
                        <Text style={{ fontSize: 20 }}>{Data.TotalRecovered}</Text>
                        <Text style={{ fontSize: 20 }}> + {Data.NewRecovered}</Text>
                    </View>
                    <View style={{ height: 150, backgroundColor: 'salmon', width: 120, borderRadius:20 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', marginVertical:20, textAlign:'center' }}>Death</Text>
                        <Text style={{ fontSize: 20 }}>{Data.TotalDeaths}</Text>
                        <Text style={{ fontSize: 20 }}> + {Data.NewDeaths}</Text>
                    </View>
                </View>
            </View>
            <Text> Health Tips </Text>
        </View>
    )
}

export default homeScreen