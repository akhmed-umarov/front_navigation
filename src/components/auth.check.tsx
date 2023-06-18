'use client'
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { checkAuth } from "@/store/slice/auth.slice";
import { useRouter } from 'next/navigation'
import { useAppSelector } from "@/store/hooks";
export default function AuthCheck({
  children,
}: {
  children: React.ReactNode
}) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  // const isAuth = useAppSelector(store => store.auth.isAuth)
  

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth())
      // if (!isAuth) { 
      // router.push('/login')
      // }
    } else { 
      router.push('/')
    }
  }, [])

  return (
    <div>
      {children}
    </div>
  )
}
