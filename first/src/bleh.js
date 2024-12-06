import React , {useState}from 'react'
import axios from 'axios';

function Bleh() {
    const data= {
        fname: "",
        lname: ""
    };
    const [inputData, setData]= useState(data);

    const handleChange= (e)=>{
            setData({...inputData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then ((response)=>{
            console.log(response);
        })
    }
    const handleUpdate = (e)=>{
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((response)=>{
            console.log(response);
        })
    }
const handleDelete = (e)=>{
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
    .then((response)=>{
        console.log(response);
    })
}
  return (
    <div>

        <label>First Name: </label>
        <input type= "text" name="fname" value={inputData.fname}onChange={handleChange}/><br/>
        <label>Last Name: </label>
        <input type= "text" name="lname" value={inputData.lname} onChange={handleChange}/>
        <button type= "submit" onClick={handleSubmit}>Submit</button>        
        <button type= "text" onClick={handleUpdate}>Update</button>        

        <button type= "text" onClick={handleDelete}>Delete</button>

    </div>
  )
}

export default Bleh