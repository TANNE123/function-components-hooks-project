import React, { useState } from 'react'
import './card.modules.css'
import { Products } from './cardHandler'


const CardTodo = ()=>{
    const [data,setData]=useState(Products())

    const AddHandler=()=>{
        const currentLength=data.length
        const newObj={id:currentLength+1,name:"rajesh",role:"angler"}
        setData([...data,newObj])
    }


    const RemoveHandler=(targetId)=>{
        const filterObj=data.filter(newData=>newData.id !=targetId)

        setData(filterObj)

    }

  const UpdateHandler = (index) => {
    const UpdateObj = data.map(eachUpdate =>(
        eachUpdate.id === index ? { ...eachUpdate, id: index, name: "madhav", role: "java" } : eachUpdate
    ));

    setData(UpdateObj);
}


    return(
      <>
      <button onClick={AddHandler}>Add Card</button>
      <div className='main-card'>
      {
        data.map(eachItem=>{
            const {id,role,name}=eachItem
            return(
                < div className="card" key={id}>
                <h1 >{name}</h1>
                <h2>{role}</h2>
                <button onClick={()=>RemoveHandler(id)}>Remove</button>
                <button onClick={()=>UpdateHandler(id)}>Update</button>
                </div>
            )
        })
      }
      </div>

      </>
    )
}
export default CardTodo