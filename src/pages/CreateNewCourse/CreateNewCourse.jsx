import React, { useState } from 'react';
import './CreateNewCourse.scss';
import { StepFive, StepFour, StepOne, StepThree, StepTwo } from './components/StepComponent/StepComponent';

export default function CreateNewCourse() {
    const [stepActive, setStepActive] = useState(1);
    const [isActiveNextFeature, setIsNextFeature] = useState(false);

    const handleClickNextAndPrevStep = (type) => {
        if (type === 'prev') {
            setStepActive(stepActive - 1);
        }

        if (type === 'next') {
            setStepActive(stepActive + 1);
        }
    };

    const handleConfirmData = () => {
        alert('test');
        console.log("Call API")
    }

    return (
        <div className="create-new-course-wp">
            <div className="header-create-new-course">
                <span>Step {stepActive} of 5</span>
                <button onClick={() => (window.location.href = '/')}>Exit</button>
                <div
                    style={{
                        width: `${
                            stepActive === 1
                                ? 20
                                : stepActive === 2
                                ? 40
                                : stepActive === 3
                                ? 60
                                : stepActive === 4
                                ? 80
                                : stepActive === 5
                                ? 100
                                : 0
                        }%`,
                    }}
                ></div>
            </div>
            <div className="py-5 content-render-step">
                {stepActive === 1 && <StepOne setIsNextFeature={setIsNextFeature} />}
                {stepActive === 2 && <StepTwo setIsNextFeature={setIsNextFeature} />}
                {stepActive === 3 && <StepThree setIsNextFeature={setIsNextFeature} />}
                {stepActive === 4 && <StepFour setIsNextFeature={setIsNextFeature} />}
                {stepActive === 5 && <StepFive setIsNextFeature={setIsNextFeature} />}
            </div>
            <div
                style={{
                    padding: '10px 20px',
                }}
                className={stepActive !== 1 ? 'navigate-ft' : 'navigate-ft first'}
            >
                {stepActive !== 1 && <button onClick={() => handleClickNextAndPrevStep('prev')}>Previous</button>}
                <button
                    className={isActiveNextFeature ? (stepActive === 5 ? 'confirm' : '') : 'disabled'}
                    onClick={() => {
                        if (isActiveNextFeature) {

                            if(stepActive  < 5) {
                                handleClickNextAndPrevStep('next');

                            }else{
                                handleConfirmData()
                            }
                            
                        }
                    }}
                >
                    {stepActive === 5 ? 'Confirm' : 'Next Feature'}
                </button>
            </div>
        </div>
    );
}
