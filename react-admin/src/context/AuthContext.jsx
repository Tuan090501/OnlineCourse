import { createContext, useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const getUser = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/api/users/${id}`)
    setUser(data)
  }

  const login = async ({ email, password }) => {
    try {
      const { data } = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      })
      const savedData = {
        id: data.user.id,
        role: data.user.role,
        token: data.authorisation.token,
      }
      console.log(savedData)
      localStorage.setItem("id", savedData.id)
      localStorage.setItem("role", savedData.role)
      localStorage.setItem("token", savedData.token)
      await getUser(savedData.id)
      if (savedData.role === "admin") {
        console.log(user)
        navigate("/admin")
      } else if (savedData.role === "user") {
        navigate("/")
      } else if (savedData.role === "lecturer") {
        navigate("/lecturer")
      }
    } catch (err) {
      setError(
        "The password that you've entered is incorrect. Please enter again!"
      )
    }
  }

  const logout = async () => {
    try {
      const bearer = `Bearer ${localStorage.getItem("token")}`

      // const result = await axios.post("http://localhost:8000/api/logout")

      setUser(null)
      window.localStorage.clear()
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AuthContext.Provider value={{ user, error, getUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuthContext() {
  return useContext(AuthContext)
}
