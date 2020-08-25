import React , {useState,useEffect} from 'react'

export default function HistoryPreview({item,updateData,removeItem}) {
    const [currDay, setCurrDay] = useState('')

    function handleChange(event) {
        let value=(event.target.name==='date')?event.target.value:+event.target.value
    setCurrDay({...currDay,[event.target.name]:value})

    }

    function setMax(){
        var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');

    }


    useEffect(() => {
        setCurrDay(item)
    }, [])


    return (
        <div className="history-item flex ">
            <input className="history-date" max={setMax()}  type="date" autoComplete="false" name='date' value={currDay.date} onChange={handleChange}/>
            <input className="history-weigth"  type="number" name='weight' value={currDay.weight} onChange={handleChange}/>
            <button className="history-btn save"  onClick={()=>updateData(item,currDay)}>Save</button>
            <button   className="history-btn delete" onClick={()=>removeItem(item)}>Delete</button>
        </div>
    )
}
