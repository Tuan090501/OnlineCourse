import { Box, Typography } from "@mui/material"
import Category from "../../components/Category/Category"
import { useState, useEffect } from "react"
import axios from "axios"


function ManageCategory() {
  // const [arr, setArr] = useState(categories)
  // const handleDeleteCourse = (id) => {
  //   console.log(id)
  //   //  const newData = arr.splice(id,1)
  //   setArr((prev) => {
  //     const data = prev.filter((x, idx) => x.id !== id)
  //     console.log(data)
  //     return data
  //   })
  // }
  


const [categories,setCategories] = useState([])

const [test,setTest] = useState([])
  useEffect(()=>{
      const fetchData =  async () =>{
        const data = await axios.get('http://localhost:8000/api/categories')
        const cate = data.data.map(i => {
         
          return i.subcategory
        })
  
        const category = []
        

        for (let i = 0; i < data.data.length; i++) {
           category.push({
            id: data.data[i].id,
            category_name: data.data[i].category_name,
            subCategories: cate[i]
           })
          }
      
           // const categories = [
        //   {
        //     id: 1,
        //     name: "Business",
        //     subCategories: ["Sales", "Management", "E-Commerce"],
        //   },
        //   {
        //     id: 2,
        //     name: "IT & Software",
        //     subCategories: ["Front-end Web", "Back-end Web", "Mobile"],
        //   },
        //   {
        //     id: 3,
        //     name: "IT ",
        //     subCategories: ["Front-end Web", "Back-end Web"],
        //   },
        // ]
          setCategories(category) 
          
      }
      fetchData()
  },[])
  return (
    <Box className='manage-page manage-page-category'>
    
      <Box
        className='manage-wrapper'
        sx={{
          pt: "0px !important",
          mt: "80px !important",
        }}
      >
        {
          categories.length>0 ? <Category
          categories={categories} /> : ""
        }
      </Box>
    </Box>
  )
}

export default ManageCategory
