import AsyncStorage from "@react-native-async-storage/async-storage"

export const login = (data) => {
    return async (dispatch) => {
        try{
            await AsyncStorage.setItem('token', data)
            dispatch({
                type:'LOGIN',
                payload: data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export const keeplogin = () => {
    return async (dispatch) => {
        try{
            const token = await AsyncStorage.getItem('token')
            if(!token) return
            dispatch({
                type:'LOGIN',
                payload: token
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export const logout = () => {
    return async(dispatch) => {
        try{
            await AsyncStorage.removeItem('token')
            dispatch({
                type: 'LOGOUT'
            })
        }
        catch(err){
            console.log(err)
        }
    }
}