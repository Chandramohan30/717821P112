import React from 'react'
import axios from 'axios';
export default function Even() {
    axios.get("http://20.244.56.144/numbers/even").then((res)=>{console.log(res.data)}).catch((err)=>{console.log(err)});
}
