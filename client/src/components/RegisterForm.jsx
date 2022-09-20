import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos.css';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
const LoginForm = (props) => {
    const [ name, setName] = useState("");
    const [ alias, setAlias] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ confirmPassword, setconfirmPassword] = useState("");
    const [ nameError, setNameError ] = useState("");
    const [ aliasError, setAliasError ] = useState("");
    const [ emailError, setEmailError] = useState("");
    const [ passwordError,setPasswordError ] = useState("");
    const [ confirmacion, setConfirmacion] = useState("");
    const handlerCreateUser= (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/new', { name, alias, email, password, confirmPassword })
            .then(res => {
                    setNameError("");
                    setAliasError("");
                    setEmailError("");
                    setPasswordError("");
                    setName("");
                    setAlias("");
                    setEmail("");
                    setPassword("");
                    setconfirmPassword("");
                    setConfirmacion("Ingreso Exitoso");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                if (Object.keys(errorResponse).includes('name')) {
                    setNameError(errorResponse['name'].message);
                }
                if (Object.keys(errorResponse).includes('alias')) {
                    setAliasError(errorResponse['alias'].message);
                }
                if (Object.keys(errorResponse).includes('email')) {
                    setEmailError(errorResponse['email'].message);
                }
                if(Object.keys(errorResponse).includes('confirmPassword')) {
                    setPasswordError(errorResponse['confirmPassword'].message);
                }  
                else {
                    setConfirmacion("");
                }
            })
    }
return (
        <Form onSubmit={handlerCreateUser}>
                <div className='contenedor1'>
                    <h2>Register</h2>
                    <p>Name:</p>
                    <input type="text" onChange={e => { setName(e.target.value) }} value={name} />
                    <p>{nameError}</p>
                    <p>Alias:</p>
                    <input type="text" onChange={e => { setAlias(e.target.value) }} value={alias} />
                    <p>{aliasError}</p>
                    <p>Email:</p>
                    <input type="email" onChange={e => { setEmail(e.target.value) }} value={email} />
                    <p>{emailError}</p>
                    <p>Password</p>
                    <input type="password" onChange={e => { setPassword(e.target.value) }} value={password} />
                    <p>Confirm Password</p>
                    <input type="password" onChange={e => { setconfirmPassword(e.target.value) }} value={confirmPassword} />
                    <p>{passwordError}</p>
                    <div>
                        <button type='submit' className="botonsubmit">Register</button>
                    </div>
                    <p>{confirmacion}</p>
                </div>
        </Form>
)
}
export default LoginForm;