const BaseUrl = 'https://fakestoreapi.com/products'
export async function FetchPreoduct() {
    const res = await fetch(`${BaseUrl}`)
    return res.json()
    }
export async function GetSinglProduct(id){
    const res = await fetch(`${BaseUrl}/${id}`)
    return res.json()
}

export async function GetAllCategories(){
    const res = await fetch(`${BaseUrl}/categories`)
    return res.json()
}
export async function GetCantegories(category){
    const res = await fetch (`${BaseUrl}/category/${category}`)
    return res.json()
}