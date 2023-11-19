// LogoutButton.js
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/slices/userReducer';
import {Button} from "react-bootstrap"
const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
        // You may want to redirect the user or perform other actions after logout
    };

    return (
        <Button variant="danger" onClick={handleLogout}>Logout</Button>
    );
};

export default LogoutButton;
