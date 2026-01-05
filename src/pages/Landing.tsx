import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function LandingPage() {
  const navigate = useNavigate();

  function handleEvents(){
    const token = localStorage.getItem("token")

    if(!token){
        navigate("/signin")
        return;
    }
    navigate("/events")
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
      bg-gradient-to-br from-background via-muted to-background px-6"
    >
        <div className="absolute top-4 left-4 pt-6">
            <div className="mb-6 flex items-center gap-2">
                <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground
                flex items-center justify-center font-bold text-xl">
                P
                </div>
                <span className="text-2xl font-bold">Pollify</span>
            </div>
        </div>


        <div className="absolute top-4 right-4 pt-6">
                <div className="flex justify-center">
                    <div className="pr-1" onClick={
                        () => navigate("/signup")
                    }>
                        <Button >Sign up</Button>
                    </div>
                    <div className="pl-2">
                        <Button variant="outline" onClick={
                            () => navigate("/signin")
                        }>Sign In</Button>
                    </div>
                </div>
        </div>
      


      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-bold text-center max-w-xl">
        Real-time polls for meetings, classrooms, and events
      </h1>

      <p className="mt-3 text-muted-foreground text-center max-w-md">
        Create live polls, let participants vote instantly,
        and see results update in real time.
      </p>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="px-8"
          onClick={handleEvents}
        >
          Create a Room
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="px-8"
          onClick={() => navigate("/join")}
        >
          Join a Room
        </Button>
      </div>

      {/* Footer hint */}
      <p className="mt-10 text-xs text-muted-foreground">
        No sign-up required to join a room
      </p>
    </div>
  );
}
