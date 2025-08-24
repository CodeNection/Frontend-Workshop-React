import { useState, useEffect } from "react"
import "../Tinder.css"

export function Tinder() {
    const [profiles, setProfiles] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        async function fetchProfiles() {
                const response = await fetch('http://localhost:3001/profiles')
                const data = await response.json()
                setProfiles(data)
        }
        fetchProfiles()
    }, [])

    const handleNext = () => {
        if (currentIndex + 1 < profiles.length) {
            setCurrentIndex((prevIndex) => prevIndex + 1)
        } else {
            setShowMessage(true)
        }
    }
    
    if (profiles.length === 0) return <p>Loading...</p>

    if(showMessage) {
        return <p>No more profiles available...</p>
    }

    return (
        <div className="tinder-container">
        <h2>{profiles[currentIndex].name}</h2>
        <h2>{profiles[currentIndex].email}</h2>
        <p>{profiles[currentIndex].aboutYou}</p>
        <p>{profiles[currentIndex].specialisation} | CGPA: {profiles[currentIndex].cgpa}</p>
        <div>
            <button onClick={handleNext}>No ❌</button>
            <button onClick={handleNext}>Yes ✅</button>
        </div>
        </div>
    )
}
