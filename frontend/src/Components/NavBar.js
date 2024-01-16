import React, { useContext,useRef,useState } from 'react'

import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import "./Style.css"
import {
    NavLink,

} from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  VStack ,
  StackDivider,

  PopoverFooter,
  PopoverArrow,

  Button,Box,Portal,

  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import MyContext from '../Context/createContext';
import { color } from 'framer-motion';
const NavBar = () => {
  const[toggle,setToggle]=useState(false);
  const initRef = React.useRef()
  const{setisLogin,isLogin}=useContext(MyContext);  
  return (
    <div className='nav flexrow'> 
    <div>
      <img  width="50" src="Logo.png" alt="" />
    </div>
    <ul className='flexrow'>
      {isLogin?<> 

        <NavLink   to="/activity">
        
        <li className='sp'>  Activity</li></NavLink>


    <NavLink  to="/caluculator">    <li className='sp'>  Calculator</li></NavLink> 
      


    <NavLink  to="/comparision">    <li className='sp'>  compare</li></NavLink> 
    <NavLink  to="/goal">    <li className='sp'>  Goal</li></NavLink> 
      


    <NavLink  to="/userInfo">     <li className='sp'>userInfo</li></NavLink>
    <NavLink  to="/trackgoal">     <li className='sp'>TrackGoals</li></NavLink>
    <NavLink  to="/">     <li className='sp'>Home</li></NavLink>


      <NavLink  className="s"  to="/home" onClick={()=>{
      setisLogin(!isLogin);
    }}>    <li className='sp'>  Logout</li></NavLink> 


<div className='show600'>
<Popover>
  <PopoverTrigger>
    <Button onClick={()=>{setToggle(!toggle)}}>{toggle?<CloseIcon></CloseIcon>:<DehazeIcon></DehazeIcon>}</Button>
  </PopoverTrigger>
  <PopoverContent width={"10rem"}  color='black'>
  <NavLink   to="/activity">
        
        <li style={{color:"black"}}>  Activity</li></NavLink>
 <NavLink  to="/caluculator">    <li style={{color:"black"}}>  Calculator</li></NavLink> 
 <NavLink  to="/comparision">    <li style={{color:"black"}}>  compare</li></NavLink> 
 <NavLink  to="/userInfo">     <li style={{color:"black"}}>userInfo</li></NavLink>
 <NavLink  to="/goal">    <li style={{color:"black"}}>  Goal</li></NavLink> 
 <NavLink  to="/trackgoal">     <li style={{color:"black"}}>TrackGoals</li></NavLink>
 <NavLink  to="/">     <li style={{color:"black"}}>Home</li></NavLink>

 <NavLink className="s"  to="/" onClick={()=>{
      setisLogin(!isLogin);
    }}>    <li style={{color:"black"}} >  Logout</li></NavLink> 
  </PopoverContent>
</Popover>
  
</div>





    </>:<>  
 <NavLink  to="/">     <li >Home</li></NavLink>
    
      <NavLink  to="/login">    <li> Login</li></NavLink>
    <NavLink  to="/signup">     <li>   signup</li></NavLink>
    
    </>}

   
    </ul>
       

    </div>
  )
}

export default NavBar
