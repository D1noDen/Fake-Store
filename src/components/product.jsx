import { useQuery } from "@tanstack/react-query"
import { FetchPreoduct, GetSinglProduct } from "../services/service"
import { Spinner ,  Card, CardHeader, CardBody, CardFooter , Image , Button, ButtonGroup} from "@chakra-ui/react"
import SingleProduct from "./SinglProduct"
import '../assets/scss/components/Product.scss'
import { useEffect, useState } from "react"
import { UseProductQuery } from "../services/Hook"


const Product = ({data , isSuccess , isError}) => {
    const [idSingl , setIdSingl] =useState(1)

const [modal , setModal] =useState(false)

console.log(modal)
return (
    <div className="Product" >
        {modal? <SingleProduct modal={modal} setModal={setModal} idSingl={idSingl} /> : null}
        { data ? 
            data.map(item => (
                
                <Card  key={item.id} width="23vw" margin='1vw' >
                    <CardBody  borderRadius='lg' >
                        <div style={{display:'flex' , alignItems:'center' , justifyContent:"center"}}>

                        
                    <Image src={item.image} style={{width:'9.91vw' ,alignItems:'center'}}/>
                    </div>
                    </CardBody>
                    <CardBody padding="1vw">
                        <p style={{fontSize:"1.8vw"}}>{item.title}</p>
                    </CardBody>
                    <CardFooter display={'flex'} justifyContent='center'  alignItems={'center'}>
                        <Button width={'10Svw'} height={'7vh'} fontSize="1.5vw" onClick={() => {
                            setModal(true) 
                            setIdSingl(item.id)
                            
                        }}>ReadMore</Button>
                    </CardFooter>
                </Card>
                
            )) : <Spinner size='xl'/>
        }
        
    </div>
)


}
export default Product