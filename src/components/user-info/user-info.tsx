'use client'
import { useAppSelector , useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/slice/auth.slice';
import { Button } from '@chakra-ui/react';
import './user-info.scss'

const UserInfo = () => {
    const user = useAppSelector(state=>state.auth.user)
    const dispatch = useAppDispatch()
    const logoutUser = ()=>{ 
        dispatch(logout())
    }

    return (
        <div className="user_block">
            <p>Ваша почта:</p>
            <h3>{user.email}</h3>
            <Button onClick={logoutUser}>
                Выйти
            </Button>
        </div>
    );
};

export default UserInfo;