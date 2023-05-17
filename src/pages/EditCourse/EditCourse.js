import React, { useEffect, useState } from 'react';
import './EditCourse.scss';
import { useParams } from 'react-router-dom';
import { StepFourEditCourse, StepOneEditCourse, StepThreeEditCourse, StepTwoEditCourse } from './components/Step';

export default function EditCourse() {
    const params = useParams();
    // state
    const [stepActive, setStepActive] = useState(1);

    // call api khi id thay doi
    useEffect(() => {
        console.log('check id :', params.id);
    }, [params?.id]);

    return (
        <div className="edit-my-course-wp">
            <div className="header-edit-my-course">
                <button className="btn btn-danger px-4 py-2">Xem các thay đổi</button>
                <div className="wp-item-header-edit-my-course">
                    <span onClick={() => setStepActive(1)} className={stepActive === 1 && 'active'}>
                        Course landing page
                    </span>
                    <span className={stepActive === 2 && 'active'} onClick={() => setStepActive(2)}>
                        Đối tượng học viên
                    </span>
                    <span className={stepActive === 3 && 'active'} onClick={() => setStepActive(3)}>
                        Chương trình giảng dạy
                    </span>
                    <span className={stepActive === 4 && 'active'} onClick={() => setStepActive(4)}>
                        Giá cả
                    </span>
                    <div
                        style={{
                            left:
                                stepActive === 1
                                    ? '0%'
                                    : stepActive === 2
                                    ? '25%'
                                    : stepActive === 3
                                    ? '50%'
                                    : stepActive === 4
                                    ? '75%'
                                    : '0%',
                        }}
                        className="full-border-bottom"
                    ></div>
                </div>
            </div>
            <div className="content-wp-edit">
                {stepActive === 1 && <StepOneEditCourse />}
                {stepActive === 2 && <StepTwoEditCourse />}
                {stepActive === 3 && <StepThreeEditCourse />}
                {stepActive === 4 && <StepFourEditCourse />}
            </div>
        </div>
    );
}
