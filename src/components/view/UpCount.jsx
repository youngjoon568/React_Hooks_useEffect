import React, { useEffect, useState } from 'react';

export default function UpCount() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");

    // 렌더링 될 때 마다 실행
    useEffect(() => {
        console.log("렌더링");
    });

    // count 렌더링
    useEffect(() => {
        console.log("count 변화");
    }, [count]);


    // name 렌더링
    useEffect(() => {
        console.log("name 변화");
    }, [name])

    // 마운팅 (첫 렌더링)
    useEffect(() => {
        console.log("마운팅");
    }, [])

    /*
    첫 렌더링, 렌더링시, 리랜더링시
    */

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChange = e => {
        setName(e.target.value);
    }

    return (
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count : {count}</span>
            <input type="text" value={name} onChange={handleInputChange} />
            <span>name : {name}</span>
        </div>
    )
}
