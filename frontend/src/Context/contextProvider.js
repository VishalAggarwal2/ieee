// MyContextProvider.js
import React, { useState,useContext } from "react";
import MyContext from "./createContext";
const MyContextProvider = ({ children }) => {
  const [data, setData] = useState("Initial Value");
  const[DailyData,setDailyData]=useState([]);
  const[DailyDatac,setDailyDatac]=useState([]);
  const[userData,setUserdata]=useState({});
  const[activityData,setActivityData]=useState([]);
  const[goal,setuserGoal]=useState([]);
  const sendData=async(path,obj)=>{
   const getdata = await  fetch(path, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
  })
  
  const jsondata = await getdata.json();
// console.log(jsondata);


  setUserdata({...jsondata})
  if(!jsondata.error){
    setActivityData([...jsondata.Activity]);

  }

  console.log(activityData)
  return jsondata
  

  }
  const getDailydatauser=async(obj)=>{
    const getdailldataus = await  fetch("https://ieee-api-tawny.vercel.app/activity/dailyactivity", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
  })
  const jsdd= await getdailldataus.json();
setDailyData([...jsdd.daily]);
return jsdd
  }
// for compare
const getDailydatacompare=async(obj)=>{
  const getdailldatac = await  fetch("https://ieee-api-tawny.vercel.app/activity/dailyactivity", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
})
const jsdd= await getdailldatac.json();
if(jsdd.daily){
  setDailyDatac(jsdd.daily);

}
return jsdd
}

  const[isLogin,setisLogin]=useState(false);
const setGoal=async(obj)=>{
  const getallgoal = await  fetch("https://ieee-api-tawny.vercel.app/activity/getgoal", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
})
const jsdd= await getallgoal.json();
setuserGoal([...jsdd]);
console.log(jsdd);
}

const addGoal=async(obj)=>{
  const addgoal = await  fetch("https://ieee-api-tawny.vercel.app/activity/addgoal", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
})

// const jsa= await addGoal.json();

}
const logout=()=>{
  
}
const obj ={data,setData,sendData,setDailyDatac,goal,DailyDatac,addGoal,getDailydatacompare,setGoal,getDailydatauser,isLogin,setisLogin,userData,activityData,DailyData,setDailyData}
  return (
    <MyContext.Provider value={obj}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
