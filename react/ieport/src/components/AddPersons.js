import { useState } from "react"
import { Card, CardWithATitle } from "./Card";
import Persons from "./Persons";
import AddPersonsFrom  from "./AddPersonForm";
import Search from "./Search";


function AddPersons(){
    const [people, setPeople] = useState([])
    const [query, setQuery] = useState('')
    
    return <div>

    {/* State lifting is happening here  */}
    <AddPersonsFrom onAdd={(person)=>{
    setPeople((people)=>{
        return [
            ...people,
            person
        ]
        })
    }} />
    <Persons personsList={people.filter(({name})=>{
        return name.includes(query)
    })} ></Persons>
    {(people.length > 1) && <div>
        <Search query={query} setQuery={setQuery} />
    </div>}

    {/* <div>
        My name is - {name}
        My email is - {email}
    </div> */}
    </div>
}

export default AddPersons;

// function AddPersons(){

//     const [name, setName]  = useState('')
//     const [email, setEmail]  = useState('')
//     const [people, setPeople] = useState([])

    
//     return <div>

//     <form method="GET"  action="#" onSubmit={(e)=>{
//         e.preventDefault();
//         // console.log(name)
//         // console.log(email)
//         // to access previous value we are writing it this way
//         setPeople((lastPeopleValue)=>{
//             return [
//                 ...lastPeopleValue,
//                 {
//                     name,
//                     email
//                 }
//             ]
//         })
//         setName('')
//         setEmail('')
//     }}>
//         <div>
//             <label >Name</label>
//             <input id="name" type="text" 
//                 onChange={(e) =>{
//                     setName(e.target.value)
//                 }}
//             value={name}
//              />
//         </div>
//         <div>
//             <label >Email</label>
//             <input id="email" type="email" 
//                 onChange={(e)=>{
//                     setEmail(e.target.value)
//                 }}
//             />
//         </div>
//         <div>
//             <button type="submit" >Add</button>
//         </div>
//     </form>
//     <Persons personsList={people} ></Persons>
//     <div>
//         My name is - {name}
//         My email is - {email}
//     </div>
//     </div>
// }

// export default AddPersons;