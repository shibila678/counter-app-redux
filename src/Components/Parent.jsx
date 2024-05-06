import React,{useState} from 'react'
import Child from './Child'


function Parent() {
    const[name,setName]=useState('Thomas T')
    const age=30
  return (
    <div>
    <Child name={name} age={age}/>
    </div>
  )
}

export default Parent