//防抖hook
//防抖一个变量值的变化
//例子用法：
//const [searchTerm, setSearchTerm] = useState('');
//const debouncedTerm = useDebounce(searchTerm, 500);
import React from 'react';
import { useEffect, useState } from "react"
const useDebounce = (value: any, delay: number=300) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(()=>{
        const handler = setTimeout(() => {
            setDebouncedValue(value);//// 等 delay 毫秒后再真正更新 debouncedValue
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    },[value,delay])
    return debouncedValue; // 返回防抖后的值
}

export default useDebounce;