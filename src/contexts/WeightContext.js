import React, { createContext, useReducer } from 'react'
import WeightReducer from '../reducers/WeightReducer'
import weightService from '../services/weightService'
export const DataContext = createContext()

const DataContextProvider = (props) => {

    const [{ data }, dispatch] = useReducer(WeightReducer, {
        data: weightService.getData()
    })
    return (

        <DataContext.Provider value={{ data, dispatch }}>
            {props.children}
        </DataContext.Provider>

    )

}

export default DataContextProvider
