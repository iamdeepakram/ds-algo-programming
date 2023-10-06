import {Component} from 'react';
import Car from './Car'

// Cars Class Components
// Props Example
class Cars extends Component{

  constructor(props){
    console.log(props);
    // console.log(this.props);

    // here we are invking its parent
    // also passing the properties as props 
    super(props)
    this.city = 'kolkata'
  }

  
  render(){
    console.log('Cars component is rendered with props : : ', this.props)

    return <>
    {
      this.props.cars.map((car, index)=><div>
          <Car itemNumber = {index+1} carObj = {car} />
        </div>
      )
    }
    {/* this is from the app component with a class
    <br/>
    Hey there! I am {this.props.name} from {this.city}
    <br/>
    this is a {this.props.cars.name}  which is {this.getItemPriceText(this.props.cars.price)} */}
    </>

   
  }
}


export default Cars;