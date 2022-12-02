// cách dùng đối  với state 


// đề bài : tạo 1 state dùng để chứa các thông tin của 1 user bao gồm các trường là : name, age, phone, class
// sau đó hiển thị các thông tin đó ra màn hình với giá trị mặc định là default + stateName




// bài mơi : useEffect() 
useEffect là 1 hook có sẵn trong react dùng để thay thế cho 3 lifecycle : componentDidMount, componentDidUpdate, componentWillUnmount

useEffect dùng để quản lí việc thay đổi trạng thái xung quanh ứng dụng mà k cần phải có thao tác click, kéo thả của user

useEffect thường dùng để gọi API , và ứng dụng useState để lưu lại giá trị mà API trả về 

- giống với useState, thì useEffect cũng là 1 hàm, và cũng được import từ react


// các dạng của useEffect()


syntax : useEffect(
    () => { logic}, [dependency]
)


// useEffect có 3 dạng chính : 
+ dạng 1 : useEffect không có dependency 
// syntax : useEffect(
    () => { logic}
)
- dạng 1 của useEffect sẽ chạy liên tục ( tính chất loop)


+ dạng 2 : useEffect có dependency

 - trường hợp 1 : dependency là 1 mảng rỗng []
// syntax : useEffect(
    () => { logic}, []
)

 * khi dep là mảng rỗng thì useEffect sẽ chạy 1 lần duy nhất rồi không chạy nữa, phải reload lại thì mới chạy tiếp


 - trường hợp 2 : dependency là 1 mảng có giá trị

// syntax : useEffect(
    () => { logic}, [dependency1, dependency2, ...]

* useEffect sẽ chạy lại mỗi khi dep có sự thay đổi