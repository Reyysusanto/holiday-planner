'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()
  
  const navigateSignIn = () => {
    router.push("/sign-in");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-2xl">Ini page utama</h1>
      <Button className="py-2 px-3 bg-primaryColor" onClick={navigateSignIn}>Sign-In</Button>
    </div>
  )
}

export default Page