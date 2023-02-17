import { Button, Spinner } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { UseProductQuery } from "../services/Hook"
import { GetAllCategories, GetCantegories } from "../services/service"
import Product from "./product"



const AllCategories = () =>{
    const [categoria , setCategoria] = useState('All category')
    const {isLoading , data,  isSuccess , isError , refetch} = useQuery({
        queryFn:() => GetAllCategories(categoria),
        queryKey:['AllCategories']
    })
    console.log(categoria)
    const {isLoading : LoadingProduct , data:dataProduct , isSuccess:SuccesProduct , isError:errorProduct , refetch:refetchAllProduct} = UseProductQuery();
    const {isLoading : LoadingCategorya , data:DataCategoria ,isSuccess : SuccesCategoria} = useQuery({
        queryFn:() => GetCantegories(categoria),
        queryKey:['getCategoria' , categoria]
    })
    console.log(dataProduct)
    console.log(DataCategoria)
    return (
        <>
        <div style={{display:'flex', justifyContent:'center' , alignItems:'center'}}>
       <Button onClick={() => {setCategoria('All category')}} >All Category</Button>
        { isSuccess ? 
       

            data.map(categories => (
           < Button key={categories} onClick={() => {
            setCategoria(categories)
           }} margin="1vw">{categories}</Button>
    )) : <Spinner/>}
    </div>
    <Product data={categoria == 'All category' ? dataProduct : DataCategoria} isSuccess={SuccesProduct} />
      </>
    )
}

export default AllCategories