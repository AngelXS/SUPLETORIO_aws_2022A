
import '../estilos.css';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <div >
            <h1>Welcome</h1>
            <div className='principal'>
                <RegisterForm></RegisterForm>
                <LoginForm></LoginForm>
            </div>
        </div>
    );
}
export default Login;



