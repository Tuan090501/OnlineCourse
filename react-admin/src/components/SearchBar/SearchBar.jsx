import { Box, IconButton, InputBase } from "@mui/material"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import "./SearchBar.scss"

function SearchBar({placeholder='Find courses'}) {
  return (
    <Box className='searchBar'>
      <InputBase
        placeholder={placeholder}
        className='searchBar__input'
      ></InputBase>
      <button className='searchBar__btn'>
        <SearchOutlinedIcon />
      </button>
    </Box>
  )
}

export default SearchBar
