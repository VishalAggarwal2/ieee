
import React,{useState,useRef, useContext} from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import "./Style.css"
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
import { Stack,Text, HStack,InputRightElement,Button,InputGroup, Radio,RadioGroup,VStack,Box,StackDivider,Input,Heading } from '@chakra-ui/react'
import "./Style.css"
import MyContext from '../Context/createContext'
const SignUp = () => {
  const nav = useNavigate();
  const{sendData,setisLogin}=useContext(MyContext);
  const[error,setError]=useState("");

  const[formData,setFormData]=useState({});
  const onChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const onSumbit=async()=>{
   const bool = await sendData("https://ieee-api-tawny.vercel.app/user/signup",formData);
   if(bool.error){
    setError(bool.error)
  
  }else{
    setisLogin(true);
  
    nav("/caluculator")
  
  }
  }
  const [show, setShow] = useState(false)
  
  const handleClick = () => setShow(!show)
  const [showc, setShowc] = useState(false)
  const handleClickc = () => setShowc(!showc)
  const initRef =useRef()

  return (
    <div>
      <NavBar></NavBar>
      <div className="Login">
      <VStack
      textAlign={"center"}
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
<Heading color={"green"}>First Step To Save Earth</Heading>
<Text color={"red"} as='em'>{error}</Text>

<HStack spacing='24px'>
<Input variant='outline' onChange={onChange} name='FirstName'  placeholder='FirstName' pla  />
<Input variant='outline'   onChange={onChange} name='LastName'  placeholder='LastName' pla  />
</HStack>

<Input   variant='outline'  onChange={onChange} name='Email'  placeholder='Email' />

<Input   variant='outline'  onChange={onChange} name='Phone'  placeholder='Phone' />
<InputGroup size='md'>
      <Input
       onChange={onChange} name='Password' 
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
<InputGroup size='md'>
      <Input 
       onChange={onChange} name='Cpassword' 
        pr='4.5rem'
        type={showc ? 'text' : 'password'}
        placeholder='Confirm password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClickc}>
          {showc ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
<HStack css={{'@media screen and (max-width: 610px)':{
  display:"flex",
  flexDirection:"column"
}}} justifyContent={"space-between"}>

<Text fontSize='md'>Share Data</Text>
<div className='sp'>

<Popover css={{'@media screen and (max-width: 610px)':{
  display:"none",

}}} justifyContent={"space-between"} closeOnBlur={false} placement='left' initialFocusRef={initRef}>
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button> Know {isOpen ? 'Less' : 'More'}</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverHeader>Share Data</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Box> 
                  Helps to compare data with others 
                </Box>
            
              </PopoverBody>

            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
    </div>

<RadioGroup     defaultValue='2'>
  <Stack spacing={5} direction='row'>

    <Radio colorScheme='red' value='1'>
      No
    </Radio>
    <Radio colorScheme='green' value='2'>
      Yes
    </Radio>
  </Stack>
</RadioGroup>
</HStack>
    
<Button onClick={onSumbit} colorScheme='green'>Signup</Button>


</VStack>
      </div>
    </div>
  )
}

export default SignUp
