import React,{useState, useEffect} from 'react'

export default function AddNew({ addNewItem}) {
    const [currDay, setCurrDay] = useState({'date':'','weight':0})

    function handleChange(event) {
        let value=(event.target.name==='date')?event.target.value:+event.target.value
        setCurrDay({...currDay,[event.target.name]:value})
    
        }


        function handleSave() {
            addNewItem(currDay)
            setCurrDay({'date':'','weight':0})
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
    return (

        <div className="history-item flex1 flex">
            <input className="history-date" type="date" max={setMax()} autoComplete="false" name='date' placeholder="##/##/##" value={currDay.date} onChange={handleChange}/>
            <input className="history-weigth" type="number"  name='weight' value={currDay.weight} placeholder="Weigth" onChange={handleChange}/>
            <button className="history-btn save" onClick={handleSave}>Add New</button>
        </div>
    )
}
