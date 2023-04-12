import { Box, IconButton, TextField } from "@mui/material"
import "./Category.scss"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import DeleteIcon from "@mui/icons-material/Delete"
import { useState } from "react"
import { useEffect } from "react"

function Category({ categories,handleDeleteCourse }) {
  const copyCategories = [...categories]
  const isShowSubcategories = copyCategories.map(() => false)

  const [mainCategories, setMainCategories] = useState(copyCategories)
  const [showSubcategory, setShowSubcategory] = useState(isShowSubcategories)

  const handleSubmit = (event) => {
    event.preventDefault()

    let arr = [...mainCategories]
      .filter((item) => {
        if (item.name.trim().length !== 0) return item
      })

      .map((item) => {
        const subCategoriesArr = item.subCategories.filter((element) => {
          if (element.trim().length !== 0) return element
        })
        return subCategoriesArr
      })
    console.log(arr)
  }

  const handleShowSubcategory = (index) => (e) => {
    const newIsShowSubcategories = showSubcategory.map((item, i) => {
      if (index === i && item === false) return true
      else if (index === i && item === true) return false
      else return item
    })
    setShowSubcategory(newIsShowSubcategories)
  }

  const handleClickCreateSubCategory = (index) => (e) => {
    mainCategories[index].subCategories.push(" ")

    const temp = {
      id: mainCategories[index].id,
      name: mainCategories[index].name,
      subCategories: mainCategories[index].subCategories,
    }
    const category = [...mainCategories]

    category[index] = temp
    setMainCategories(category)
  }

  const handleClickCreateCategory = (e) => {
    const temp = {
      id: Math.floor(Math.random() * 100),
      name: "",
      subCategories: [""],
    }
    setMainCategories([...mainCategories, temp])

    const arr = [...showSubcategory]
    arr.push(false)
    setShowSubcategory(arr)
  }

  const handleOnChangeCategory = (index) => (e) => {
    const temp = [...mainCategories]
    temp.forEach((item, i) => {
      if (index === i) item.name = e.target.value
    })
    setMainCategories(temp)
  }

  const handleOnChangeSubcategory =
    (categoryIndex, subCategoryIndex) => (e) => {
      let temp = [...mainCategories]
      temp[categoryIndex].subCategories.forEach((item, i) => {
        if (subCategoryIndex === i) {
          temp[categoryIndex].subCategories[subCategoryIndex] = e.target.value
        }
      })
      setMainCategories(temp)
      console.log(mainCategories)
    }

    const handleDelete =(id)=>{
      console.log(mainCategories)
  setMainCategories(prev =>{
    // const newData = mainCategories.splice(id,1)
    const data = prev.filter((x) => x.id !== id)
    return data
  })
      console.log(id)
      // handleDeleteCourse(id)
    }

  return (
    <form
      className={`categories`}
      onSubmit={handleSubmit}
    >
      <Box className='create-container'>
        <button
          className='create-btn'
          type='button'
          onClick={handleClickCreateCategory}
        >
          Create Category
        </button>
      </Box>

      {mainCategories.map((item, index) => (
        <Box className='category'>
          <Box className='category-wrapper'>
            <Box className='open-subcategories-btn'>
              <input
                type='checkbox'
                id={`switch-${item.id}`}
              />
              <label
                for={`switch-${item.id}`}
                onClick={handleShowSubcategory(index)}
              >
                <ChevronRightIcon />
              </label>
            </Box>

            <TextField
              className='category-name'
              defaultValue={item.name}
              type='text'
              id='category-input'
              name='category'
              onChange={handleOnChangeCategory(index)}
            ></TextField>

            <Box className='action-btns'>
              <IconButton className='remove-user__btn' onClick={()=>handleDelete(item.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>

          <Box
            className={`subcategories ${showSubcategory[index] ? "show" : ""}`}
          >
            {item.subCategories.map((subCategory, subCategoryIndex) => (
              <Box className='subcategory'>
                <TextField
                  type='text'
                  className='category-name'
                  name='subcategory'
                  defaultValue={subCategory}
                  onChange={handleOnChangeSubcategory(index, subCategoryIndex)}
                ></TextField>

                <Box className='action-btns'>
                  <IconButton className='remove-user__btn'>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}

            <Box className='action-btns'>
              <button
                className='create-subcategory-btn'
                type='button'
                onClick={handleClickCreateSubCategory(index)}
              >
                Create subcategory
              </button>
            </Box>
          </Box>
        </Box>
      ))}

      <Box className='categories-action-btns'>
        <button
          type='submit'
          className='save-btn'
        >
          save
        </button>
      </Box>
    </form>
  )
}

export default Category
