import { Box, IconButton, TextField } from "@mui/material"
import "./Category.scss"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import DeleteIcon from "@mui/icons-material/Delete"
import { useState } from "react"

import axios from "axios"

function Category({ categories, handleDeleteCourse }) {
  const copyCategories = [...categories]
  const isShowSubcategories = copyCategories.map(() => false)
  const [mainCategories, setMainCategories] = useState(copyCategories)
  const [showSubcategory, setShowSubcategory] = useState(isShowSubcategories)

  const handleShowSubcategory = (index) => (e) => {
    const newIsShowSubcategories = showSubcategory.map((item, i) => {
      if (index === i && item === false) return true
      else if (index === i && item === true) return false
      else return item
    })
    setShowSubcategory(newIsShowSubcategories)
  }

  const handleClickCreateSubCategory = (index) => (e) => {
    const uniqueID = Math.floor(
      Math.random() * Math.floor(Math.random() * Date.now())
    )

    mainCategories[index].subCategories.push({
      id: uniqueID,
      sub_name: "",
      id_category: index,
    })

    const temp = {
      id: mainCategories[index].id,
      category_name: mainCategories[index].category_name,
      subCategories: mainCategories[index].subCategories,
    }

    const category = [...mainCategories]

    category[index] = temp
    setMainCategories(category)
  }

  const handleClickCreateCategory = (e) => {
    const temp = {
      category_name: "",
      subCategories: [],
    }
    setMainCategories([...mainCategories, temp])

    const arr = [...showSubcategory]
    arr.push(false)
    setShowSubcategory(arr)
  }

  const handleOnChangeCategory = (index) => (e) => {
    const temp1 = [...mainCategories]
    temp1.forEach((item, i) => {
      if (index === i) item.category_name = e.target.value
    })
    setMainCategories(temp1)
  }

  const handleOnChangeSubcategory =
    (categoryIndex, subCategoryIndex) => (e) => {
      const newSubcategory = mainCategories[categoryIndex].subCategories.map(
        (item, i) => {
          if (subCategoryIndex === i) {
            return {
              id: item.id,
              sub_name: e.target.value,
              id_category: mainCategories[categoryIndex].id,
            }
          }
          return item
        }
      )

      const newCategory = {
        id: mainCategories[categoryIndex].id,
        category_name: mainCategories[categoryIndex].category_name,
        subCategories: newSubcategory,
      }
      const newCategories = mainCategories.map((item, i) => {
        if (categoryIndex === i) {
          return newCategory
        } else return item
      })
      setMainCategories(newCategories)
    }

  const handleOnSubmit = async (e) => {
    // categories được lấy từ database
    const data = mainCategories.slice(0, copyCategories.length)

    // Phần data được thêm vào trên giao diện
    const data_add = mainCategories.slice(
      data.length,
      mainCategories.length + 1
    )

    // Nếu không có thêm bất kỳ category nào vào database mà chỉ có chỉnh sửa category hoặc thêm subCategory
    if (mainCategories.length === copyCategories.length) {
      for (let i = 0; i < copyCategories.length; i++) {
        // Nếu có thay đổi category_name
        if (
          mainCategories[i].category_name !== copyCategories[i].category_name
        ) {
          try {
            const res = await axios.put(
              `http://localhost:8000/api/categories/${mainCategories[i].id}`,
              { category_name: mainCategories[i].category_name }
            )
            console.log(res.data)
            window.location.reload()
          } catch (error) {
            console.log(error)
          }
        }
        if (
          mainCategories[i].subCategories.length ===
          copyCategories[i].subCategories.length
        ) {
          for (let j = 0; j < copyCategories.length; j++) {
            if (
              mainCategories[i].subCategories[j].sub_name !==
              copyCategories[i].subCategories[j].sub_name
            ) {
              await axios
                .put(
                  `http://localhost:8000/api/sub-categories/${mainCategories[i].subCategories[j].id}`,
                  { sub_name: mainCategories[i].subCategories[j].sub_name }
                )
                .then((response) => {
                  // window.location.reload()
                  // console.log(response)
                })
                .catch((err) => console.log(err))
            }
          }
        } else if (
          mainCategories[i].subCategories.length >
          copyCategories[i].subCategories.length
        ) {
          const temp = mainCategories[i].subCategories.filter(
            (item) =>
              !copyCategories[i].subCategories.find(({ id }) => item.id === id)
          )
          for (let index = 0; index < temp.length; index++) {
            await axios.post(`http://localhost:8000/api/sub-categories`, {
              sub_name: temp[index].sub_name,
              id_category: temp[index].id_category,
            })
          }
          window.location.reload()
        }
      }
    } else if (mainCategories.length > copyCategories.length) {
      for (let index = 0; index < data_add.length; index++) {
        axios
          .post("http://localhost:8000/api/categories", {
            category_name: data_add[index].category_name,
          })
          .then((res) => window.location.reload())
          .catch((err) => console.log(err))
      }

      for (let i = 0; i < copyCategories.length; i++) {
        if (
          mainCategories[i].category_name !== copyCategories[i].category_name
        ) {
          await axios
            .put(
              `http://localhost:8000/api/categories/${mainCategories[i].id}`,
              { category_name: mainCategories[i].category_name }
            )
            .then((respone) => console.log(respone.data))
            .catch((err) => console.log(err))
        }
      }
    }
  }

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/categories/${id}`)
      console.log("Data deleted successfully.")
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteSubcategory =
    (categoryIndex, subCategoryIndex) => async (e) => {
      const id =
        mainCategories[categoryIndex].subCategories[subCategoryIndex].id

      const newCategories = [...mainCategories]
      newCategories[categoryIndex].subCategories.pop()
      setMainCategories(newCategories)
      try {
        await axios.delete(`http://localhost:8000/api/sub-categories/${id}`)
        console.log("Data deleted successfully.")
      } catch (err) {
        console.log(err)
      }
    }

  return (
    <form
      className={`categories`}
      onSubmit={(e) => {
        e.preventDefault()
      }}
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
              defaultValue={item.category_name}
              type='text'
              id='category-input'
              name='category'
              onChange={handleOnChangeCategory(index)}
            ></TextField>

            <Box className='action-btns'>
              <IconButton
                onClick={() => handleDeleteCategory(item.id)}
                className='remove-user__btn'
              >
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
                  defaultValue={subCategory.sub_name}
                  onChange={handleOnChangeSubcategory(index, subCategoryIndex)}
                ></TextField>

                <Box className='action-btns'>
                  <IconButton
                    className='remove-user__btn'
                    onClick={handleDeleteSubcategory(index, subCategoryIndex)}
                  >
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
          onClick={handleOnSubmit}
        >
          save
        </button>
      </Box>
    </form>
  )
}

export default Category
