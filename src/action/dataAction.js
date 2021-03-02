import Axios from 'axios'

export const getGlobal = () => {
    return async(dispatch) => {
        try{
            const res = await Axios.get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')
            console.log(res.data.Global)
            dispatch({
                type: 'GLOBAL',
                payload: res.data.Global
            })
        }
        catch(err){
            console.log
        }
    }
}

export const getCountries = () => {
    return async(dispatch) => {
        try{
            const res = await Axios.get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')
            console.log(res.data.Countries)
            dispatch({
                type: 'COUNTRIES',
                payload: res.data.Countries
            })
        }
        catch(err){
            console.log
        }
    }
}