import { useCallback } from "react";
import UsersList from "../../assets/components/UsersList/";
import data from "../../data";
import { useNavigate } from "react-router-dom";

const HomePage =() => {

    const navigate = useNavigate();

    const { users }= data;

    const handleOnItemClick = useCallback((user) =>{
        navigate(`/details/${user.id}`)
    }, []);
    
    return (
        <div>   
            <h1>Home</h1>
            <UsersList users={users} onItemClick ={handleOnItemClick} />
        </div>
    )
}

export default HomePage