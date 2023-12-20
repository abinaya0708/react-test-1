//1.SYNTAX OF FUNCTION COMPONENT

// import React from "react";

// export const Homee=()=>{
//     return(
//         <div>

//         </div>
//     )
// }

//---------------------------------------------------------------------------------------------------------

//2.Write any 3 packages installing comment.    

    // i)npm i react-icons
    // ii)npm i sass
    //iii)npm i react-google-fonts

//----------------------------------------------------------------------------------------------------------

//3.How to create react application?

//By using this comment in Terminal---

//npx create-react-app appName

//-----------------------------------------------------------------------------------------------------------

//4.Write any one example of props.    

//In home.js

// import React,{Component} from "react";
// import Service from "./Service"



// export class Home extends Component{
    
//     render(){
        
//         let mobiles=[
//             {
//                 id:1,
//                 name:"Redmi 12 5G",
//                 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvUKj_DH1DXRJn9h2XFZcitUtJS7-dpxzGvt8L39c3GCY7vB5VnL1CkMi4BFaTLzl0UM&usqp=CAU",
//                 price:13499,
//                 ram:"12GB"
//             },
//             {
//                 id:2,
//                 name:"Samsung Galaxy S23 Ultra",
//                 image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThGOuGdxiKaM7tJv6-rdnXCMYqSuiRXZgWcivu022ZcBg1yZp9IzjhRCkJhSjLQKZ8ak&usqp=CAU',
//                 price:124999,
//                 ram:"12GB"
//             },
        
//             {
//                 id:3,
//                 name:"Vivo V29 5G",
//                 image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HGHU7eEoqn_nhcI8P3aLSwiIdjw6_TU17waf2iRGmEGPscg4IOGTmBkKodhu15Qavtw&usqp=CAU',
//                 price:31080,
//                 ram:"8GB"
//             },
        
//             {
//                 id:4,
//                 name:"realme C53",
//                 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1XQw9C_SzHAwO0B3RIa5lF7Lr0b9Bw9l3w&usqp=CAU",
//                 price:10862,
//                 ram:"6GB"
//             },
        
//             {
//                 id:5,
//                 name:"OnePlus Nord CE 3 Lite 5G",
//                 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04IyY_WUlIX7_GSr0K2bw_DYoy8xbEXu92g&usqp=CAU",
//                 price:19999,
//                 ram:"8GB"
//             },
        
//             {
//                 id:6,
//                 name:"Iphone 15",
//                 image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxNTjxa7KgQ7UDj336QEGs82Pf8KPJURnlw&usqp=CAU",
//                 price:76900,
//                 ram:"6GB"
//             },
        
//             {
//                 id:7,
//                 name:"OPPO Reno 10 5G",
//                 image:"https://img-prd-pim.poorvika.com/product/Oppo-reno-10-5g-silvery-grey-256gb-8gb-ram-Front-Back-View.png",
//                 price:32999,
//                 ram:"8GB"
//             },
        
//             {
//                 id:8,
//                 name:"Lenovo K9",
//                 image:"https://www.notebookcheck.net/uploads/tx_nbc2/LenovoK9__1_.jpg",
//                 price:6999,
//                 ram:"3GB"
//             }
        
//         ]
//         const checkPrice=(Obj)=>{
//             let res=mobiles.filter((val)=>{
//                 return Obj.price>val.price
//             })
//             console.log(res);
//         }
//         return(
//             <div>
//                 <Service mobile={mobiles} f={checkPrice}/>
//             </div>
//         );
//     }
// }

// //In service.js

// import React,{Component} from "react";
// import "./Service.scss"
// export default class Service extends Component{
//     render(){
//         return(
//                 <div>
//                     <div className="container">
//                         <div className="card-row">
//                             {
//                             this.props.mobile.map((val,i)=>{
//                                 return(
//                                             <div className="card-col" key={i}>
//                                                 <div className="card">
//                                                     <div>
//                                                         <h3>Model name:{val.name}</h3>
//                                                         <div className="image-div">
//                                                             <img src={val.image} alt="img"/>
//                                                         </div>
//                                                         <h4>Price:{val.price}</h4>
//                                                         <p>RAM:{val.ram}</p>
//                                                         <button onClick={()=>this.props.f(val)}>Buy Now</button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                 )
//                             })
//                          }
//                         </div>
//                     </div>
//                 </div>
//         )
//     }
// }

// //In app.js

// import './App.css';
// import {Service} from "./Props/FunctionClass/Service"

// function App() {
  
//   return (
    
//     <div>
//       <Service/>
//     </div>
//   );
// }

//--------------------------------------------------------------------------------------------------------------


//5.What is Props?

//Props is a special keyword in React that stands for properties and is used for passing data from one component to another.

//---------------------------------------------------------------------------------------------------------------

//6.SYNTAX OF CLASS COMPONENT

// import React,{Component} from "react";

// export class Child extends Component{
//     render(){
//         return(
//             <div>
                
//             </div>
//         )
//     }
// }

// //---------------------------------------------------------------------------------------------------------------
