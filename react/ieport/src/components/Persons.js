import { CardWithATitle } from "./Card"



function Persons({personsList}){
    return <div className="card-container" >
    {
        personsList.map(({name, email}, index) =>{
            // using key as a unique identifier to validate data 
            // using index is not the right approach in this case 
            // because if there is two names with different index 

            // Now we are using index because our position of data can not change
            // to change like --> sort , filter something like that that changes data position
            return <CardWithATitle  key={index} title={name} >
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            </CardWithATitle>
        })
    }
    
  
    </div>
}

export default Persons;