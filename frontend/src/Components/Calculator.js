import React,{useContext, useState} from 'react'
import {  HStack,VStack ,Button,Box ,StackDivider,Heading,Text,Input} from '@chakra-ui/react'
import "./Style.css"
import NavBar from './NavBar'
import MyContext from '../Context/createContext'
const Calculator = () => {
      const{sendData,userData}=useContext(MyContext)
    const[formdata,setFormdata]=useState({carbonFactor:0,user:userData._id});
    const[cf,setCf]=useState(0);
    const[er,seter]=useState("");
const onChange=(e)=>{
setFormdata({
    ...formdata,
    [e.target.name]:e.target.value
})
}
const calculate__cf=async()=>{
//     console.log(formdata)
if(!formdata.electricity||!formdata.diesel||!formdata.petrol||!formdata.water||!formdata.paper){
      seter("fill all  the data");
      return
}
    const electricity = parseFloat(formdata.electricity);
    const diesel = parseFloat(formdata.diesel);
    const petrol = parseFloat(formdata.petrol);
    const water = parseFloat(formdata.water);
    const gas = parseFloat(formdata.gas);
    const paper = parseFloat(formdata.paper);
    const cff = electricity * 0.0023 + diesel * 0.0063 + petrol * 0.0072 + water * 0.001 * 0.149 + gas * 0.18316 + paper*1.04;      
formdata.carbonFactor=cff;
const bool=await sendData("https://ieee-api-tawny.vercel.app/activity/addactivity",formdata);
if(bool.error){
    seter(bool.error)
}
console.log("formdata us")
console.log(formdata)
setCf(cff);

console.log(formdata)
// console.log(cf)
}

  return (
    <div>
      <NavBar></NavBar>
      <div  className="Login">

      <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>

<Heading color={"green"}>Carbon Footprint</Heading>
<HStack css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}} justifyContent={"space-between"}  alignItems={"center"}>

<Text mb='8px'>ActivityName: </Text>

      <Input
    name="title" onChange={onChange}

        placeholder='Title Of The Activity'
        size="md"
      />
</HStack>
<HStack css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}} justifyContent={"space-between"}   alignItems={"center"}>

<Text mb='8px'>Date: </Text>
      <Input
          name="Date" onChange={onChange}

        type='Date'
        placeholder='Here is a sample placeholder'
        size="md"
      />
</HStack>
<HStack css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}} justifyContent={"space-between"}  alignItems={"center"}>

<Text mb='8px'>Electricity: </Text>
      <Input
  name="electricity" onChange={onChange}
        placeholder='Electricity Used'
        size="md"
      />
</HStack>
<HStack css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}} justifyContent={"space-between"} alignItems={"center"}>

<Text mb='8px'>NaturalGas/LPG: </Text>
      <Input
  name="gas" onChange={onChange}
        placeholder='NaturalGas/LPG'
        size="md"
      />
</HStack>

<HStack css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}} justifyContent={"space-between"}  alignItems={"center"}>

<Text mb='8px'>Petrol: </Text>
      <Input
  name="petrol" onChange={onChange}
        placeholder='Petrol'
        size="md"
      />
</HStack>
<HStack css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}} justifyContent={"space-between"}  alignItems={"center"}>

<Text mb='8px'>Diesel: </Text>
      <Input
  name="diesel" onChange={onChange}
        placeholder='Diesel'
        size="md"
      />
</HStack>
<HStack css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}} justifyContent={"space-between"}  alignItems={"center"}>

<Text mb='8px'>Water Supply: </Text>
      <Input
  name="water" onChange={onChange}
        placeholder='WaterSupply'
        size="md"
      />
</HStack>
<HStack css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}}  justifyContent={"center"} alignItems={"center"}>

<Text mb='8px'>Paper Waste: </Text>
      <Input
  name="paper" onChange={onChange}
        placeholder='Paper Waste'
        size="md"
      />
</HStack>
<Text mb='8px'> Carbon Footprint:-{cf} </Text>
<Text mb='8px' color={"red"}> {er} </Text>

<Button onClick={calculate__cf} marginBottom={"5rem"} colorScheme='green' size='md'>
    Calculate
  </Button>
</VStack>
</div>

    </div>
  )
}

export default Calculator
