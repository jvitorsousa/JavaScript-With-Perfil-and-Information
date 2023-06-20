import { useCallback, useMemo } from "react";

function UsersList({ users = [], onItemClick }) {

    const handleItemClick = useCallback((user) => {
        onItemClick && onItemClick(user);
        console.log("Click", user);
    }, []);

    const usersMap = useMemo(() => {
        return users.map((user) => {
            return (
                <li key={user.id}>
                    <p onClick={() => handleItemClick(user)}>{user.name}</p>
                </li>
            );
        });

    }, [users]);

    return (
        <div>
            {users.length > 0 ? (
                <ul>
                    {usersMap}
                </ul>
            ) : (
                <p>Nenhum usuario cadastrado</p>
            )}
        </div>
    );
}

export default UsersList