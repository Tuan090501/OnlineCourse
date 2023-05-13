import { useEffect, useState } from "react";
import axios from "axios"

const Data = ()=>{
    const [course, setCourse] = useState([])
    useEffect(()=>{
        const fectchCourse = async () => {
            const {data} = await axios.get(`http://localhost:8000/api/course`)
            setCourse(data.data)
            
        }
        fectchCourse()
    },[])
    return {course}
}

// const Data = [
//     {
//       id: 1,
//       title: 'Kiến Thức Nhập Môn IT',
//       image: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
//       category: 'frontend',
//       price: {
//         oldPrice: '2.499.000đ',
//         mainPrice: '1.299.000đ',
//       },
//     },
//     {
//       id: 2,
//       title: 'Lập Trình C++ cơ bản, nâng cao',
//       image: 'https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png',
//       category: 'frontend',
//       price: {
//         oldPrice: '3.999.000đ',
//         mainPrice: '2.499.000đ',
//       },
//     },
//     {
//       id: 3,
//       title: 'HTML CSS từ Zero đến Hero',
//       image: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
//       category: 'frontend',
//       price: {
//         oldPrice: '3.999.000đ',
//         mainPrice: '2.499.000đ',
//       },
//     },
//     {
//       id: 4,
//       title: 'Responsive Với Grid System',
//       image: 'https://files.fullstack.edu.vn/f8-prod/courses/3.png',
//       category: 'backend',
//       price: {
//         oldPrice: '3.999.000đ',
//         mainPrice: '2.499.000đ',
//       },
//     },
//     {
//       id: 5,
//       title: 'Lập trình JavaScript Cơ Bản',
//       image: 'https://files.fullstack.edu.vn/f8-prod/courses/1.png',
//       category: 'backend',
//       price: {
//         oldPrice: '3.999.000đ',
//         mainPrice: '2.499.000đ',
//       },
//     },
//     {
//       id: 6,
//       title: 'Lập trình JavaScript Nâng Cao',
//       image: 'https://files.fullstack.edu.vn/f8-prod/courses/12.png',
//       category: 'backend',
//       price: {
//         oldPrice: '3.999.000đ',
//         mainPrice: '2.499.000đ',
//       },
//     },
//     {
//       id: 7,
//       title: 'Làm việc với Terminal & Ubuntu',
//       image: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
//       category: 'backend',
//       price: {
//         oldPrice: '3.999.000đ',
//         mainPrice: '2.499.000đ',
//       },
//     },
//     {
//       id: 8,
//       title: 'Xây Dựng Website Với ReactJS',
//       image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
//       category: 'backend',
//       price: {
//         oldPrice: '3.999.000đ',
//         mainPrice: '2.499.000đ',
//       },
//     },
//     {
//       id: 9,
//       title: 'NodeJS & ExpressJS',
//       image: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
//       category: 'backend',
//       price: {
//         oldPrice: '3.999.000đ',
//         mainPrice: '2.499.000đ',
//       },
//     },
//     {
//       id: 10,
//       title: 'App "Đừng Chạm Tay Lên Mặt"',
//       image: 'https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png',
//       category: 'backend',
//       price: {
//         oldPrice: '3.999.000đ',
//         mainPrice: '2.499.000đ',
//       },
//     },
    
//   ];
  export default Data;