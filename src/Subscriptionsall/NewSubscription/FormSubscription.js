import { useState,useEffect } from "react";
import "./FormSubscription.css";

import React from 'react'


 const FormSubscription=(props) =>{
  const[value,setValue ]=useState({title:"" , date:"" , amount:""})
  const[isvalid, setIsValid]=useState(true)

 useEffect(()=>{
  alert('Add new one!')
 })


  const onChangeHandler=(event)=>{
    setValue({...value,[event.target.name]:event.target.value})
    if(event.target.value.length>0){
      setIsValid(true);
    }
    
    console.log(value)
    }
   const onSubmitHandler=(event)=>{
    event.preventDefault()
    
    if(value.title.length==0){
      

      setIsValid(false);

      return
    }

  
    const Subscription={title:value.title,date:new Date((value.date)),amount:value.amount};
    props.onSave(Subscription)
    
    console.log("on submit",Subscription)
    setValue({title:"" , date:"" , amount:""})
   }
  return (
      <form onSubmit={onSubmitHandler}>
        <div className="new_susbcription">
        <div className={` new_susbcription_control   ${!isvalid?'invalid':''}`}>
          <label>Title</label>
          <input type="text" name="title"  value={value.title} placeholder="enter subscription"onChange={onChangeHandler}/>


      </div>
          <div className="new_susbcription_control">
            <label>Date</label>
            <input type="date" name="date"  value={value.date}onChange={onChangeHandler}/>
          </div>
        
          <div className="new_susbcription_control">
            <label>Amount</label>
            <input type="text" name="amount" value={value.amount} placeholder="enter amount"onChange={onChangeHandler}/>
          </div>
          <div className="new_susbcription_control">
          <button type="submit">Add Subscription</button>
          

          </div>
        </div>
      
      </form>
    );
  
 }
export default FormSubscription;
