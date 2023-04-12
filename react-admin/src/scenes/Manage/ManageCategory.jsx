import { Box, Typography } from "@mui/material"
import Category from "../../components/Category/Category"
import { useState } from "react"

const categories = [
  {
    id: 1,
    name: "Business",
    subCategories: ["Sales", "Management", "E-Commerce"],
  },
  {
    id: 2,
    name: "IT & Software",
    subCategories: ["Front-end Web", "Back-end Web", "Mobile"],
  },
  {
    id: 3,
    name: "IT ",
    subCategories: ["Front-end Web", "Back-end Web"],
  },
]
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


  return (
    <Box className='manage-page manage-page-category'>
      <Box
        className='manage-wrapper'
        sx={{
          pt: "0px !important",
          mt: "80px !important",
        }}
      >
        <Category
          categories={categories}
          // handleDeleteCourse={handleDeleteCourse}
        />
      </Box>
    </Box>
  )
}

export default ManageCategory
