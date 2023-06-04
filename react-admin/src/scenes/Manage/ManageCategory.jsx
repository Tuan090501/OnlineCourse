import { Box, Typography } from "@mui/material"
import Category from "../../components/admin/Category/Category"
import { useState, useEffect } from "react"
import axios from "axios"

function ManageCategory() {


  const [categories, setCategories] = useState([])

  const [test, setTest] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:8000/api/categories")
      const cate = data.data.map((i) => {
        return i.subcategory
      })

      const category = []

      for (let i = 0; i < data.data.length; i++) {
        category.push({
          id: data.data[i].id,
          category_name: data.data[i].category_name,
          subCategories: cate[i],
        })
      }

      setCategories(category)
// console.log(category)
      
    }
    fetchData()
  }, [])
  return (
    <Box className='manage-page manage-page-category'>
      <Box
        className='manage-wrapper'
        sx={{
          pt: "0px !important",
          mt: "80px !important",
        }}
      >
        {categories.length > 0 ? <Category categories={categories} /> : ""}
      </Box>
    </Box>
  )
}

export default ManageCategory
