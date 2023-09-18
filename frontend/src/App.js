import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import DailyActivity from './Components/DailyActivity';

import Compare from './Components/Compare';
import UserInfo from './Components/UserInfo';
import Calculator from './Components/Calculator';
import Goal from './Components/Goal';
import Devlopers from './Components/Devlopers';
import TrackGoals from './Components/TrackGoals';
import Home from './Components/Home';
const App = () => {
  return (

      <Routes>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/signup'  element={<SignUp></SignUp>}/>
        <Route path='/activity' element={<DailyActivity></DailyActivity>}/>
        <Route path='/caluculator' element={<Calculator></Calculator>}/>
        <Route path='/aboutus' element={<Devlopers></Devlopers>}/>
        <Route path='/goal' element={<Goal></Goal>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/trackgoal' element={<TrackGoals></TrackGoals>}/>
        <Route path='/comparision'  element={<Compare></Compare>}/>
        <Route path='/userInfo'  element={<UserInfo></UserInfo>}/>
      </Routes>

  )
}

export default App
