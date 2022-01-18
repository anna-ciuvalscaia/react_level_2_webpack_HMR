import Money from "./Money"
//Product component
class Product {
   // name: string;
   // imageURL: string = "images/no-photo.jpg";
   // price: any;

      constructor (
          public name: string, 
          public imageURL: string[], 
          public price: Money ){
         // this.name = name;
         // this.imageURL = imageURL;
         // this.price = price;
      }
}

export default Product