import React ,{useState}from 'react'
import NavBar from './NavBar'
import MyContext from '../Context/createContext'
import "./Style.css"
import { Stack, HStack, VStack,Text,StackDivider,Input,InputGroup ,InputRightElement,Heading,Button} from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,Portal,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const nav= useNavigate();
  const [show, setShow] = React.useState(false)
  const[error,setError]=useState("");
  const handleClick = () => setShow(!show);
  const[formData,setFormData]=useState({});
  const { sendData,setisLogin,isLogin,userData,getDailydatauser } = useContext(MyContext);
  const onChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const onSumbit=async()=>{
    const bool = await sendData("https://ieee-api-tawny.vercel.app/user/login",formData);
    // console.log(bool)
if(bool.error){
  setError(bool.error);

}else{
  setisLogin(true);
  console.log("daily data for user is");
  const dd= await getDailydatauser(bool);
  console.log(dd)
  nav("/caluculator")

}
  }
  return (
    <div >
      <NavBar></NavBar>
      <div className='Login'>
      <VStack textAlign={"center"}
      
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
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
      Password:-va
     </div>
      </PopoverBody>
      <PopoverFooter>
      <div>
      Email:- geustuser2@gmail.com
      Password:-vi@
     </div>
      </PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>

<Heading color={"green"}>Nice,To See You Back</Heading>
<Text  color={"red"}  as='em'>{error}</Text>

<Input variant='outline' name='Email' onChange={onChange} placeholder='Email' />
<InputGroup size='md'>
      <Input
      onChange={onChange}
       name='Password'
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
<Button onClick={onSumbit} colorScheme='green'>Login</Button>

</VStack>
      </div>

    </div>
  )
}

export default Login

