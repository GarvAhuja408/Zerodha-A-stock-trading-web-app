import React,{useState} from 'react';

function SignUp() {

    const [formData,setFormData]=useState({
        name:"garv",
        email:"garv@gmail.com",
        password:"garv"
    });
    
    const handleChange = (event)=>{
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        });
    };

    const handleSubmit= async(event)=>{
        try{

        event.preventDefault();

        const response = await fetch("http://localhost:3002/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        });

        const data = await response.json();

        if(response.ok){
            alert(data.message);

            setFormData({
                name:"",
                email:"",
                password:""
            });
        }else{
            alert(data.message);
        }
    }catch(error){
        console.log(error);
        alert("Something went wrong");
    }
};
    


    return ( 
        <form className='container text-center mt-5' onSubmit={handleSubmit}>
            
            <input type="text" placeholder='Enter name' name='name' value={formData.name} onChange={handleChange}></input>
            <br></br>
            <br></br>
            <input type="text" placeholder='Enter email' name='email' value={formData.email} onChange={handleChange}></input>
            <br></br>
            <br></br>
            <input type="password" placeholder='Enter password' name='password' value={formData.password} onChange={handleChange}></input>
            <br></br>
            <br></br>
            <button type='submit'>Sign up</button>

        </form>
     );
}

export default SignUp;