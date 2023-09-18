import React,{useContext, useState} from 'react'
import NavBar from './NavBar'
import { Stack,Text, StackDivider, VStack,Box ,Input,Button} from '@chakra-ui/react'
import "./Style.css"
import MyContext from '../Context/createContext'
const Goal = () => {
    const{userData,setGoal,addGoal,goal}=useContext(MyContext);
    const[err,seterr]=useState("");
    const[formData,setFormaData]=useState({
        user:userData._id
    });
    const onChange=(e)=>{
setFormaData({
    ...formData,
    [e.target.name]:e.target.value
})
    }
    const onSumbit=()=>{
        console.log(formData);
        if(!formData.Date||!formData.cfGoal){
          seterr("Pls Fill The Data Carefully");
          return
        }
        else{
          addGoal(formData);
          seterr("Goal Added Succ");

        }

    }
  
  return (
    <div>
      <NavBar></NavBar>
      <div className='Login'>
        <Text fontSize={"3rem"} color={"green"}>Set Your Goals</Text>
      <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  <Box h='40px' >
  <Input
    placeholder='Date'
    _placeholder={{ opacity: 1, color: 'gray.500' }}
    name="Date"
    type='date'
    onChange={onChange}
  />

  </Box>
  <Box h='40px'>
  <Input
    placeholder='CarbonFootPrint Target'
    _placeholder={{ opacity: 1, color: 'gray.500' }}
    name="cfGoal"
    onChange={onChange}

  />

  </Box>
  <Button  onClick={onSumbit}colorScheme='green' size='md'>
SetGoal
  </Button></VStack>

      </div>
  <Box textAlign={"center"} color={"red"}>
{err    }
  </Box>
    </div>

  )
}

export default Goal
