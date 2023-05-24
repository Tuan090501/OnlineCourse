import React from "react"
import CircularProgress from "@mui/material/CircularProgress"
import { Box } from "@mui/material"

function Spinning() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "200px",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Spinning
