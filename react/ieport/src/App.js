import { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import SubHeading from './SubHeading';
import SubmitButton from './SubmitButton';
import InputQuery from './InputQuery';
import HelloWorldSpan, {HelloWorldDiv as HD, HelloWorldP as HP} from './components/HelloWorld';
import Cars from './components/Cars/Cars';
import Button, {ButtonProp, ButtonChild, FacebookButton, GoogleButton} from './components/Button';
import {Card, CardWithImage, CardWithATitle} from './components/Card'
import AddPersons from './components/AddPersons';
// Functional components
function getItemPriceText(itemPrice){
  return itemPrice >50000 ? "Very costly": 'Cheap'
}
  
function getItemContent({name, price}){
  return `This is a ${name} which is ${getItemPriceText(price)}`
}



// function App() {

//   // Use state execution
//   const [cars, setItems] = useState([
//     {
//       name : 'Mercedes', 
//       price : 63200
//     },
//     {
//       name : 'Audi', 
//       price : 54399
//     },
//     {
//       name : 'Toyota', 
//       price : 40405
//     }
//   ])

//   // let's change name 
//   // const [name, setName] = useState('Jane');
//   // const  name = 'John'
//   // const cars =[
//   //   {
//   //     name : 'Mercedes', 
//   //     price : 100200
//   //   },
//   //   {
//   //     name : 'Audi', 
//   //     price : 484399
//   //   },
//   //   {
//   //     name : 'Toyota', 
//   //     price : 6095405
//   //   }
//   // ]
//   // console.log('App component is rendered with items : : ', cars)

//   // setTimeout(() => {
//   //   setItems([
//   //     {
//   //       name : 'Mercedes', 
//   //       price : 100200
//   //     },
//   //     {
//   //       name : 'Audi', 
//   //       price : 484399
//   //     },
//   //   ]);
//   // }, 5000)

//   const [personDetails, setPersonDetails] = useState({name: 'Jane', address : 'Kolkata'});

//   const clickHandler = () =>{
//     return () =>{
//       alert('some event with returned function')
//     }
//   }
//   const clickHandlerTwo = () =>{
//     alert('some event with returned function')
    
//   }
//   return (
//     <>
//     <p>Hello this is {personDetails.name} from {personDetails.address} </p>
//     {/* <button onClick={()=>{setPersonDetails({name:'coster', address: "Goa"})}} >Update it.</button> */}
//     <button onClick={()=>{
//       setPersonDetails(
//         {
//           ...personDetails, // all properties of existing personDetails
//           name:'coster',  // properties that are to overwrite
//           // address: "Goa"
//         }
//         )
//         }
//       } >Update it.</button>
//     {/* {
//      items.map((item, index)=><div>
//           {index +1}. {getItemContent(item)}
//         </div>
//       )
//     }

//    <Heading/>
//    <InputQuery/>
//    <SubHeading/>
//    <SubmitButton/>
//    <p>I am learning react. My life is getting better.</p>
//    <HelloWorldSpan /> 
//     <HD/>
//     <HP/>
//     <Button/> */}
//     <h1>Practicing React</h1>
//     {/* props example */}
//     {/* <span>The name is {name}.</span> */}
//     <Cars cars = {cars} name = {'something'} booleanDefault  />
//     {/* State in functional componenets example  */}
//     {/* <button onClick={()=>{setItems([{name : 'Mercedes',price : 100200},{name : 'Audi',price : 484399},]);}} >Update State</button> */}
//     {/* <button onClick={()=>{setName('JohnDoe');}} >Update Name State</button> */}
//     {/* <Button label="Testing button comp" /> */}
//     {/* <ButtonProp>something is here</ButtonProp> */}
//     <ButtonChild dir="ltr" data-test="data-test" >Children is reserved property in props with dynamic props</ButtonChild>
//     {/* state in class components  */}
//     {/* composition in react --> isolate behaviour not dependent on each other behavour  */}
//     <div>
//     <Button>Behaviour one</Button>
//     </div>
//     <FacebookButton>Sign in with facebook</FacebookButton>

//     <div>
//       <Card>Hello world</Card>
//     </div>
//       <CardWithATitle title="Hello Title Card" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CardWithATitle>
//       <CardWithImage src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg" ></CardWithImage>
    
//     {/* Events in react  */}

//         {/* when rendering happens function directly gets evaluated */}
//         {/* we don't have to call function with () */}
//     <GoogleButton onClick={clickHandler()} >Sign in with google</GoogleButton>
//     {/* if we call function with () this will get called on loading of a page */}
//     <GoogleButton onClick={clickHandlerTwo} >Sign in with google</GoogleButton>
    
//     </>
//   );
// }




// const Buttonclick = () =>{
//   const [showResults, setShowResults] = useState(false)
//   const onClick = () => setShowResults(true)
//   return (
//     <>
//   <button data-testid="click" onClick={onClick} >Click
//   </button>
//   <p>
//     {showResults ? <Results/> : null}
//   </p>
//     </>
// )
// }

// const Results = () =>{
//   return (
//     <p data-testid="para" >Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy!!!</p>
//   )

// }

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



// class App extends Component{
//   name = 'John Davidson'
//   constructor(){
//     super()
//     this.bindedClickHandler = this.clickHandler.bind(this)
//   }

//   clickHandler(){
//     alert(this.name)
//   }

//   render(){
//     return <>
//     <p>
//     This registers function and react execute the function but it looks for name into this 
//     scope but it goes to window scope and looks for name over there because this and window scope are same over here 
    
//     </p>
//       <GoogleButton onClick={this.clickHandler} >Click here</GoogleButton>
//     <p>
//       below button bind this to clicHandler function which looks for name in only this scope 
//       and bind returns the function but don't execute that, execution is done by react on click of button
//     </p>
    
//       {/* <GoogleButton onClick={this.clickHandler.bind(this)} >Click here</GoogleButton> */}
//       below code will directly give the reference to binded click handler function 
//       <GoogleButton onClick={this.bindedClickHandler} >Click here</GoogleButton> 
//     </>
//   }
// }


function App (){
  return <>
    <AddPersons/>
  </>
}






export default App;
