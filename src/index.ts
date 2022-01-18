import './index.scss';
import Product from "./domain/Product";
import Order from "./domain/Order";
import Client from "./domain/Client"

let p = new Product("Sportail XXL", ["1.jpg", "2.jpg", "3.jpg"], {amount: 10, curency: "MDL"});
let c = new Client("c1", "John", true);
let o = new Order("o1", p, 2, {amount: 10, curency: "MDL"}, c)
console.log(o)