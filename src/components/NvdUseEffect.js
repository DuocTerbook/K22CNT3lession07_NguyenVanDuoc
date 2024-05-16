import React, { useEffect, useState } from 'react'

export default function NvdUseEffect() {
    // State: count
    const [count, setCount] = useState(0);
    // Hàm xử lý sự kiện click me
    const nvdHandClick = ()=>{
        setCount(prev => prev + 1);
    }
    // Sử dụng hàm useEffect để cập nhật lại title; có một tham số
    useEffect(()=>{
        document.title= `Nguyễn Văn Được: You clicked ${count} time`
        console.log(`You clicked ${count} time`);
    });
    // useEffect: Tham số thứ 2 là mảng rỗng
    useEffect(()=>{
        console.log("Chạy lần đầu tiên - một lần");
    },[])
    // [deps]
    useEffect(()=>{
        console.log(`useEffect count click: `,count);
    },[count])
    return (
        <div>
            <h2>Demo - useEffect: You clicked {count} times</h2>
            <button onClick={nvdHandClick}>
                Click me
            </button>
        </div>
    )
}
