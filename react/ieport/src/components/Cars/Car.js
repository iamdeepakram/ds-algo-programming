import {Component} from 'react'

// Functional components
// function getItemPriceText(itemPrice){
//     return itemPrice >50000 ? "Very costly": 'Cheap'
//   }

// function getItemContent({name, price}){
// return `This is a ${name} which is ${getItemPriceText(price)}`
// }



// function Car(props){
//     console.log('Car function component is rendered with props : : ', props)
//     return <div>
    
//     {props.itemNumber}. {getItemContent(props.carObj)}
    
//     </div>
// }

// Class components
class Car extends Component {
  state = {
    price : null
  }
  constructor(props){
    super(props)
    this.state.price = this.props.carObj.price
  }
  
  getItemPriceText(itemPrice){
    return itemPrice >50000 ? "Very costly": 'Cheap'
  }

  getItemContent({name, price}){
  return `This is a ${name} which is ${this.getItemPriceText(this.state.price)}`
  }

  render(){
    console.log('Car class component is rendered with props : : ', this.props)
    console.log('price is ', this.state.price)
    return(
      <>
      
        {this.props.itemNumber}. {this.getItemContent(this.props.carObj)}
        <button onClick={(prev)=>{
     
          this.setState(
          {  
            // price : this.state.price - 10000 // never do this
            price : prev.price - 10000 // never do this
          }
            
          )
        
          console.log("price is : " ,this.state.price)

        }}  >Update Price</button>
      </>
    )
  }

}

export default Car;