import React from 'react'
import MonthPreview from './MonthPreview'

export default function MonthList({weightData}) {
    return (
        <div>
            {weightData&& weightData.map(month=>month.data.length>0&&<MonthPreview key={month.month} month={month}></MonthPreview>)}
        </div>
    )
}
