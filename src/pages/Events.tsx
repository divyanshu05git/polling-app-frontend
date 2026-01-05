
import { Card } from "../components/ui/card"


export function Events(){
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-muted to-background px-6">
            
            {/* logo */}
            <div className="absolute top-4 left-4 pt-6">
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                   P
                  </div>
                  <span className="text-2xl font-bold">Pollify</span>
                </div>
            </div>
        </div>
    )
}