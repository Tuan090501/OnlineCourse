import React from 'react'
import './roadmap.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import roadmapfe from '../../assets/images/roadmapFE.png'
import groupcard from '../../assets/images/group-cards.png'

const Roadmap = () => {
  return (
    <>
        <div className="App_withSidebar">
            <Sidebar />
            <div className="App_withSidebarContent">
                <section >
                    <div className="DefaultLayout_container">
                        <div className="DefaultLayout_container-top">
                            <h1 className="DefaultLayout_heading">Lộ trình học</h1>
                            <p>Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end"<br></br> bạn nên tập trung vào lộ trình "Front-end".</p>
                        </div>
                        <div className="container-body">
                            <div className="LearningPathsList_content">
                                <div className="LearningPathItem_wrapper">
                                    <div className="LearningPathItem_body">
                                        <div className="LearningPathItem_info">
                                            <h2 className="LearningPathItem_title">
                                                <a href="">Lộ trình học Front-end</a>
                                            </h2>
                                            <p className="LearningPathItem_desc">
                                                Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.
                                            </p>
                                        </div>
                                        <div className="LearningPathItem_thumb-wrap">
                                            <a href="" className="LearningPathItem_thumb-round">
                                                <img src={roadmapfe} alt="" className="LearningPathItem_thumb" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="LearningPathItem_cta">
                                        <div className="CircularProgressBar_pie-wrapper"></div>
                                    </div>
                                </div>

                                <div className="LearningPathItem_wrapper">
                                    <div className="LearningPathItem_body">
                                        <div className="LearningPathItem_info">
                                            <h2 className="LearningPathItem_title">
                                                <a href="">Lộ trình học Front-end</a>
                                            </h2>
                                            <p className="LearningPathItem_desc">
                                                Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.
                                            </p>
                                        </div>
                                        <div className="LearningPathItem_thumb-wrap">
                                            <a href="" className="LearningPathItem_thumb-round">
                                                <img src={roadmapfe} alt="" className="LearningPathItem_thumb" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="LearningPathItem_cta">
                                        <div className="CircularProgressBar_pie-wrapper"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="SuggestionBox_wrapper">
                                <div className="SuggestionBox_info">
                                    <h2>Tham gia cộng đồng học viên F8 trên Facebook</h2>
                                    <p>Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.</p>
                                    <a href="/" className="SuggestionBox_cta">Tham gia nhóm</a>
                                </div>
                                <div className="SuggestionBox_image">
                                    <img src={groupcard} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default Roadmap
