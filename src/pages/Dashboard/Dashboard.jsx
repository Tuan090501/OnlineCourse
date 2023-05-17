import './Dashboard.scss';
import Grid from '@mui/material/Unstable_Grid2';
import PersonIcon from '@mui/icons-material/Person';
import LineChart from '../../components/LineChart';
import PolarChart from '../../components/PolarChart';
import StatsBox from '../../components/StatsBox/StatsBox';
import Sidebar from '../../components/Sidebar/Sidebar';
// import UsersStatBox from "../../components/UsersStatBox/UsersStatBox"
import CourseBox from '../../components/CourseBox/CourseBox';
import { Box, Divider, Input, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarRateIcon from '@mui/icons-material/StarRate';

const month1Data = [10, 20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65];


const statsBox = [
    {
        title: 'Course',
        quantity: 4,
        icon: <BookIcon />,
        backgroundImageColor: 'linear-gradient(45deg,#2929a9,#0061ff)',
    },
    {
        title: 'Revenue',
        quantity: '0',
        icon: <AttachMoneyIcon />,
        backgroundImageColor: 'linear-gradient(45deg,#e93e0b,#f69235)',
    },
    {
        title: 'Student',
        quantity: '2',
        icon: <PersonIcon />,
        backgroundImageColor: 'linear-gradient(45deg,#28b648,#108c0f)',
    },
];

// select and search khoá học data pendding backend
const dataCoursesSelect = [
    { value: 'c1', label: 'Học HTML CSS Căn Bản Để Thực Chiến' },
    { value: 'c2', label: 'Học JS và JS Nâng Cao Cùng Với Tom' },
    { value: 'c3', label: 'Git Căn Bản Cho Người Mới Bắt Đầu' },
    { value: 'c4', label: 'TypeScript Không Khó - Học Cùng Với Chúng Tôi' },
];

// data demo user
const dataUsersDemo = [
    {
        id: 1,
        avatar: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        fullName: 'Alibaba',
        email: 'cuongphan2k1@gmail.com',
        price: '$10',
        boughtAt: '2017-05-2',
    },
    {
        id: 2,
        avatar: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        fullName: 'Nguyen Van Tuan',
        email: 'nguyenvantuan123',
        price: '$10',
        boughtAt: '2017-05-2',
    },
];

const lineChart = [{



}];

function Dashboard() {
    const [valueSelectCourse, setValueSelectCourse] = useState(null);

    const handleChangeReactSelect = (e) => {
        setValueSelectCourse(e.value);
    };

    useEffect(() => {
        console.log(valueSelectCourse);

        // handle khi valueSelectCourse thay doi
    }, [valueSelectCourse]);

    // handle action
    const handleClickHandleAction = (id) => {
        alert('Bạn vừa click vào id ' + id);
    };

    // handle pagination
    const handlePagination = (type) => {
        alert('Bạn đang click pagination ' + type);
    };

    return (
        <div className="DashBoard_wrapper">
            {/* <Sidebar /> */}
            <Box className="dashboard-container">
                <Grid className="dashboard" container spacing={2}>
                    {/* Row 1: Stat Box */}
                    {statsBox.map(({ title, quantity, icon, backgroundImageColor }, index) => (
                        <Grid key={index} className="mtb_10" item xs={12} sm={6} lg={4}>
                            <StatsBox
                                title={title}
                                quantity={quantity}
                                icon={icon}
                                backgroundImageColor={backgroundImageColor}
                            />
                        </Grid>
                    ))}

                    {/* code  render view select and search course */}
                    <Grid className="mtb_10" item xs={12} lg={12}>
                        <div
                            style={{
                                width: '40%',
                            }}
                        >
                            <Select
                                onChange={handleChangeReactSelect}
                                placeholder="Vui lòng chọn khóa học của bạn"
                                options={dataCoursesSelect}
                            />
                        </div>
                    </Grid>

                    {/* Row 2: Chart */}
                    <Grid className="mtb_10" item xs={12} lg={6}>
                        <LineChart month1={month1Data} />
                    </Grid>

                    <Grid className="mtb_10" item xs={12} lg={6}>
                    <LineChart month1={month1Data} />
                    </Grid>
                </Grid>
                <Grid xs={12} lg={12}>
                    <div className="search">
                        <SearchIcon className="icon-cus" />
                        <input placeholder="Tìm kiếm" />
                    </div>
                    <div className="table-content-render">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" className="col-1">
                                        Avatar
                                    </th>
                                    <th scope="col" className="css-pausedo col-4">
                                        Họ và tên
                                    </th>
                                    <th scope="col" className="css-pausedo col-4">
                                        Email
                                    </th>
                                    <th scope="col" className="css-pausedo col-1">
                                        Giá Tiền
                                    </th>
                                    <th scope="col" className="css-pausedo col-1">
                                        Ngày mua
                                    </th>
                                    <th scope="col" className="col-1 text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="table-body-content-wp-render">
                                {dataUsersDemo &&
                                    dataUsersDemo.length > 0 &&
                                    dataUsersDemo.map((item) => (
                                        <tr key={item.id}>
                                            <th>
                                                <img src={item.avatar} alt="Hinh Anh" />
                                            </th>
                                            <td>{item.fullName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.price}</td>
                                            <td>{item.boughtAt}</td>
                                            <td className="text-center">
                                                <button onClick={() => handleClickHandleAction(item.id)}>
                                                    <EmailIcon />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            <span>Row per page: 5</span>
                            <span>1-1 of 1</span>
                            <span>
                                <button onClick={() => handlePagination('prev page')}>
                                    <ArrowBackIosIcon />
                                </button>
                                <button onClick={() => handlePagination('next page')}>
                                    <ArrowForwardIosIcon />
                                </button>
                            </span>
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} lg={12}>
                    <div className="student-review">
                        <h3 className="py-3">Student review</h3>
                        <div className="student-review-content">
                            <div className="review-item">
                                <img
                                    src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="Hinh anh"
                                />
                                <div>
                                    <p>
                                        <strong>Tst</strong>
                                        <span className="mx-2">07/12/2021 - 3 hours ago</span>
                                    </p>
                                    <p>
                                        Mã trên bị lỗi vì không định nghĩa đúng tên prop của component. Khi định nghĩa
                                        kiểu cho prop children trong interface childrenBaseLayOut, nó chỉ định rõ kiểu
                                        dữ liệu cho prop đó, nhưng không định nghĩa tên của prop. Do đó, khi sử dụng nó
                                        trong component BaseLayOut, bạn cần phải sử dụng lại tên prop đúng với tên định
                                        nghĩa trong interface childrenBaseLayOut.
                                    </p>
                                </div>
                                <div>
                                    <StarRateIcon />
                                    <StarRateIcon />
                                    <StarRateIcon />
                                    <StarRateIcon />
                                    <StarRateIcon />
                                </div>
                            </div>
                            <div className="review-item">
                                <img
                                    src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="Hinh anh"
                                />
                                <div>
                                    <p>
                                        <strong>Tst</strong>
                                        <span className="mx-2">07/12/2021 - 3 hours ago</span>
                                    </p>
                                    <p>
                                        Mã trên bị lỗi vì không định nghĩa đúng tên prop của component. Khi định nghĩa
                                        kiểu cho prop children trong interface childrenBaseLayOut, nó chỉ định rõ kiểu
                                        dữ liệu cho prop đó, nhưng không định nghĩa tên của prop. Do đó, khi sử dụng nó
                                        trong component BaseLayOut, bạn cần phải sử dụng lại tên prop đúng với tên định
                                        nghĩa trong interface childrenBaseLayOut.
                                    </p>
                                </div>
                                <div>
                                    <StarRateIcon />
                                    <StarRateIcon />
                                    <StarRateIcon />
                                    <StarRateIcon />
                                    <StarRateIcon />
                                </div>
                            </div>
                            <div className="review-item">
                                <img
                                    src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="Hinh anh"
                                />
                                <div>
                                    <p>
                                        <strong>Tst</strong>
                                        <span className="mx-2">07/12/2021 - 3 hours ago</span>
                                    </p>
                                    <p>
                                        Mã trên bị lỗi vì không định nghĩa đúng tên prop của component. Khi định nghĩa
                                        kiểu cho prop children trong interface childrenBaseLayOut, nó chỉ định rõ kiểu
                                        dữ liệu cho prop đó, nhưng không định nghĩa tên của prop. Do đó, khi sử dụng nó
                                        trong component BaseLayOut, bạn cần phải sử dụng lại tên prop đúng với tên định
                                        nghĩa trong interface childrenBaseLayOut.
                                    </p>
                                </div>
                                <div>
                                    <StarRateIcon />
                                    <StarRateIcon />
                                    <StarRateIcon />
                                    <StarRateIcon />
                                    <StarRateIcon />
                                </div>
                            </div>
                            <div className="review-item">
                                <img
                                    src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="Hinh anh"
                                />
                                <div>
                                    <p>
                                        <strong>Tst</strong>
                                        <span className="mx-2">07/12/2021 - 3 hours ago</span>
                                    </p>
                                    <p>
                                        Mã trên bị lỗi vì không định nghĩa đúng tên prop của component. Khi định nghĩa
                                        kiểu cho prop children trong interface childrenBaseLayOut, nó chỉ định rõ kiểu
                                        dữ liệu cho prop đó, nhưng không định nghĩa tên của prop. Do đó, khi sử dụng nó
                                        trong component BaseLayOut, bạn cần phải sử dụng lại tên prop đúng với tên định
                                        nghĩa trong interface childrenBaseLayOut.
                                    </p>
                                </div>
                                <div>
                                    <StarRateIcon />
                                    <StarRateIcon />
                                    <StarRateIcon />
                                    <StarRateIcon />
                                    <StarRateIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Box>
        </div>
    );
}

export default Dashboard;
