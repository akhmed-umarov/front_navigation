'use client'
import { useEffect } from "react"
import { useAppSelector } from "@/store/hooks"
import { useAppDispatch } from "@/store/hooks"
import { logout } from "@/store/slice/auth.slice"
import { Button } from "@chakra-ui/react"
import { useRouter } from 'next/navigation'


export default function Actived() {

    const user = useAppSelector(store => store.auth.user)
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(store => store.auth.isAuth)
    const router = useRouter()

    useEffect(()=>{ 
        if (user.email) { 
            user.isActivated === true ?  router.push('/home') : null
        }
        console.log(user);
    }, [isAuth])
    
    return (
        <>
            <div className="w-100vw h-100vh flex justify-center items-center">
                {!user.email ? null :
                    <div>
                        <div className="flex justify-center items-center flex-col">
                            <h1>Перейдите на почту для регистарации</h1>
                            <h3>{user.email}</h3>
                        </div>
                        <div>
                            <Button className="mt-5 w-full h-full" colorScheme='blue' variant='outline' onClick={() => dispatch(logout())}>Выйти из аккаунта</Button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
