"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"


const Login = () => {

  const router = useRouter()

  return (
    <div>
      <h1>Login Page</h1>
      <br />
      <Link href="/" >Go to homepage</Link>
      <br />
      <button onClick={()=> router.push('/')}>Homepage</button>

    </div>
  )
}

export default Login
