import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Image,
    Spinner,
    Center
  } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { GetSinglProduct } from '../services/service'


  const SingleProduct = ({modal , setModal  , idSingl}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [Timeout , setTimeoutRefech ] = useState(true)
        const {isLoading , data,  isSuccess , isError , refetch} = useQuery({
        queryFn: () => GetSinglProduct(idSingl),
        queryKey:['singlProduct']
      })
      console.log(data)
    setTimeout(() => {
        setTimeoutRefech(false)
    },2000)
    return (
        
      
        <Modal isOpen={modal} onClose={() => setModal(false)}>
       
        <ModalOverlay />
      
        <ModalContent>
        
        {isSuccess && !Timeout ? <>
            
         <ModalHeader margin={'10px'}>
            <h1 >{data.title}</h1>
           <Image src={data.image}/> </ModalHeader>
         <ModalCloseButton />
         <ModalBody display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} style={{justifyContent:'center'}}>
          <p>{data.description}</p>
          <h1 style={{fontWeight:'bold' ,paddingTop:'1px'}}>{data.price} USD</h1>
         </ModalBody>

         <ModalFooter>
           <Button colorScheme='blue' mr={3} onClick={() => setModal(false)}>
             Close
           </Button>
         </ModalFooter>
         </> : <Spinner size={'xl'} margin='0 auto' /> 
       
          }
        </ModalContent>
        
      </Modal>
  
    
    )
  }
  export default SingleProduct