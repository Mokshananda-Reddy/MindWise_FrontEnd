import "./sidebard.css";
import React from 'react';
import dimage from "../sidebar/Mindwiselogo-1.png";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../auth";


export default function Sidebard() {

    const navigate = useNavigate()
    const auth = useAuth()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }
    
    return (
        <div className="Dbarmaincontainer">

            <div classname="DMindWiseLogo">
                <img className="DImage" src={dimage} alt="Mindwise"/>
            </div>

            <div className="DDividingLine">
                <div className="dline1"></div>
            </div>

            <div className="DRequiredButtons">

                
            <button className="db1" onClick={()=>navigate('/dashboard')}>
                    <span className="icon">
                        <i className="fa-solid fa-house-chimney"></i>
                    </span>
                    Dashboard
                </button>
                
                <button className="db2" onClick={()=>navigate('/doctorslist')}>
                    <span className="icon">
                        <i className="fa-solid fa-user-doctor"></i>
                    </span>
                    Doctors
                </button>

                <button className="db3" onClick={()=>navigate('/patientslist')}>
                    <span className="icon">
                        <i className="fa-solid fa-hospital-user"></i>
                    </span>
                    Patients
                </button>

                <button className="db4" onClick={()=>navigate('/taskslist')}>
                    <span className="icon">
                        <i className="fa-solid fa-list-check"></i>
                    </span>
                    Tasks
                </button>

                <button className="db5" onClick={handleLogout}>
                    <span className="icon">
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </span>
                    Logout
                </button>
                

            </div>

            <div className="DDividingLine2">
                <div className="dline2"></div>
            </div>

            <div className="LogoutButton">

            </div>

            <div className="DDividingLine3">
                <div className="dline3"></div>
            </div>

        </div>
    );
}