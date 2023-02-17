import { useQuery } from "@tanstack/react-query"
import { FetchPreoduct } from "./service"

const UseProductQuery = () => {
    return useQuery({
        queryFn: () => FetchPreoduct(),
        queryKey:['product']
      })
}
export {UseProductQuery}