import { Box, Typography } from "@mui/material"
import Category from "../../components/Category/Category"

const categories = [
  {
    name: "Business",
    subCategories: ["Sales", "Management", "E-Commerce"],
  },
  {
    name: "IT & Software",
    subCategories: [
      "Front-end Web",
       "Back-end Web", 
       "Mobile"
      ],
  },
]

function ManageCategory() {
  return (
    <Box className='manage-page manage-page-category'>
      <Box className='create-container'>
        <Box className='create-example'>e.g.IT & Software</Box>
        <button className='create-btn'>Create Category</button>
      </Box>

      <Typography className='category-note'>
        (The infomation of categories and subcategories can be edited or
        deleted)*
      </Typography>

      <Box
        className='manage-wrapper'
        sx={{
          pt: "0px !important",
        }}
      >
        
          <Category categories={categories} />
   
      </Box>
    </Box>
  )
}

export default ManageCategory
