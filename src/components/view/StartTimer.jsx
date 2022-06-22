import React, { useEffect, useState } from 'react';

export default function StartTimer() {
    const [timer, setTimer] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 작동 중..");
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("타이머가 종료됨");
        };
    }, [])

    return (
        <div>
            {
                timer && <p>타이머를 시작함. 콘솔 확인</p>
            }
            <button onClick={() => setTimer(!timer)}>start timer</button>
        </div>
    )
}
