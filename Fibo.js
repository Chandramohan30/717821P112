import React from 'react'
import axios from 'axios';
export default function Fibo() {
    axios.get("http://20.244.56.144/numbers/fibo").then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err)});
}
