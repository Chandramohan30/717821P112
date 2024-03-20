import axios from "axios";
import { useState } from "react";
import Primes from "./Primes";

export default function Home(){

const[data,setdata]=useState("");
 const[list1,setlist1]=useState({});
 const[list2,setlist2]=useState({});
 const[list3,setlist3]=useState({});
 const[list4,setlist4]=useState({});


    function handlechange(event){
        setdata(event.target.value);
        
    }

    function handleclick()
    {
     if(data =="p"){
             
            axios.get("http://20.244.56.144/numbers/primes").then((res)=>{ setlist1(res.data); }).catch((err)=>{console.log(err)});
           
             console.log(list1);
        }
      if(data=="f"){
       axios.get("http://20.244.56.144/numbers/fibo").then((res)=>{setlist2(res.data)}).catch((err)=>{console.log(err)});
       console.log(list2);
       }
        else if(data=="e"){
      axios.get("http://20.244.56.144/numbers/even").then((res)=>{setlist3(res.data)}).catch((err)=>{console.log(err)});
      console.log(list3);
      }     
       else{
          axios.get("http://20.244.56.144/numbers/rand").then((res)=>{setlist4(res.data)}).catch((err)=>{console.log(err)});
          console.log(list4);
         }
    }

    return(
        <>
        <h1>Average calculator Microservice</h1>
         <label>Enter the qualified type ids:</label><input onChange={handlechange}type="text"></input>
        <button onClick={handleclick}>Fetch</button>
    
       
        
       
        </>
    )
}