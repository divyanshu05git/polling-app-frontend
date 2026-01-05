import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import axios from "axios"

export default function Signup() {
    const usernameRef = useRef<HTMLInputElement | null >(null)
    const passwordRef = useRef<HTMLInputElement | null >(null)
    const navigate = useNavigate();

    async function signup(){
        const email = usernameRef.current?.value
        const password = passwordRef.current?.value

        if(!email || !password){
            alert("Required missing fields");
            return;
        }

        try{
            await axios.post("http://localhost:5050/signup",{
                email:email,
                password:password
            })
            alert("signup successful")
            navigate("/signin")
        }
        catch(err){
            alert("error signing up")
            alert(err)
        }

    }
  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-background via-muted to-background p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl">
            Create  your account
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input placeholder="Email" type="email" ref={usernameRef}/>
          <Input placeholder="Password" type="password" ref={passwordRef}/>

          <Button className="w-full" onClick={signup}>Sign Up</Button>

          {/* OR divider (correct) */}
          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">
              Or continue with
            </span>
            <Separator className="flex-1" />
          </div>

          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
          <p className="text-center">
          <Link  to="/signin"
                className="text-sm text-primary hover:underline">
                Already have an account
            </Link>
          </p>  
        </CardContent>
      </Card>
    </div>
  )
}

