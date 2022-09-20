
import '../estilos.css';
import axios from 'axios';
import {useParams, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const Bright = (props) => {
    const { id } = useParams();
    const [autor,  setNombreUsuario] = useState("");
    const [ideas, setIdeas] = useState([]);
    const [contenido, setIdea] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/user/'+id+'/id')
            .then(res => {
                setNombreUsuario(res.data.user.alias);
            })
            .catch(err => {
            })
        axios.get('http://localhost:8000/api/ideas/')
            .then(res=>{
                setIdeas(res.data);
            })
    }, [id]);
    const aumentar = (id) => {
        axios.put('http://localhost:8000/api/idea/update/'+id)
        .then(res => {
            axios.get('http://localhost:8000/api/ideas/')
            .then(res=>{
                setIdeas(res.data);
            })
        })
        .catch(err => {
        })
    }
    const borrar = (id) => {
        axios.delete('http://localhost:8000/api/idea/delete/'+id)
            .then(res=>{
                axios.get('http://localhost:8000/api/ideas/')
                .then(res=>{
                    setIdeas(res.data);
                })
            })
    }
    const handlerCrear = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/idea/new',{ autor, contenido })
            .then((res)=>{
                setIdea("");
                axios.get('http://localhost:8000/api/ideas/')
                .then(res=>{
                    setIdeas(res.data);
                })
            })
    }
    return (
        <div className='container-dash'>
            <h1>Hi {autor} !</h1>
            <Form onSubmit={handlerCrear}>
                <div className='contenedor1'>
                <p>Idea:</p>
                <input type="text" onChange={e => { setIdea(e.target.value) }} value={contenido} />
                <button type='submit' className="botonsubmit">IDEA</button>
                </div>
            </Form>
            {
                ideas.map((idea,idx)=>{
                    return(
                        (idea.autor === autor)?
                        <>
                        <div key={idx} className='aux-div'>
                            <Link to={'/user_profile/'+idea.autor}>{idea.autor}</Link>
                            <p>{idea.contenido}</p>
                            <p>{idea.likes} people like this</p>
                            <p onClick={(e)=>aumentar(idea._id)} >LIKE</p>
                            <button onClick={(e)=>{borrar(idea._id)}} className="botonsubmit">BORRAR</button>
                        </div>
                        </>:
                        <>
                        <div key={idx} className='aux-div'>
                            <Link to={'/user_profile/'+idea.autor}>{idea.autor}</Link>
                            <p>{idea.contenido}</p>
                            <p>{idea.likes} people like this</p>
                            <p onClick={(e)=>aumentar(idea._id)} >LIKE</p>
                        </div>
                        </>
                    );
                })
            }
        </div>
    );
}
export default Bright;

