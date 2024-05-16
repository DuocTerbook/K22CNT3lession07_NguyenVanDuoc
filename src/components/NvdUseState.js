import React,{useState} from 'react'

export default function NvdUseState() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(10);
    // Mảng
    const [list, setlist] = useState([1,5]);
    // Hàm xử lý sự kiện "Thêm ngẫu nhiên"
    const nvdHandList = ()=>{
        // Sinh ngẫu nhiên một giá trị số
        let num = parseInt(Math.random()*100);
        // Cập nhật lại State: list
        setlist([
            ...list,
            num
        ])
        // Cách khác
        // let lst = list.push(num);
        // setlist(lst);
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 5)}> Click me </button>
            <hr/>
            <h3>List: {list.toString()}</h3>
            <button onClick={nvdHandList}>Thêm ngẫu nhiên</button>
        </div>
    )
}
