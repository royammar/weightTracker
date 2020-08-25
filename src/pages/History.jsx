
import  { DataContext } from '../contexts/WeightContext'
import React,{useState,useEffect,useContext} from 'react'
import HistoryList from '../cmps/HistoryList';
import weightService from '../services/weightService';
import AddNew from '../cmps/AddNew';

export default function History() {
    const { data, dispatch } = useContext(DataContext);

    function updateData(item,updatedItem){
        try {
            const updatedItems=weightService.update(item,updatedItem)
      
      
        dispatch({ type: "SET_UPDATED",updatedItems });
      } catch (err) {
        console.log(" err in data", err);
      }
    }

    function removeItem(item){
        try {
        const itemToDelete=weightService.deleteItem(item)
      
        dispatch({ type: "DELETE_ITEM",itemToDelete });
      } catch (err) {
        console.log(" err in data", err);
      }
    }

    function addNewItem(item) {
    try {
        const itemToAdd=weightService.addItem(item)
   
        dispatch({ type: "ADD_ITEM",itemToAdd });
      } catch (err) {
        console.log(" err in data", err);
      }
    }


    
    return (
      
      <div className="history-container flex column  align-center">
      <AddNew  addNewItem={addNewItem}></AddNew>
            <HistoryList updateData={updateData} removeItem={removeItem}  data={data}></HistoryList>
        </div>
    )
}
