function getItemPriceText(itemPrice){
    return itemPrice >50000 ? "Very costly": 'Cheap'
  }

function getItemContent({name, price}){
return `This is a ${name} which is ${getItemPriceText(price)}`
}



function Car(props){
    console.log('Car component is rendered with props : : ', props)
    return <div>
    
    {props.itemNumber}. {getItemContent(props.carObj)}
    
    </div>
}


export default Car;