import { Box, IconButton, TextField } from "@mui/material"
import "./Category.scss"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined"
import DeleteIcon from "@mui/icons-material/Delete"
import { useState } from "react"
import { useEffect } from "react"

function Category({ categories }) {
  const categoryValues = categories.map((item) => ({ name: item.name }))
  const isShowSubcategories = categories.map(() => false)
  const subCategoryValues = categories.map((item) => ({
    subCategories: item.subCategories,
  }))

  const [categoryValue, setCateoryValue] = useState([...categoryValues])
  const [subCategoryValue, setSubCategoryValue] = useState([
    ...subCategoryValues,
  ])
  const [isShowSubcategory, setIsShowSubcategory] = useState([
    ...isShowSubcategories,
  ])

  const handleShowSubcategory = (index) => (e) => {
    const newIsShowSubcategories = isShowSubcategory.map((item, i) => {
      if (index === i && item === false) return true
      else if (index === i && item === true) return false
      else return item
    })
    setIsShowSubcategory(newIsShowSubcategories)
  }

  const resetCategoryValue = (index) => (e) => {
    const valueAfterReset = categoryValue.map((item, i) => {
      if (index === i) {
        return { name: categoryValues[index].name }
      } else return item
    })
    setCateoryValue(valueAfterReset)
  }

  const handleChangeCategory = (index) => (e) => {
    const newCategoryValues = categoryValue.map((item, i) => {
      if (index === i) return { name: e.target.value }
      else return item
    })
    setCateoryValue(newCategoryValues)
  }

  const handleChangeSubcategory = (categoryIndex, subCategoryIndex) => (e) => {
    const newSubcategoryValue = subCategoryValue.map((category, index) => {
      if (categoryIndex === index) {
        const tempSubcategories = category.subCategories.map(
          (subCategory, subIndex) => {
            if (subCategoryIndex === subIndex) {
              return e.target.value
            } else return subCategory
          }
        )
        return { subCategories: tempSubcategories }
      } else return category
    })
    setSubCategoryValue(newSubcategoryValue)
  }

  return (
    <form className={`categories`}>
      {categories.map((item, index) => (
        <Box className='category'>
          <Box className='category-wrapper'>
            <Box className='open-subcategories-btn'>
              <input
                type='checkbox'
                id={`switch-${index}`}
              />
              <label
                for={`switch-${index}`}
                onClick={handleShowSubcategory(index)}
              >
                <ChevronRightIcon />
              </label>
            </Box>

            <TextField
              className='category-name'
              value={categoryValue[index].name}
              onChange={handleChangeCategory(index)}
              type='text'
              id='category-input'
              name='category'
            ></TextField>

            <Box className='action-btns'>
              <IconButton
                className='reset-user__btn'
                onClick={resetCategoryValue(index)}
              >
                <RestartAltOutlinedIcon />
              </IconButton>
              <IconButton className='remove-user__btn'>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>

          <Box
            className={`subcategories ${
              isShowSubcategory[index] ? "show" : ""
            }`}
          >
            {item.subCategories.map((item, subCategoryIndex) => (
              <Box className='subcategory'>
                <TextField
                  type='text'
                  className='category-name'
                  value={
                    subCategoryValue[index].subCategories[subCategoryIndex]
                  }
                  onChange={handleChangeSubcategory(index, subCategoryIndex)}
                ></TextField>

                <Box className='action-btns'>
                  <IconButton className='remove-user__btn'>
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}
            <Box className='subcategory'>
              <TextField
                className='subcateory-input'
                placeholder='Add new subcategory *'
              >
                Add new subcategory
              </TextField>

              <Box className='action-btns'>
                <button
                  className='create-subcategory-btn'
                  type='button'
                >
                  Create subcategory
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}

      <Box className='categories-action-btns'>
        <button
          type='button'
          className='save-btn'
        >
          save
        </button>
      </Box>
    </form>
  )
}

export default Category
