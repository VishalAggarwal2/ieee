import React, { useContext,useState } from 'react'
import NavBar from './NavBar'
import MyContext from '../Context/createContext'
import {
    Table,
    Thead,
    Tbody,
    Text,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { Stack, Box,StackDivider, VStack } from '@chakra-ui/react'
import "./Style.css"
const TrackGoals = () => {
const{setGoal,userData,goal}=useContext(MyContext);

    const[formData,setFormaData]=useState({
        user:userData._id
    });
useState(()=>{
    setGoal(formData);
},[formData])
  return (
    <div>
      <NavBar></NavBar>
      <Box width={"80%"}margin={"auto"}>
      <Text fontSize={"3rem"}  margin={"1rem"} color={"green"}>Track Your Goals</Text>

      <TableContainer>
  <Table variant='simple'>

    <Thead bg="black" color="white">
      <Tr >
        <Th>Date</Th>
        <Th>Goal</Th>
        <Th isNumeric>ActualCf</Th>
      </Tr>
    </Thead>
    <Tbody>

      {
        goal.map((e)=>{
          return   <Tr color={'white'}  bg={(e.cfGoal-e.cfActual)<0?"red":"green"}>
          <Td>{e.Date}</Td>
          <Td>{e.cfGoal}</Td>
          <Td isNumeric>{e.cfActual}</Td>
        </Tr>
        })
      }
    
 
    </Tbody>

  </Table>
</TableContainer>
      </Box>
    </div>
  )
}

export default TrackGoals
