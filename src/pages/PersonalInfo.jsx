import { useState } from "react"
import '../PersonalInfo.css'

export function PersonalInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aboutYou: "",
    specialisation: "",
    cgpa: "",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    
    setFormData((previousKeyValueState) => ({
      ...previousKeyValueState,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form-box">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label>About You</label>
        <textarea
          name="aboutYou"
          value={formData.aboutYou}
          onChange={handleInputChange}
          rows={4}
        />

        <label>Specialisation</label>
        <select
          name="specialisation"
          value={formData.specialisation}
          onChange={handleInputChange}
        >
          <option value="">Select your specialisation</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="data-science">Data Science</option>
          <option value="machine-learning">Machine Learning</option>
          <option value="cybersecurity">Cybersecurity</option>
        </select>

        <label>CGPA</label>
        <input
          type="number"
          name="cgpa"
          value={formData.cgpa}
          onChange={handleInputChange}
        />
        <button type="submit">Submit Profile</button>
      </form>
    </div>
  )
}
