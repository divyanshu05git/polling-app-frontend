
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { useNavigate } from "react-router-dom"
import axios from "axios";


type Rooms={
    id : number,
    roomName : string,
    createdAt : string
}

export function Events(){
    const navigate = useNavigate();

    const [rooms,setRooms]=useState<Rooms[]>([]);
    const [loading,setLoading]=useState(true);
    
    useEffect(()=>{
        async function fetchRooms() {
            try{
                setLoading(true);
                const token = localStorage.getItem("token");
                
                const res=await axios.get("http://localhost:5050/rooms",{
                    headers:{
                        Authorization : token
                    }
                })

                setRooms(res.data.rooms ?? res.data)
                
            }
            catch(err){
                alert("failed to catch rooms")
            }
            finally{
                setLoading(false);
            }
        }
        fetchRooms()
    },[])
   
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background px-6 pt-24">
            
            {/* logo */}
            <div className="absolute top-4 left-4 pt-6">
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    P
                  </div>
                  <span className="text-2xl font-bold">Pollify</span>
                </div>
            </div>

            <div className="p-6 space-y-4 absolute top-4 right-4 pt-6">
                    <Button onClick={()=>{
                        navigate("/createroom")
                    }}>+ Create Room </Button>
               
            </div>

            {/* render all roooms */}
            <div className="max-w-3xl mx-auto space-y-4">
                <h1 className="text-xl font-semibold">My Rooms</h1>

                {loading && (
                <p className="text-muted-foreground">Loading rooms...</p>
                )}

                {!loading && rooms.length === 0 && (
                <p className="text-muted-foreground">
                    You haven’t created any rooms yet.
                </p>
                )}

                <div className="space-y-3">
                    {rooms.map((room) => (
                        <div
                        key={room.id}
                        className="p-4 rounded-lg border bg-card cursor-pointer hover:bg-muted"
                        onClick={() => navigate(`/room/${room.id}`)}
                        >
                        <p className="font-medium">{room.roomName}    #{room.id}</p>
                        <p className="text-sm text-muted-foreground">
                            Created on {new Date(room.createdAt).toLocaleDateString()}
                        </p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

