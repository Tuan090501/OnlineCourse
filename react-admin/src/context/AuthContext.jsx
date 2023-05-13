import { createContext, useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState([])
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
        token: data.authorisation.token,
      }
      localStorage.setItem("id", savedData.id)
      localStorage.setItem("token", savedData.token)
      await getUser(data.user.id)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  const logout = async () => {
    try {
      const bearer = `Bearer ${localStorage.getItem("token")}`

      //   const result = await axios.post("http://localhost:8000/api/logout")

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
