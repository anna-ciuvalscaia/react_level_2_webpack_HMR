import Client from "./Client";
import Money from "./Money";
import Product from "./Product";


//Order component
class Order {
      constructor (
          public id: string, 
          public product: Product, 
          public quantity: any, 
          public total: Money, 
          public client: Client  ){}
}

export default Order