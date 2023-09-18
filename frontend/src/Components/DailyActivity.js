import React, { useContext } from 'react'
import NavBar from './NavBar'
import MyContext from '../Context/createContext'
import {
  Accordion,
  AccordionItem,Text,
  AccordionButton,
  Stack,VStack,StackDivider,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react' 
import "./Style.css"
const DailyActivity = () => {
  const{activityData}=useContext(MyContext);
  return (
    <div>
      <NavBar></NavBar>
      <Text marginTop={"3rem"} textAlign={"center"}  color="green"fontSize='6xl'> Your Activity</Text>
      <>
      {activityData.map((e)=>{
        return<Box width={"80%"} margin={"auto"} border={"solid"} marginTop={"1rem"} >
        <Accordion allowToggle>
  <AccordionItem alignItems={"center"}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' alignItems={"center"} textAlign='center'>
        <Stack direction={['column', 'row']} align={"center"} justifyContent={"space-evenly"}>
  <Box  >
{e.title}
  </Box>
  <Box alignItems={"center"} >
    {e.Date}
  </Box>
  <Box alignItems={"center"} >
{e.carbonFactor}
  </Box>
 
</Stack>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
   
    <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  <Box  >
   <p> Electricity:    {e.electricity}  </p> 
   <p>  gas:    {e.gas}</p>
   <p>     paper:    {e.paper}
 </p>
 <p>
 petrol:    {e.petrol}

 </p>
 <p>
 water:    {e.water}

 </p>
  </Box>
<Box>
<p>Formula Used </p>

<p>
  
 CarbonFootprint  = 
electricity * 0.0023 + diesel * 0.0063 + petrol * 0.0072 + water * 0.001 * 0.149 + gas * 0.18316 + paper * 1.04


</p>
</Box>
<Box>
<p>Caculation-</p>
<p>



  {
`    ${e.electricity} * 0.0023 + ${e.diesel} * 0.0063 + ${e.petrol} * 0.0072 +${e.water} * 0.001 * 0.149 +${e.gas} * 0.18316 + ${e.paper} *1.04 = ${e.carbonFactor}
`
  
}
</p>
</Box>
</VStack>
 
    </AccordionPanel>
  </AccordionItem>


</Accordion>
        </Box>
      })}
      </>
    </div>
  )
}

export default DailyActivity
