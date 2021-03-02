import React from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'
import { Header } from 'react-native-elements'
import { DataTable } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../action';


const liveUpdate = ({ navigation }) => {
    const itemsPerPage = 10;
    const [page, setPage] = React.useState(0);
    const from = page * itemsPerPage;
    const to = (page + 1) * itemsPerPage;

    const openDrawer = () => {
        navigation.toggleDrawer()
    }
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getCountries())
    }, [])

    const { Data } = useSelector((state) => {
        return {
            Data: state.dataReducer.Countries
        }
    }, [])

    const RenderTableRow = () => {
        return (
            <>
                {Data ? Data.map((item, index) => {
                    return (
                        <DataTable.Row key={index}>
                            <DataTable.Cell>{item.Country}</DataTable.Cell>
                            <DataTable.Cell>{item.NewConfirmed}</DataTable.Cell>
                            <DataTable.Cell>{item.TotalConfirmed}</DataTable.Cell>
                            <DataTable.Cell>{item.TotalRecovered}</DataTable.Cell>
                            <DataTable.Cell>{item.TotalDeaths}</DataTable.Cell>
                        </DataTable.Row>
                    )
                }) : <ActivityIndicator size="large" color='black' /> }
            </>
        )
    }


    console.log(Data)
    return (
        <ScrollView>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: openDrawer }}
                centerComponent={{ text: 'Covid-19', style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
                backgroundColor='black'
                containerStyle={{ height: 80 }}
            />
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Region</DataTable.Title>
                    <DataTable.Title numeric>New Cases</DataTable.Title>
                    <DataTable.Title numeric>Total Cases</DataTable.Title>
                    <DataTable.Title numeric>Recovered</DataTable.Title>
                    <DataTable.Title numeric>Death</DataTable.Title>
                </DataTable.Header>
                {RenderTableRow()}
            </DataTable>
        </ScrollView>
    )
}

export default liveUpdate