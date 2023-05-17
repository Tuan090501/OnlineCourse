import { useRef, useState } from 'react';
import Select from 'react-select';
import DeleteIcon from '@mui/icons-material/Delete';

const dataCoursesSelect = [
    { value: 'c1', label: 'Học HTML CSS Căn Bản Để Thực Chiến' },
    { value: 'c2', label: 'Học JS và JS Nâng Cao Cùng Với Tom' },
    { value: 'c3', label: 'Git Căn Bản Cho Người Mới Bắt Đầu' },
    { value: 'c4', label: 'TypeScript Không Khó - Học Cùng Với Chúng Tôi' },
];

export const StepOneEditCourse = () => {
    const [fileImage, setFileImage] = useState(null);
    const [fileVideo, setFileVideo] = useState(null);

    return (
        <div className="step-wp-edit-course">
            <div className="top-step">
                <h2>Trang thu thập thông tin khóa học</h2>
            </div>
            <p className="step-desc py-4">
                Tất cả Giảng viên có thể nhìn thấy của khóa học này phải hoàn thành hồ sơ của họ trước khi khóa học có
                thể được xuất bản. Điều này bao gồm tên và một bản tóm tắt ngắn về lý lịch của bạn.
            </p>
            <div className="step-content-edit-course-wp">
                <div className="item-step-edit mb-4">
                    <label className="d-block">
                        <strong>Nội dung khóa học</strong>
                    </label>
                    <span
                        style={{
                            fontSize: 14,
                        }}
                        className="ms-0 mb-2 mt-1 d-block"
                    >
                        (Nhìu hơn <strong>5 từ</strong>)
                    </span>
                    <input className="form-control" placeholder="Bạn hãy nhập tên khóa học của bạn..." />
                </div>
                <div className="item-step-edit mb-4">
                    <label className="d-block">
                        <strong>Mô tả khóa học</strong>
                    </label>
                    <span
                        style={{
                            fontSize: 14,
                        }}
                        className="ms-0 mb-2 mt-1 d-block"
                    >
                        (Nhìu hơn <strong>5 từ</strong>)
                    </span>
                    <textarea
                        style={{
                            minHeight: 200,
                        }}
                        className="form-control"
                        placeholder="Bạn hãy nhập tên khóa học của bạn..."
                    />
                </div>
                <div className="item-step-edit mb-3">
                    <label className="d-block">
                        <strong>Phân loại khóa học</strong>
                    </label>
                    <span
                        style={{
                            fontSize: 14,
                        }}
                        className="ms-0 mb-2 mt-1 d-block"
                    >
                        (Nhìu hơn <strong>5 từ</strong>)
                    </span>
                    <Select placeholder="Vui lòng chọn category cho khóa học của bạn" options={dataCoursesSelect} />
                </div>
                <div className="item-step-edit mb-3">
                    <label className="d-block">
                        <strong>Danh mục con</strong>
                    </label>
                    <span
                        style={{
                            fontSize: 14,
                        }}
                        className="ms-0 mb-2 mt-1 d-block"
                    >
                        (More than <strong>5 words</strong>)
                    </span>
                    <Select placeholder="Vui lòng chọn danh mục con cho khóa học của bạn" options={dataCoursesSelect} />
                </div>
                <div className="mt-3 mb-2">
                    <button className="btn btn-danger d-block ms-auto">Lưu và thay đổi</button>
                </div>
                <div className="content-render-confirm">
                    <div className="row item">
                        <label className="text-left d-block">Ảnh của khóa học</label>
                        <div className="col-4">
                            <img
                                src={
                                    fileImage
                                        ? URL.createObjectURL(fileImage)
                                        : 'https://hinhanhdephd.com/wp-content/uploads/2015/12/hinh-anh-dep-girl-xinh-hinh-nen-dep-gai-xinh.jpg'
                                }
                                alt=""
                            />
                        </div>
                        <div className="col-8">
                            <p>
                                Tải lên hình ảnh khóa học của bạn ở đây. Ảnh phải đáp ứng các tiêu chuẩn chất lượng hình
                                ảnh để được chấp nhận{' '}
                            </p>
                            <input onChange={(e) => setFileImage(e.target.files[0])} type="file" />
                            <button className="btn btn-danger d-block mt-3">Save change</button>
                        </div>
                    </div>
                    <div className="row item">
                        <label className="text-left d-block">Video của khóa học</label>
                        <div className="col-4">
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
                        <div className="col-8">
                            <p>
                                Tải lên hình ảnh khóa học của bạn ở đây. Ảnh phải đáp ứng các tiêu chuẩn chất lượng hình
                                ảnh để được chấp nhận{' '}
                            </p>
                            <input onChange={(e) => setFileVideo(e.target.files[0])} type="file" />
                            <button className="btn btn-danger d-block mt-3">Lưu và thay đổi</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const StepTwoEditCourse = () => {
    const [CountOne, setCountOne] = useState([
        {
            school: (
                <div className="school-course">
                    <input
                        name="school-1"
                        className="form-control"
                        placeholder="Bạn hãy nhập tên khóa học của bạn 1..."
                    />
                    <span>
                        <DeleteIcon />
                    </span>
                </div>
            ),
        },
        {
            school: (
                <div className="school-course">
                    <input
                        name="school-2"
                        className="form-control"
                        placeholder="Bạn hãy nhập tên khóa học của bạn 2 ..."
                    />
                    <span>
                        <DeleteIcon />
                    </span>
                </div>
            ),
        },
        {
            school: (
                <div className="school-course">
                    <input
                        name="school-3"
                        className="form-control"
                        placeholder="Bạn hãy nhập tên khóa học của bạn 3..."
                    />
                    <span>
                        <DeleteIcon />
                    </span>
                </div>
            ),
        },
        {
            school: (
                <div className="school-course">
                    <input
                        name="school-4"
                        className="form-control"
                        placeholder="Bạn hãy nhập tên khóa học của bạn 4..."
                    />
                    <span>
                        <DeleteIcon />
                    </span>
                </div>
            ),
        },
    ]);

    const [CountTwo, setCountTwo] = useState([
        {
            school: (
                <div className="school-course">
                    <input
                        name="school-1"
                        className="form-control"
                        placeholder="Bạn hãy nhập yêu cầu của thứ 1 của bạn"
                    />
                    <span>
                        <DeleteIcon />
                    </span>
                </div>
            ),
        },
    ]);

    const handleClickSchool = (ref = {}, e, index) => {
        const elementRef = ref.current;

        if (elementRef) {
            if (e.target.closest('span')) {
                const dataNew = CountOne;
                dataNew.splice(index, 1); // 2nd parameter means remove one item only
                setCountOne([...dataNew]);
            }
        }
    };

    const handleClickRequirement = (ref = {}, e, index) => {
        const elementRef = ref.current;

        if (elementRef) {
            if (e.target.closest('span')) {
                const dataNew = CountTwo;
                dataNew.splice(index, 1); // 2nd parameter means remove one item only
                setCountTwo([...dataNew]);
            }
        }
    };

    const handleAddMore = () => {
        const lengthCountOne = CountOne.length;

        setCountOne((prev) => [
            ...prev,
            {
                school: (
                    <div className="school-course">
                        <input
                            name={`school-${lengthCountOne - 1}`}
                            className="form-control"
                            placeholder={`Bạn hãy nhập tên khóa học của bạn ${lengthCountOne + 1}...`}
                        />
                        <span>
                            <DeleteIcon />
                        </span>
                    </div>
                ),
            },
        ]);
    };

    const handleAddMoreRequirement = () => {
        const lengthCountTwo = CountTwo.length;

        setCountTwo((prev) => [
            ...prev,
            {
                school: (
                    <div className="school-course">
                        <input
                            name={`school-${lengthCountTwo - 1}`}
                            className="form-control"
                            placeholder={`Hãy nhập yêu cầu thứ ${lengthCountTwo + 1} của bạn ...`}
                        />
                        <span>
                            <DeleteIcon />
                        </span>
                    </div>
                ),
            },
        ]);
    };

    return (
        <div className="step-wp-edit-course">
            <div className="top-step">
                <h2>Đối tượng học viên</h2>
            </div>
            <p className="step-desc py-4">
                Các mô tả sau đây sẽ hiển thị công khai trên Landing page của khóa học và sẽ có tác động trực tiếp đến
                hiệu suất của bạn. Những mô tả này sẽ giúp học viên quyết định xem khóa học của bạn có phù hợp với họ
                không.
            </p>
            <div className="step-content-edit-course-wp">
                <div className="item-step-edit mb-4">
                    <label className="d-block">
                        <strong>Học viên sẽ học gì trong khóa học?</strong>
                    </label>
                    <span
                        style={{
                            fontSize: 14,
                        }}
                        className="ms-0 mb-2 mt-1 d-block"
                    >
                        Bạn vui lòng nhập <strong>4 mục tiêu và đầu ra của khóa học</strong> mà người học có thể mong
                        đợi đạt được sau khi hoàn thành khóa học.
                    </span>
                    {CountOne &&
                        CountOne.length > 0 &&
                        CountOne.map((item, index) => {
                            return (
                                <SchoolComponent key={index} index={index} onClick={handleClickSchool}>
                                    {item.school}
                                </SchoolComponent>
                            );
                        })}
                    <span
                        style={{
                            cursor: 'pointer',
                        }}
                        onClick={() => handleAddMore()}
                    >
                        + Thêm mục tiêu
                    </span>
                    <button className="btn btn-danger d-block ms-auto">Lưu và thay đổi</button>
                </div>
                <div className="item-step-edit mb-4">
                    <label className="d-block">
                        <strong>Yêu cầu hoặc điều kiện tiên quyết để tham gia khóa học là gì?</strong>
                    </label>
                    <span
                        style={{
                            fontSize: 14,
                        }}
                        className="ms-0 mb-2 mt-1 d-block"
                    >
                        Liệt kê các kỹ năng, kinh nghiệm, công cụ hoặc thiết bị cần thiết mà người học nên có trước khi
                        tham gia khóa học của bạn. Nếu không có yêu cầu, hãy sử dụng không gian này như một cơ hội để
                        tăng chất lượng cho người mới bắt đầu.
                    </span>
                    {CountTwo &&
                        CountTwo.length > 0 &&
                        CountTwo.map((item, index) => {
                            return (
                                <SchoolComponent key={index} index={index} onClick={handleClickRequirement}>
                                    {item.school}
                                </SchoolComponent>
                            );
                        })}
                    <span
                        style={{
                            cursor: 'pointer',
                        }}
                        onClick={() => handleAddMoreRequirement()}
                    >
                        + Add điều kiện của khóa học
                    </span>
                </div>
                <div className="mb-2">
                    <button className="btn btn-danger d-block ms-auto">Lưu và thay đổi</button>
                </div>
            </div>
        </div>
    );
};

export const StepThreeEditCourse = () => {
    return (
        <div
            className="step-wp-edit-course"
            style={{
                marginBottom: 20,
            }}
        >
            <div className="top-step">
                <h2>Chương trình của khóa học</h2>
            </div>
            <p className="step-desc py-4">
                Bắt đầu kết hợp khóa học của bạn bằng cách tạo ra <strong>phần, bài giảng</strong> và{' '}
                <strong>thực hành</strong> (câu đố, bài tập mã hóa và bài tập).
            </p>
            <div className="step-content-edit-course-wp">
                <span className="curriculum">+ Add new section</span>
            </div>
        </div>
    );
};

export const StepFourEditCourse = () => {
    return (
        <div className="step-wp-edit-course">
            <div className="top-step">
                <h2>Giá cả</h2>
            </div>
            <p className="step-desc py-4">
                Vui lòng chọn mức giá cho khóa học của bạn bên dưới và nhấp vào <strong>'Lưu và thay đổi'</strong>.{' '}
                <br />
                Vui lòng tính toán đơn đăng ký Giảng viên cao cấp tại đây để đặt giá cho khóa học của bạn. Bạn có thể
                đặt giá cho khóa học của mình ngay khi phương thức thanh toán được liên kết của bạn được chấp thuận.
                <br />
            </p>
            <div className="step-content-edit-course-wp">
                <div className="item-step-edit mb-4">
                    <label className="d-block">
                        <strong>Giá cả * VND</strong>
                    </label>
                    <span
                        style={{
                            fontSize: 14,
                        }}
                        className="ms-0 mb-2 mt-1 d-block"
                    >
                        (Nhìu hơn <strong>5 chữ</strong>)
                    </span>
                    <input className="form-control" placeholder="e.g 200.000VND" />
                    <div className="mb-2 mt-2">
                        <button className="btn btn-danger d-block ms-auto">Lưu và thay đổi</button>
                    </div>
                </div>
                <div className="item-step-edit mb-4">
                    <label className="d-block">
                        <strong> Giá trị khuyến mãi</strong>
                    </label>
                    <span
                        style={{
                            fontSize: 14,
                        }}
                        className="ms-0 mb-2 mt-1 d-block"
                    >
                        (Nhìu hơn <strong>5 chữ số</strong>)
                    </span>
                    <input className="form-control" placeholder="e.g 200.000VND" />
                    <div className="mb-2 mt-2">
                        <button className="btn btn-danger d-block ms-auto">Save changes</button>
                    </div>
                </div>
                <div className="item-step-edit mb-4">
                    <label className="d-block">
                        <strong>Giá tiền * VND</strong>
                    </label>
                    <span
                        style={{
                            fontSize: 14,
                        }}
                        className="ms-0 mb-2 mt-1 d-block"
                    >
                        (Nhìu hơn <strong>5 chữ số</strong>)
                    </span>
                    <div className="wp-input-edit">
                        <input className="form-control" placeholder="e.g 200.000VND" />
                        <input type="date" className="form-control" placeholder="e.g date" />
                        <span className="mx-2">to</span>
                        <input type="date" className="form-control" placeholder="e.g date" />
                    </div>
                    <div className="mb-2 mt-2">
                        <button className="btn btn-danger d-block ms-auto">Lưu và thay đổi</button>
                    </div>
                </div>
                <div className="item-step-edit mb-4">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/2560px-PayPal_logo.svg.png"
                        alt=""
                        className="paypal-logo"
                    />
                    <label className="d-block">
                        <strong>Thanh toán</strong>
                    </label>
                    <span
                        style={{
                            fontSize: 14,
                        }}
                        className="ms-0 mb-2 mt-1 d-block"
                    >
                        (Nhìu hơn <strong>5 chữ số</strong>)
                    </span>
                    <input className="form-control" placeholder="e.g 200.000VND" />
                    <div className="mb-2 mt-2">
                        <button className="btn btn-danger d-block ms-auto">Lưu và thay đổi</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const SchoolComponent = ({ children, onClick = () => {}, index }) => {
    const ref = useRef(null);

    return (
        <div ref={ref} onClick={(e) => onClick(ref, e, index)}>
            {children}
        </div>
    );
};
