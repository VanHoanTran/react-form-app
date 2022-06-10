import React, {useState, useEffect} from "react";

const UserDataForm = () =>{
    const [userData, setUserData] = useState({});
    //userData = { name, campus, program, housing, }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Submitting the form', JSON.stringify(userData))
    }

    const handleChange = (e) =>{
       
        console.log('Changing the input')
        //const {name} = e.target;
        // deconstruction the name, value, type, checked properties from the target object.
        //deconstruction - e: {target:'' }
        const {name, value, type, checked} = e.target;

        let tvalue = null;

        //check box will not return any data
        if(type ==='checkbox'){
            tvalue = checked;
        }
        else{
            tvalue = value;
        } 


        setUserData(userData =>{
            return {...userData, [name]: tvalue}
        })
    }   

    useEffect(()=>{
        setUserData({
            fullName: 'John Smith',
            program: 'CPP',
            campus: 'Newham',
            enrolled: true,
            housing: 'On Campus'
        })
    }, [])

    if(!userData) return null;
    return (
        <form onSubmit = {handleSubmit}> 
        <label>
        Full Name:
        <input type="text" name="fullName" value={userData.name} onChange={handleChange} />
        </label>
        
        <br />
        <br />

        <label>
            Campus:
        <select name="campus" value={userData.campus} onChange={handleChange}>
        <option value="">- Select -</option>
            <option value="king">King</option>
            <option value="markham">Markham</option>
            <option value="newnham">Newnham</option>
            <option value="downtown">Downtown</option>
        </select>
        </label>
        <br />
        <br />        
        <label>
            Enroll:
            <input name="enrolled" type="checkbox" checked={userData.enrolled} onChange={handleChange}></input>
        </label>
        <br />
        <br />
        <label >
            Housing: 
            <input type="text" />
        </label>
        <br />
        <br />
        <label >
            <button type="submit"> Submit</button>
        </label>

        </form>

    )
}

export default UserDataForm;