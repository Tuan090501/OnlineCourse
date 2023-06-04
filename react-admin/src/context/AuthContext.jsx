import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
 const [user, setUser] = useState(null)
 const [error, setError] = useState("")
 const navigate = useNavigate()

 useEffect(() => {
 const savedUser = localStorage.getItem("user")
 if (savedUser) {
 setUser(JSON.parse(savedUser))
 }
 }, [])

 const getUser = async (id) => {
 const { data } = await axios.get(`http://localhost:8000/api/users/${id}`)
 setUser(data)
 localStorage.setItem("user", JSON.stringify(data))
 }

 const loginFacebook = async ({ email, provider, data }) => {
   try {
     const response = await axios.get(`http://localhost:8000/api/users/${email}/${data.userID}`);
     if(response.data.length === 0 ){
      const { userFacebook } = await axios.post(`http://localhost:8000/api/users/registerSocial`, {
         'email' : data.email,
         'user_name': data.last_name,
         'image': data.picture.data.url,
         'facebook_id': Number(data.userID),
         'status': 1,
         'role' :"user"
      }).then(res=>{
        
         const savedData = {
            id: res.data.id,
            role: res.data.role,
            token: data.accessToken,
         }
         localStorage.setItem("id", savedData.id)
         localStorage.setItem("role", savedData.role)
         localStorage.setItem("token", savedData.token)
         getUser(savedData.id)

         if (savedData.role === "admin") {
            navigate("/admin")
            } else if (savedData.role === "user") {
            navigate("/")
            } else if (savedData.role === "lecturer") {
            navigate("/lecturer")
            }
      }
         ).catch(err=>console.log(err));
      

     }else{
      const savedData = {
         id: response.data[0].id,
         role: response.data[0].role,
         token: data.accessToken,
      }
      localStorage.setItem("id", savedData.id)
      localStorage.setItem("role", savedData.role)
      localStorage.setItem("token", savedData.token)
      await getUser(savedData.id)
      if (savedData.role === "admin") {
      
      navigate("/admin")
      } else if (savedData.role === "user") {
      navigate("/")
      } else if (savedData.role === "lecturer") {
      navigate("/lecturer")
      }
     }
   } catch (error) {
     console.error(error);
     // Handle any errors that occur during the API request
   }
 };

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
    localStorage.setItem("id", savedData.id)
    localStorage.setItem("role", savedData.role)
    localStorage.setItem("token", savedData.token)
    await getUser(savedData.id)
    if (savedData.role === "admin") {
    
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
 <AuthContext.Provider value={{ user, error, getUser, login, logout,loginFacebook }}>
 {children}
 </AuthContext.Provider>
 )
}

export default function useAuthContext() {
 return useContext(AuthContext)
}
