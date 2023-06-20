import { useParams, Link } from "react-router-dom"
import data from "../../data";

const DetailsPage =() => {

    const { users } = data;

    const parameters= useParams();
    const { id: targetId } = parameters;

    const user = users.find((user)=>{
        return user.id === targetId;
    });

    return (
        <div>
            {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.description}</p>
                    <img alt={user.image.alt} src={user.image.src}/>
                </div> 
            ) : ( 
                <p>Usuario nao encontrado.</p>             
            )}
            <Link to="/">Voltar</Link>
        </div>
    )
}

export default DetailsPage