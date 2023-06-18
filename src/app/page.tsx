'use client'
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function Home() {
  const user = useAppSelector(store => store.auth.user)

  return (
    <div>
      {/* <Header/> */}
        <h1>asdasdasd</h1>
        <p>{user.email}</p>
      {/* <Footer/> */}
    </div>
  )
}
