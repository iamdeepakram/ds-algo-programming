import { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import SubHeading from './SubHeading';
import SubmitButton from './SubmitButton';
import InputQuery from './InputQuery';
import HelloWorldSpan, {HelloWorldDiv as HD, HelloWorldP as HP} from './components/HelloWorld';
import Cars from './components/Cars/Cars';
import Button, {ButtonProp, ButtonChild} from './components/Button';

// Functional components
function getItemPriceText(itemPrice){
  return itemPrice >50000 ? "Very costly": 'Cheap'
}
  
function getItemContent({name, price}){
  return `This is a ${name} which is ${getItemPriceText(price)}`
}



function App() {

  // Use state execution
  const [cars, setItems] = useState([
    {
      name : 'Mercedes', 
      price : 100200
    },
    {
      name : 'Audi', 
      price : 484399
    },
    {
      name : 'Toyota', 
      price : 6095405
    }
  ])

  // let's change name 
  const [name, setName] = useState('Jane');
  // const  name = 'John'
  // const cars =[
  //   {
  //     name : 'Mercedes', 
  //     price : 100200
  //   },
  //   {
  //     name : 'Audi', 
  //     price : 484399
  //   },
  //   {
  //     name : 'Toyota', 
  //     price : 6095405
  //   }
  // ]
  // console.log('App component is rendered with items : : ', cars)

  // setTimeout(() => {
  //   setItems([
  //     {
  //       name : 'Mercedes', 
  //       price : 100200
  //     },
  //     {
  //       name : 'Audi', 
  //       price : 484399
  //     },
  //   ]);
  // }, 5000)

  return (
    <>
    {/* {
     items.map((item, index)=><div>
          {index +1}. {getItemContent(item)}
        </div>
      )
    }

   <Heading/>
   <InputQuery/>
   <SubHeading/>
   <SubmitButton/>
   <p>I am learning react. My life is getting better.</p>
   <HelloWorldSpan /> 
    <HD/>
    <HP/>
    <Button/> */}
    <h1>Hello</h1>
    {/* props example */}
    <span>The name is {name}.</span>
    <Cars cars = {cars} name = {'something'} booleanDefault  />
    {/* State in functional componenets example  */}
    <button onClick={()=>{setItems([{name : 'Mercedes',price : 100200},{name : 'Audi',price : 484399},]);}} >Update State</button>
    <button onClick={()=>{setName('JohnDoe');}} >Update Name State</button>
    <Button label="Testing button comp" />
    <ButtonProp>something is here</ButtonProp>
    <ButtonChild>Children is reserved property in props</ButtonChild>
    {/* state in class components  */}
    </>
  );
}

const Buttonclick = () =>{
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(true)
  return (
    <>
  <button data-testid="click" onClick={onClick} >Click
  </button>
  <p>
    {showResults ? <Results/> : null}
  </p>
    </>
)
}

const Results = () =>{
  return (
    <p data-testid="para" >Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy!!!</p>
  )

}

// // Class Components
// class App extends Component{
//   name = 'John'
//   items =[
//     {
//       name : 'Mercedes', 
//       price : 100200
//     },
//     {
//       name : 'Audi', 
//       price : 484399
//     },
//     {
//       name : 'Toyota', 
//       price : 6095405
//     },
  
// ]
//   constructor(){
//     super()
//     this.city = 'kolkata'
//   }

//   getItemPriceText(itemPrice){
//     return itemPrice >50000 ? "Very costly": 'Cheap'
//   }

//   getItemContent({name, price}){
//     return `This is a ${name} which is ${this.getItemPriceText(price)}`
//   }

//   render(){
//     return <>
//     {
//       this.items.map((item, index)=><div>
//           {index +1}. {this.getItemContent(item)}
//         </div>
//       )
//     }
//     this is from the app component with a class
//     <br/>
//     Hey there! I am {this.name} from {this.city}
//     <br/>
//     this is a {this.items.name}  which is {this.getItemPriceText(this.items.price)}
//     </>

   
//   }
// }


export default App;
