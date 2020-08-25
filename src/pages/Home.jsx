import React,{useState,useEffect,useContext} from 'react'

import {Line} from 'react-chartjs-2'
import  { DataContext } from '../contexts/WeightContext'
import weightService from '../services/weightService';

export default function Home() {
    
    const { data, dispatch } = useContext(DataContext);
    const [weightData, setWeightData] = useState(null)
    const [viewlength,setViewLength]=useState(data.length)
    const [dates,setDates]=useState({from:'1900-01-01',to:Date.now()})
    const [streak,setStreak]=useState(0)
    
    useEffect(() => {
        loadData()
        calculateStreak()
      
    }, [viewlength,dates])


    function loadData() {
        let savedData=weightService.getData(dates)

      
        try {
            dispatch({ type: "SET_DATA",savedData });
          } catch (err) {
            console.log(" err in data", err);
          }
    
        setWeightData({
            labels:savedData.slice(Math.max(savedData.length - viewlength, 0)).map(item=>item.date),
            datasets:[
                {
                    label:'Weight',
                    data:savedData.map(item=>item.weight),
                    backgroundColor:['rgba(75,192,192,0.6'],
                    borderWidth:4
                
                }]


        
            }    )
       

    }


        function handleViewChange(ev) {
            setDates({from:'1900-01-01',to:Date.now()})
            setViewLength(+ev.target.value)

        }


        function handleDateChange(ev){
            if(ev.target.name==="from"&&new Date(ev.target.value)>(new Date(data[data.length-1].date))) return
            setViewLength(data.length)
            setDates({...dates,[ev.target.name]:ev.target.value})
           
        }


        function calculateStreak() {
            let prevWeigth=data[0].weigth
            let currStreak=0
            let max=0
            const maxStreak=data.reduce((acc, curr) => {
                if(curr.weight<prevWeigth){
                    acc++
                    currStreak++
                    if (currStreak>max)max=currStreak
                }
                else{
                    acc=0
                    currStreak=0
                }
                prevWeigth=curr.weight
                return acc
              }, 0)
            
              setStreak(max)  

        }


    return (
        <div className="main container flex1  " >
            <div className="btn-wrapper flex justify-center space-around flex1">
            <div className="flex wrap">
            <button className="btn" value='7' onClick={handleViewChange}>7 Days</button>
            <button className="btn" value='30'  onClick={handleViewChange}>30 Days</button>
            <button className="btn" value='99999'  onClick={handleViewChange}>All Data</button>
            </div>
            <div className="dates-wrapper">
                <label htmlFor="from">From</label>
                <input className="input" onChange={handleDateChange} type="date" name="from" value={weightData?.labels?.length>0&&weightData.labels[0]}  max={data[data.length-1].date}></input>
                <label htmlFor="to">To</label>
                <input className="input" min={data[0].date} onChange={handleDateChange} value={weightData?.labels?.length>0&&weightData.labels[weightData.labels.length-1]} type="date" name="to"></input>
            </div>
            </div>
            {weightData&&
            <div className="margin-top flex align-center justify-center line-container flex1">
            <Line data={weightData} options={{responsive:true,
            scales:{
                yAxes:[{
                    ticks:{
                        
                    }
                }]
            }
            
            }}></Line>
            </div> }

          <div>
            {data&&
         <div>
        <div className="data margin-top flex column justify-center align-center">
            <h3 className="title">Current Weight</h3>
         <div className="values">{data[data.length-1].weight} KG</div>
        </div>

        <div className="data flex column justify-center align-center">
            <h3 className="title">Progress Done</h3>
            <div className="values">{data[data.length-1].weight-data[0].weight} KG</div>
        </div>


        <div className="data flex column justify-center align-center">
            <h3 className="title">Longest Streak</h3>
            <div className="values">{streak} Days</div>
        </div>

        </div>

            }
        </div>
        
        </div>

    )
}
