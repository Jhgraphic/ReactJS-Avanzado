import { useState } from 'react';

function useCounter(initialCount, maxCount, minCount) {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount((prevCount) => Math.min(maxCount, prevCount + 1));
    };

    const decrement = () => {
        setCount((prevCount) => Math.max(minCount, prevCount - 1));
    };

    const reset = () => {
        setCount(initialCount);
    };

    return {
        count,
        increment,
        decrement,
        reset
    };
}

export default useCounter;
