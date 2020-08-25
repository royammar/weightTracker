import React from 'react'
import HistoryPreview from './HistoryPreview'

export default function HistoryList({data,updateData,removeItem}) {
    return (

         data.map((item,index)=><HistoryPreview key={item.date} updateData={updateData} removeItem={removeItem} item={item}></HistoryPreview>)
   
    )
}
