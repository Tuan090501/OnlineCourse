import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './MyCourses.scss';
import Courses from '../../components/Courses/Courses';
import { Grid } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';

export default function MyCourses() {
    return (
        <div className="myCourse_wrapper">
            {/* <Sidebar /> */}

            <div className="courses_wrapper">
                <div className="create_course_wrapper">
                    <Link to="/create-new-course" href="/" className="create_course">
                        <h3>Tạo khóa học</h3>
                    </Link>
                </div>

                <div className="search_">
                    <form action="/" className="search_form">
                        <div className="search_wrapper">
                            <div className="search_icon">
                                <SearchIcon />
                            </div>

                            <div className="search_input">
                                <input
                                    classname="input_wrapper"
                                    type="text"
                                    autocapitalize="none"
                                    autocorrect="off"
                                    spellCheck="false"
                                    placeholder="Tìm kiếm khóa học"
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="render-course">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Link to="/edit-my-course/1">
                                <Courses
                                    thumbnailCourse={
                                        'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg'
                                    }
                                    nameCourse={'CSS Essential Training'}
                                    subtitleCourses={
                                        'Cascading Style Sheets (CSS) is a stylesheet language that allows you to control the appearance of your webpages. In this hands-on course, Christina Truong demonstrates the concepts that form the foundation of CSS, explaining what you need to know to tweak existing CSS and write your own.'
                                    }
                                />
                            </Link>
                        </Grid>

                        <Grid item xs={6}>
                            <Link to="/edit-my-course/2">
                                <Courses
                                    thumbnailCourse={
                                        'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg'
                                    }
                                    nameCourse={'Succeeding in Web Development: Full Stack and Front End'}
                                    subtitleCourses={
                                        "Do you want to become a web developer? Nowadays, web development isn't one job. There is a range of technologies and career options to explore. The core responsibilities are split two ways—between front-end developers who specialize in websites and applications and back-end developers who work with servers and databases—but you can also become a full-stack developer who oversees all aspects of a project."
                                    }
                                />
                            </Link>
                        </Grid>

                        <Grid item xs={6}>
                            <Link to="/edit-my-course/3">
                                <Courses
                                    thumbnailCourse={
                                        'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg'
                                    }
                                    nameCourse={'User Experience for Web Design (2015)'}
                                    subtitleCourses={
                                        "A good user experience design will make visitors stay on your site. A bad one will make them go to someone else's. This class teaches you how to apply simple UX design principles to your site to make it behave in the way that users want and expect."
                                    }
                                />
                            </Link>
                        </Grid>

                        <Grid item xs={6}>
                            <Link to="/edit-my-course/4">
                                <Courses
                                    className="course-item"
                                    thumbnailCourse={
                                        'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg'
                                    }
                                    nameCourse={'HTML Essential Training'}
                                    subtitleCourses={
                                        'Hypertext Markup Language (HTML) is the foundation of website and web application development. It allows you to ensure that your content is understood by both segments of your audience: the people who watch, read, or listen to your content, and the computers that display it. In this course, learn how to craft excellent HTML with the pieces that HTML itself has to offer. Instructor Jen Simmons highlights all of the fundamental concepts you need to use HTML thoughtfully. She focuses on semantic markup: tagging content as what it is, and not just for formatting, convention, or convenience. This has far-reaching impact for those who consume the web differently; it ensures that when a screen reader or a system (like a search engine) consumes a page, it knows exactly what it contains and how to categorize that information.'
                                    }
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}
