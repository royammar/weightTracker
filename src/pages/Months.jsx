import React ,{useContext ,useState,useEffect} from 'react'
import  { DataContext } from '../contexts/WeightContext'
import MonthList from '../cmps/MonthList';

export default function Months() {
    const { data, dispatch } = useContext(DataContext);
    const [weightData, setWeightData] = useState(null)

    useEffect(() => {
        loadData()
       
    }, [])

    function loadData() {
        let items=[]
        for (let index = 1; index <= 12; index++) {
            
         let itemToADD=data.filter(item=>+item.date.substring(5,7)===index)
         items=[...items,{'month':index,data:itemToADD}]
            
        }

        setWeightData(items)
    }

    return (
        <div className="main container line-container flex1">
            <MonthList weightData={weightData}></MonthList>
        </div>
    )
}
