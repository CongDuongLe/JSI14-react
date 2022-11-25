Nội dung buổi 4 :
1, Tìm hiểu về Props ( property ) trong react
2, tìm hiểu về trạng thái của ứng dụng và hook useState để cập nhật mới trạng thái cho ứng dụng



// Props 
- Props hay còn gọi là properties là một thuộc tính của component trong react
- Props có thể chứa bất kì các kiểu dữ liệu nào của JS
- Props thường được truyền từ component cha sang component con dưới dạng propsName={value}
- Đối với trường hợp truyền từ componet con sang cha thì cần viết 1 hàm callback để lấy lại giá trị của props
- Props có tên là không thay đổi, chỉ thay đổi giá trị nhận được từ component cha truyền sang component con

* lưu ý : + tên props viết ở cpn cha === với tên props tại cpn con
          + tên props không chứa tiếng việt và không chứa kí tự đặc biệt


//state :
- State là trạng thái của ứng dụng
- State là một object có sẵn trong react
- State có thể chứa tất cả các kiểu dữ liệu của JS
- State có thể được cập nhật lại giá trị trực tiếp mà không cần thông qua cpn
cha như props

- Quản lí State bằng hook useState được import từ React

- useState sẽ có cú pháp const [stateName, setStateName] = useState(giá trị ban đầu của state)

- với stateName là tên của state
- setStateName là hàm cập nhật lại giá trị của state
- giá trị ban đầu của state có thể là bất kì giá trị nào của JS


// mẹo : khi có input là '15' mà muốn biến thành kiểu number : thêm dấu + vào trc biến

// ví dụ : const string ='100'

// thành number = +string ( number có giá trị là 100)


// props và state là 2 thành phần cơ bản nhất của react ( cần về nhà tìm hiểu thật kĩ để ngấm được khái niệm và cách dùng)


