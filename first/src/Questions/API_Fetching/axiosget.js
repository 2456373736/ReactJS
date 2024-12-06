import React , {useState,useEffect} from 'react';
import axios from 'axios'
function Axiosget(){

const [userData, setUserData]= useState([]);
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response);
        setUserData(response.data);
    })
},[])




    return (
        <>
        <div>
            {userData.map((data)=>{
                return (
                <div>{data.name}</div>
                )
            })}
        </div>
        </>
    )

}
export default Axiosget;