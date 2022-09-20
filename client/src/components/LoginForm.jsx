import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos.css';

import { useState } from 'react';
import { Form } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ errorAviso, setErrorAviso] = useState("");
    const navigate = useNavigate();
    const handlerLogin= (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/login', { email, password })
            .then(res => {
                if(res.data.confirm === true){
                    axios.get('http://localhost:8000/api/user/'+email+'/email')
                        .then((respuesta)=>{
                            navigate('/bright_ideas/'+respuesta.data.user._id);
                        })          
                }
                else {
                    setErrorAviso("Error en el login");
                }
            })
            .catch(err => {
                
            })
    }
return (
        <Form onSubmit={handlerLogin}>
                <div className='contenedor1'>
                    <h2>Login</h2>
                    <p>Email:</p>
                    <input type="email" onChange={e => { setEmail(e.target.value) }} value={email} />
                    <p>Password</p>
                    <input type="password" onChange={e => { setPassword(e.target.value) }} value={password} />
                    <div>
                        <button type='submit' className="botonsubmit">LOGIN</button>
                    </div>
                    <p>{errorAviso}</p>
                </div>
        </Form>
)
}
export default LoginForm;