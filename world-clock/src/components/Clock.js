import React,{useState,useEffect} from 'react';

import {Grid} from "@material-ui/core";
import{ useSelector} from "react-redux"
import moment from "moment-timezone"

function Clock(){
    let timezone = useSelector(state=>state);
    let [time,setTime] = useState(moment.tz(timezone).format('HH:mm:ss'));
   
    const timer = setInterval(()=>setTime(moment.tz(timezone).format('HH:mm:ss')),1000);
    useEffect(()=>{
        return()=>{
            clearTimeout(timer);
        }
    })
    return(<Grid item className='time'>{time}</Grid>);    
}

export default Clock;