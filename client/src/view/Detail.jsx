
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos.css';
import {useParams} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
const Detail = (props) => {
    const { alias } = useParams();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        axios.get('http://localhost:8000/api/user/'+alias)
            .then(res => {
                setNombre(res.data.userF.name);
                setEmail(res.data.userF.email);
            })
            .catch(err => {
            })
    }, [alias]);
return (
    <div>
        <h1>{nombre}</h1>
        <h2>{alias}</h2>
        <h3>{email}</h3>
    </div>
)
}
export default Detail;