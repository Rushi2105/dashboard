import React , {useState} from 'react';
import { Link } from 'react-router-dom';

export function Sign(){
    const [studentData , setStudentData] = useState(JSON.parse(localStorage.getItem("studentData")) || []);
    const [student , setStudent] = useState({
        mail:"",
        pass:"",
        id:"",
    })
    const handleChange = (e) => {
        const {name , value} = e.target;
        setStudent({...student,[name] : value , id:Date.now})
    }
    const handleSubmit = () => {
        console.log("student",student);
        setStudentData([...studentData,student]);
        localStorage.setItem("studentData",JSON.stringify([...studentData,student]));
        setStudent({
            mail:"",
            pass:"",
        })
    }
    return(
        <>
        <div className='container p-5'>
            <div className='text-bg-info p-5 text-center'>
                <label htmlFor='mail'>email:</label>
                <input type='email' name='mail' id='mail' value={student.mail} onChange={(e)=>handleChange(e)}/><br/><br/>

                <label htmlFor='pass'>password:</label>
                <input type='password' name='pass' id='pass' value={student.pass} onChange={(e)=>handleChange(e)}/><br/><br/>

                <button type='button' onClick={()=>handleSubmit()}>
                    <Link to="/loginin">Sign In</Link> 
                </button>
            </div>
        </div>
        </>
    )
}