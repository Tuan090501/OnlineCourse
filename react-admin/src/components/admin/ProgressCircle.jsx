import { Box } from "@mui/material"
function ProgressCircle({ percentage = "0.75", size = "55" }) {
  const angle = percentage * 360
  return (
    <Box
      sx={{
        margin: "0px 20px 0px 20px",
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        // conic-gradient: từ 0 độ đến 270 độ có màu trong suốt, từ 270 độ đến 360 độ có màu #ff5319 là màu cam

        background: `radial-gradient(#eee 55%, transparent 56%)
        ,conic-gradient(transparent 0deg ${angle}deg, #bbb ${angle}deg 360deg), #ff5319
        `,
      }}
    >
      {percentage * 100}%
    </Box>
  )
}

export default ProgressCircle
