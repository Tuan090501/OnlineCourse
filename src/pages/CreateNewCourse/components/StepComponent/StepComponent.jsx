import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const dataDemo = [
    {
        id: 0,
        icon: <OndemandVideoIcon />,
        label: 'Khóa học',
        desc: '  Tạo học tập với kinh nghiệm phong phú sẵn có với sự trợ giúp của các bài giảng, các quiz và các bài tập coding, ...',
    },
    {
        id: 1,
        icon: <DesktopWindowsIcon />,
        label: 'Luyện tập cho các kỳ thi',
        desc: '  Giúp học sinh chuẩn bị cho các chứng chỉ trong các kỳ thi',
    },
];

const dataDemoSelectCategory = [
    { value: 'c1', label: 'Học HTML CSS Căn Bản Để Thực Chiến' },
    { value: 'c2', label: 'Học JS và JS Nâng Cao Cùng Với Tom' },
    { value: 'c3', label: 'Git Căn Bản Cho Người Mới Bắt Đầu' },
    { value: 'c4', label: 'TypeScript Không Khó - Học Cùng Với Chúng Tôi' },
];

export const StepOne = ({ setIsNextFeature }) => {
    const [dataActive, setDataActive] = useState(null);

    return (
        <div>
            <h1 className="text-center">Trước tiên, hãy tìm hiểu loại khóa học bạn đang thực hiện</h1>
            <div className="content-step text-center">
                {dataDemo &&
                    dataDemo.length > 0 &&
                    dataDemo.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={dataActive === index ? 'step-item active' : 'step-item'}
                                onClick={() => {
                                    setIsNextFeature(true);
                                    setDataActive(item.id);
                                }}
                            >
                                <span>
                                    {item.icon}
                                </span>
                                <p>
                                    <strong>{item.label}</strong>
                                </p>
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export const StepTwo = ({ setIsNextFeature }) => {
    // two while binding
    const [nameCourse, setNameCourse] = useState('');
    console.log(nameCourse)
    useEffect(() => {
        if (nameCourse.length > 0) {
            setIsNextFeature(true);
        } else {
            setIsNextFeature(false);
        }
    }, [nameCourse, setIsNextFeature]);

    return (
        <div>
            <h1 className="text-center">Nhập tiêu đề của khóa học mà bạn muốn tạo</h1>
            <div
                className="content-step text-center"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <input
                    style={{
                        width: 600,
                    }}
                    value={nameCourse}
                    onChange={(e) => {
                        setNameCourse(e.target.value);
                    }}
                    className="form-control"
                    placeholder="Bạn hãy nhập tên khóa học của bạn ...."
                />
            </div>
        </div>
    );
};

export const StepThree = ({ setIsNextFeature }) => {
    // two while binding
    // two while binding
    const [descCourse, setDescCourse] = useState('');
    useEffect(() => {
        if (descCourse.length > 0) {
            setIsNextFeature(true);
        } else {
            setIsNextFeature(false);
        }
    }, [descCourse, setIsNextFeature]);

    return (
        <div>
            <h1 className="text-center">Mô tả khóa học</h1>
            <div
                className="content-step text-center"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <textarea
                    style={{
                        width: 600,
                        minHeight: 300,
                    }}
                    value={descCourse}
                    onChange={(e) => {
                        setDescCourse(e.target.value);
                    }}
                    className="form-control"
                    placeholder="Bạn hãy nhập mô tả khóa học của bạn ...."
                />
            </div>
        </div>
    );
};

export const StepFour = ({ setIsNextFeature }) => {
    const [dataSelect, setDataSelect] = useState(null);

    useEffect(() => {
        if (dataSelect) {
            setIsNextFeature(true);
        } else {
            setIsNextFeature(false);
        }
    }, [dataSelect, setIsNextFeature]);

    return (
        <div>
            <h1 className="text-center">Thể loại khóa học nào mà bạn muốn chia sẻ</h1>
            <div
                className="content-step text-center"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Select
                    onChange={(e) => setDataSelect(e.value)}
                    placeholder="Chọn category khóa học của bạn..."
                    options={dataDemoSelectCategory}
                />
            </div>
        </div>
    );
};

export const StepFive = ({ setIsNextFeature }) => {
    const [fileImage, setFileImage] = useState(null);
    const [fileVideo, setFileVideo] = useState(null);

    useEffect(() => {
        if (fileImage && fileVideo && setIsNextFeature) {
            setIsNextFeature(true);
        } else {
            setIsNextFeature(false);
        }
    }, [fileImage, fileVideo, setIsNextFeature]);

    return (
        <div>
            <h1 className="text-center">Ảnh đại diện của khóa học</h1>
            <div className="content-render-confirm">
                <div className="row item">
                    <label className="text-left d-block">Course image</label>
                    <div className="col-6">
                        <img
                            src={
                                fileImage
                                    ? URL.createObjectURL(fileImage)
                                    : 'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg'
                            }
                            alt=""
                        />
                    </div>
                    <div className="col-6">
                        <p>
                            Upload your course image here. it must meet out image quality ...
                            <input onChange={(e) => setFileImage(e.target.files[0])} type="file" />
                        </p>
                    </div>
                </div>
                <div className="row item">
                    <label className="text-left d-block">Course video</label>
                    <div className="col-6">
                        {fileVideo ? (
                            <video src={URL.createObjectURL(fileVideo)} controls autoPlay loop />
                        ) : (
                            <img
                                src={
                                    'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg'
                                }
                                alt=""
                            />
                        )}
                    </div>
                    <div className="col-6">
                        <p>
                            Upload your course image here. it must meet out image quality ...
                            <input onChange={(e) => setFileVideo(e.target.files[0])} type="file" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
