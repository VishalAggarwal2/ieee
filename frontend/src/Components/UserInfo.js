import React ,{useContext}from 'react'
import "./Style.css"
import MyContext from '../Context/createContext'
import { VStack,Box,StackDivider    } from '@chakra-ui/react';
import NavBar from './NavBar';
const UserInfo = () => {
    
const{userData}=useContext(MyContext);
  return (
    <>
        <NavBar></NavBar>

    <div className='Login info' >

        <VStack
        border={"solid green 10px"}
        padding={"70px"}

        borderRadius={"20px"}
        textAlign={"center"}

  divider={<StackDivider borderColor='gray.200' />}
  spacing={8}
  css={{'@media screen and (max-width: 610px)':{
    padding:"10px"
    
  }}}
  align='stretch'
>
  <Box h='40px' css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}}>
<span> Name:- </span>  {
        userData.FirstName 
    }  { userData.LastName }
  </Box>
  <Box css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}} h='40px' >
  <span> Email:- </span>  {
        userData.Email 

}
  </Box>
  <Box h='40px' css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}}>
  <span> Phone:- </span> {
            userData.Phone 

}
  </Box>
  <Box css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}} h='40px'>
  <span> ShareData:- </span> {

            userData.ShareData?"Yes":"No" 

}
  </Box>


</VStack>
    </div></>
  )
}

export default UserInfo
