import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Signin() {
  const usernameRef = useRef<HTMLInputElement | null >(null)
    const passwordRef = useRef<HTMLInputElement | null >(null)
    const navigate = useNavigate();

    async function signin(){
        const email = usernameRef.current?.value
        const password = passwordRef.current?.value

        if(!email || !password){
            alert("Required missing fields");
            return;
        }

        try{
            await axios.post("http://localhost:5050/signin",{
                email:email,
                password:password
            })
            alert("signin successful")
            navigate("/")
        }
        catch(err){
            alert("error signing in")
        }

    }
  return (
    <div className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-background via-muted to-background p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl">
            Sign in to your account
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input ref={usernameRef} placeholder="Email" type="email" />
          <Input ref={passwordRef} placeholder="Password" type="password" />

          <Button onClick={signin} className="w-full">Sign In</Button>

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
        </CardContent>
      </Card>
    </div>
  )
}

