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
  const [category, setCategory] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault()

    let arr = [...mainCategories]
      .filter((item) => {
        if (item.category_name.trim().length !== 0) return item
      })

      .map((item) => {
        const subCategoriesArr = item.subCategories.filter((element) => {
          if (element.trim().length !== 0) return element
        })
        return subCategoriesArr
      })
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
      name: mainCategories[index].name,
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
    // const temp = {
    //   category_name: e.target.value,
    // }
    // setCategory(temp)
    setMainCategories(temp1)
  }
  console.log(mainCategories)
  const handleOnChangeSubcategory =
    (categoryIndex, subCategoryIndex) => (e) => {
      let temp = [...mainCategories]
      temp[categoryIndex].subCategories.forEach((item, i) => {
        if (subCategoryIndex === i) {
          temp[categoryIndex].subCategories[subCategoryIndex].sub_name = e.target.value
        }
      })
     
      setMainCategories(temp)
    }
  const handleOnSubmit = async e => {
    const data = mainCategories.slice(0,copyCategories.length)


    const data_add =mainCategories.slice(data.length,mainCategories.length+1)


    if(mainCategories.length === copyCategories.length  ){
      for (let i = 0; i < copyCategories.length; i++) {
        if( mainCategories[i].category_name !== copyCategories[i].category_name ){
            await axios.put(`http://localhost:8000/api/categories/${mainCategories[i].id}`,{category_name:mainCategories[i].category_name})
                  .then(respone => console.log(respone.data) )
                  .catch(err => console.log(err)) 
          } 
        if (mainCategories[i].subCategories.length === copyCategories[i].subCategories.length) {
          
            for (let j = 0; j < copyCategories.length; j++) {

              if( mainCategories[i].subCategories[j].sub_name !== copyCategories[i].subCategories[j].sub_name ){
                await axios.put(`http://localhost:8000/api/sub-categories/${mainCategories[i].subCategories[j].id}`,{sub_name:mainCategories[i].subCategories[j].sub_name})
                      .then(respone => console.log(respone.data) )
                      .catch(err => console.log(err)) 
              } 
            }
        } else if (mainCategories[i].subCategories.length > copyCategories[i].subCategories.length ) {
            
        }

          
        }

    
    } else if (mainCategories.length > copyCategories.length ){
        for (let index = 0; index < data_add.length; index++) {
            axios.post('http://localhost:8000/api/categories',{category_name : data_add[index].category_name})
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
            } 

        for (let i = 0; i < copyCategories.length; i++) {
          if (mainCategories[i].category_name !== copyCategories[i].category_name) {
            await axios.put(`http://localhost:8000/api/categories/${mainCategories[i].id}`,{category_name:mainCategories[i].category_name})
            .then(respone => console.log(respone.data) )
            .catch(err => console.log(err))
          }
    
         }
  
      
   }
  
    

  }

  const handleDeleteCategory = async (id) =>{
    try {
      await axios.delete(`http://localhost:8000/api/categories/${id}`);
      console.log('Data deleted successfully.');
    } catch (error) {
      console.error(error); 
    }
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
              defaultValue={item.category_name}
              type='text'
              id='category-input'
              name='category'
              onChange={handleOnChangeCategory(index)}
            ></TextField>

            <Box className='action-btns'>

              <IconButton onClick={()=> handleDeleteCategory(item.id)} className='remove-user__btn'>

          

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
          onClick={handleOnSubmit}
        >
          save
        </button>
      </Box>
    </form>
  )
}

export default Category