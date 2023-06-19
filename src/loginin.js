import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export function Login() {
    const [studentInfo, setStudentInfo] = useState(JSON.parse(localStorage.getItem("studentData")) || []);
    const [loginData, setLoginData] = useState(JSON.parse(localStorage.getItem("loginData")) || []);
    const [studentObject, setStudentObject] = useState({
        mailId: "",
        mailPass: "",
        id: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentObject({ ...studentObject, [name]: value, id: Date.now })
    }
    const handleSubmit = () => {
        setStudentInfo([...studentInfo, studentObject]);
        setStudentObject({
            mailId: "",
            mailPass: "",
        })
        const studentEmail = studentInfo.find((item) => item.mail === studentObject.mailId);
        console.log(studentEmail);
        const studentPass = studentInfo.find((item) => item?.pass === studentObject?.mailPass);
        console.log(studentPass);
        if (studentEmail && studentPass) {
            window.alert("login");
            setLoginData([...loginData, studentObject]);
            localStorage.setItem("loginData", JSON.stringify([...loginData, studentObject]));
        }
        else {
            window.alert("please sign in form");
        }
    }
    return (
        <>
            <div className='container'>
                <div className='p-5 text-bg-secondary text-center'>
                    <label htmlFor='mailId'>mailId:</label>
                    <input type='email' name='mailId' id='mailId' onChange={(e) => handleChange(e)} /><br /><br />

                    <label htmlFor='mailPass'>password:</label>
                    <input type='password' name='mailPass' id='mailPass' onChange={(e) => handleChange(e)} /><br /><br />

                    <button type='button' onClick={() => handleSubmit()}>
                        <Link to="/">Login</Link>
                    </button>
                </div>
            </div>
        </>
    )
}