import { useState } from "react"
import "../SelectRole.css"
import { useNavigate } from "react-router"

export function SelectRole() {
  const [role, setRole] = useState("")
  const navigate = useNavigate()

  return (
    <div className="role-container">
      <h2>Select your role</h2>
      <div className="button-group">
        <button
          onClick={() => {
            setRole("Leader")
            navigate("/tinder")
          }}
          className={
            `roleBtn ${role === "Leader" ? "selected" : ""}`
          }
        >
          Leader
        </button>

        <button
          onClick={() => setRole("Member")}
          className={
            `roleBtn ${role === "Member" ? "selected" : ""}`
          }
        >
          Member
        </button>
      </div>
    </div>
  )
}
