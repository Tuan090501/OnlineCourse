import "./Dashboard.scss"
import Grid from "@mui/material/Unstable_Grid2"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import PersonIcon from "@mui/icons-material/Person"
import SchoolIcon from "@mui/icons-material/School"
import PaidIcon from "@mui/icons-material/Paid"
import LineChart from "../../components/LineChart"
import PolarChart from "../../components/PolarChart"
import StatsBox from "../../components/StatsBox/StatsBox"
import UsersStatBox from "../../components/UsersStatBox/UsersStatBox"
import CourseBox from "../../components/CourseBox/CourseBox"
import { Box, Divider, Typography } from "@mui/material"

// array data of statsBox
const statsBox = [
  {
    title: "User",
    quantity: 5,
    icon: <RemoveRedEyeIcon />,
    backgroundImageColor: "linear-gradient(45deg,#2929a9,#0061ff)",
  },
  {
    title: "Student",
    quantity: "5",
    icon: <PersonIcon />,
    backgroundImageColor: "linear-gradient(45deg,#e93e0b,#f69235)",
  },
  {
    title: "Lecturer",
    quantity: "0",
    icon: <SchoolIcon />,
    backgroundImageColor: "linear-gradient(45deg,#28b648,#108c0f)",
  },
  {
    title: "Revenue",
    quantity: "5",
    icon: <PaidIcon />,
    backgroundImageColor: "linear-gradient(45deg,#f61919,#e7a50a)",
  },
]

// Array data of usersStatBox
const usersStatBox = [
  {
    percentage: "0.8",
    userType: "Local",
    userQuantity: 4,
  },
  {
    percentage: "0.2",
    userType: "Gmail",
    userQuantity: 1,
  },
  {
    percentage: "0.0",
    userType: "Facebook",
    userQuantity: 0,
  },
]

// Array data course example, in reality, we have to call API from server
const courses = [
  {
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.small.png",
    title: "Learn Web development",
    author: "Phạm Trần Quốc Tiến",
    studentQuantity: 0,
    rating: 0,
  },
  {
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.small.png",
    title: "Learn Web development",
    author: "Phạm Trần Quốc Tiến",
    studentQuantity: 0,
    rating: 0,
  },
  {
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.small.png",
    title: "Learn Web development",
    author: "Phạm Trần Quốc Tiến",
    studentQuantity: 0,
    rating: 0,
  },
  {
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.small.png",
    title: "Learn Web development",
    author: "Phạm Trần Quốc Tiến",
    studentQuantity: 0,
    rating: 5,
  },
  {
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.small.png",
    title: "Learn Web development",
    author: "Phạm Trần Quốc Tiến",
    studentQuantity: 0,
    rating: 5,
  },
]

function Dashboard() {
  return (
    <Box className='dashboard-container'>
      <Grid
        className='dashboard'
        container
        spacing={2}
      >
        {/* Row 1: Stat Box */}
        {statsBox.map(({ title, quantity, icon, backgroundImageColor }) => (
          <Grid
            className='mtb_10'
            item
            xs={12}
            sm={6}
            lg={3}
          >
            <StatsBox
              title={title}
              quantity={quantity}
              icon={icon}
              backgroundImageColor={backgroundImageColor}
            />
          </Grid>
        ))}

        {/* Row 2: Chart */}
        <Grid
          className='mtb_10'
          item
          xs={12}
          lg={8}
        >
          <LineChart />
        </Grid>

        <Grid
          className='mtb_10'
          item
          xs={12}
          lg={4}
        >
          <PolarChart />
        </Grid>

        {/* Row 3: User stats box */}
        {
        // Display all usersStatBox
        usersStatBox.map(({ percentage, userType, userQuantity }) => (
          <Grid
            item
            xs={12}
            lg={4}
            className='mtb_10'
          >
            <UsersStatBox
              percentage={percentage}
              userType={userType}
              userQuantity={userQuantity}
            />
          </Grid>
        ))}

        {/* Row 4 */}
        {/* Left column: Best seller courses
            Right column: Highly rated courses */}
        <Grid
          className='mtb_10'
          item
          xs={12}
          lg={6}
        >
          <Box className='courses__container'>
            <Typography
              className='courses__title'
              variant='h6'
            >
              Best sellers
            </Typography>

            {courses.map(
              ({ image, title, author, studentQuantity, rating }) => (
                <Box>
                  <Divider />
                  <CourseBox
                    image={image}
                    title={title}
                    author={author}
                    studentQuantity={studentQuantity}
                    rating={rating}
                  />
                </Box>
              )
            )}
          </Box>
        </Grid>

        <Grid
          className='mtb_10'
          item
          xs={12}
          lg={6}
        >
          <Box className='courses__container'>
            <Typography
              className='courses__title'
              variant='h6'
            >
              Highly Rated content
            </Typography>

            {courses.map(
              ({ image, title, author, studentQuantity, rating }) => (
                <Box>
                  <Divider />
                  <CourseBox
                    image={image}
                    title={title}
                    author={author}
                    studentQuantity={studentQuantity}
                    rating={rating}
                  />
                </Box>
              )
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
