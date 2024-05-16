import React, { createContext, useState } from 'react'
import NvdUseContext1 from './NvdUseContext1';
export const ThemeContext = createContext(); // Tạo ngữ cảnh để chia sẻ

export default function NvdUseContext() {
    // State
    const [theme, setTheme] = useState('red');
    // Hàm thay đổi theme
    const nvdHandChange = ()=>{
        setTheme(theme==='red'?'blue':'red');
    }
    return (
        <ThemeContext.Provider value={theme}>
            <div className='alert'>
                <h2>Demo useContext</h2>
                <NvdUseContext1 />
                <button onClick={nvdHandChange}>Change bgColor</button>
            </div>
        </ThemeContext.Provider>
    )
}
