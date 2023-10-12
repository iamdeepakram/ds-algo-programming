import {useState} from 'react'


function AddPersonsFrom({onAdd}){

    const [name, setName]  = useState('')
    const [email, setEmail]  = useState('')


    
    return <form method="GET"  action="#" onSubmit={(e)=>{
        e.preventDefault();
        // console.log(name)
        // console.log(email)
        // to access previous value we are writing it this way
        onAdd({
            name,
            email
        })

        // example of Two way binding 
        setName('')
        setEmail('')
    }}>
        <div>
            <label >Name</label>
            <input id="name" type="text" 
                onChange={(e) =>{
                    setName(e.target.value)
                }}
            value={name}
             />
        </div>
        <div>
            <label >Email</label>
            <input id="email" type="email" 
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
            />
        </div>
        <div>
            <button type="submit" >Add</button>
        </div>
    </form>
 
}


export default AddPersonsFrom