'use client'
import { useState, useEffect } from "react";
import UserService from "@/services/user.service";
import type { IUser } from "@/types/IUser";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login, registration, logout } from "@/store/slice/auth.slice";

export default function Home() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [users, setUsers] = useState<IUser[]>([]);
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(store => store.auth.isLoading)
  const user = useAppSelector(store => store.auth.user)
  const isAuth = useAppSelector(store => store.auth.isAuth)



  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  if (!isAuth) {
    return (
      <div>
        <div>
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder='Email'
          />
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder='Пароль'
          />
          <button onClick={() => dispatch(login({ email, password }))}>
            Логин
          </button>
          <button onClick={() => dispatch(registration({ email, password }))}>
            Регистрация
          </button>
        </div>
        <button onClick={getUsers}>Получить пользователей</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{isAuth ? `Пользователь авторизован ${user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
      <h1>{user.isActivated ? 'Аккаунт подтвержден по почте' : 'ПОДТВЕРДИТЕ АККАУНТ!!!!'}</h1>
      <button onClick={() =>dispatch(logout())}>Выйти</button>
      <div>
        <button onClick={getUsers}>Получить пользователей</button>
      </div>
      {users.map(user =>
        <div key={user.email}>{user.email}</div>
      )}
    </div>
  )
}
