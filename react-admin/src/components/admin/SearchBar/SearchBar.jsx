import { Box, InputBase } from "@mui/material"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import "./SearchBar.scss"

function SearchBar({ placeholder = "Find courses", handleSearch }) {
  return (
    <Box className='searchBar'>
      <InputBase
        onChange={handleSearch}
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
