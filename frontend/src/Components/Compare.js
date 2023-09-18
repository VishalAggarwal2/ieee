import React,{useContext,useEffect,useState} from 'react'
import NavBar from './NavBar'
import "./Style.css"
import {Bar} from "react-chartjs-2";
import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Portal,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import {
 
  PointElement,
  LineElement,

  Filler,

} from 'chart.js';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,Text,
  Tr,
  Th,
  Td,
  TableCaption,Input,
  TableContainer,
  Button,
} from '@chakra-ui/react'
import MyContext from '../Context/createContext'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarElement, // Register BarElement
  PointElement, // Register PointElement
  LineElement, 
);
const Compare = () => {
  const[formData,setFormData]=useState({});
  const[serror,setError]=useState("");
  const{DailyData,setDailyData,setDailyDatac,DailyDatac,getDailydatauser,userData,getDailydatacompare}=useContext(MyContext);
  useEffect(()=>{
    getDailydatauser(userData);
  },[])

  const onChange=(e)=>{
    setFormData({
      ...formData,
[e.target.name]:e.target.value
    })

  }
  const smbit=async()=>{
const bool = await  getDailydatacompare(formData);
if(bool.error){
setError(bool.error);
setDailyDatac([]);
}else{
setError("");

}
  }   
const data={
  labels : DailyData.map((e)=>{
   return e.Date
  }),
  datasets:[
    {
      label: 'CarbonFactor Of Day',
      data: DailyData.map((e)=>{
        return e.carbonFactorTotal
       }),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'green',
    }
  ]

}

const options={

}
const datac={
  labels : DailyDatac.map((e)=>{
   return e.Date
  }),
  datasets:[
    {
      label: 'CarbonFactor Of Day',
      data: DailyDatac.map((e)=>{
        return e.carbonFactorTotal
       }),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'green',
    }
  ]

}

const optionsc={

}
const arr1= DailyData.map((e)=>{
  return e.Date
 })
 const arr2=DailyDatac.map((e)=>{
  return e.Date
 })
const lable =[...arr1,...arr2];
const datal={
  labels : lable,
  datasets:[
    {
      label: ' Your CarbonFactor',
      data: DailyData.map((e)=>{
        return e.carbonFactorTotal
       }),
      borderColor: 'green',
      backgroundColor: 'black',
    },
    {
      label: 'CarbonFactor Of compared user',
      data: DailyDatac.map((e)=>{
        return e.carbonFactorTotal
       }),
      borderColor: 'pink',
      backgroundColor: 'red',
    },
  ]

}

const optionsl={
  responsive: true,
}
  return (
    <div>
      <NavBar></NavBar>
      <div className="Login">
      <Text fontSize='3xl' color={"green"}> Your Daily Data</Text>

      <Bar  data={data} options={options}></Bar>

      </div>
      <div className='Login' >


      <TableContainer border={"solid black"}>
  <Table variant='simple'>

    <Thead>
      <Tr>
        <Th>Date</Th>
        <Th>CarbonFotprint Of that Day</Th>

      </Tr>
    </Thead>
    <Tbody>
      {
        DailyData.map((e)=>{
        return  <Tr>
          <Td>{e.Date}</Td>
          <Td>{e.carbonFactorTotal}</Td>
  
        </Tr>
        })
      }
      
    </Tbody>
   
  </Table>
</TableContainer>
      </div>
      <div className='Login'>
      <Popover >
  <PopoverTrigger>
    <Button>DummyUser</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>Dummy Data</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
     <div>
      Email:- geustuser@gmail.com
     </div>
      </PopoverBody>
      <PopoverFooter>
      <div>
      Email:- geustuser2@gmail.com
     </div>
      </PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>
      <Text fontSize={'3xl'} color={"green"}>Compare Your Data</Text>
      <Input
      marginBottom={"1rem"}
      name='Email'
      onChange={onChange}
      marginTop={"1rem"}
    color='green'
    placeholder='Search Your Friend With Email'
    _placeholder={{ opacity: 0.4, color: 'grey' }}
  />
<Button  onClick={smbit} marginBottom={"1rem"}  textAlign={"center"} >Compare</Button>
<p color='red'>{serror}</p>
{
  DailyDatac[0]?<>
     <TableContainer border={"solid black"}>
  <Table variant='simple'>

    <Thead>
      <Tr>
      <Th>Date</Th>
        <Th>CarbonFotprint Of that Day</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        DailyDatac.map((e)=>{
        return  <Tr>
          <Td>{e.Date}</Td>
          <Td>{e.carbonFactorTotal}</Td>
  
        </Tr>
        })
      }
      
    </Tbody>
   
  </Table>
</TableContainer>

<Bar data={datac} options={optionsc}></Bar>
<Text marginTop={"3rem"} color={"green"} fontSize={"3rem"}>Comparison Of The Data</Text>
<Line data={datal} options={optionsl}></Line>
  </>:<></>
}
   
      </div>
    </div>
  )
}

export default Compare
