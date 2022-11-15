import useCounter from '../../hooks/useCounter';

const initialCount = 20;
const minCount = 10;
const maxCount = 30;

function Counter() {
    const { count, increment, decrement, reset } = useCounter(initialCount, maxCount, minCount);

    return (
        <div>
        Contador
        <h1>{count}</h1>
        <button onClick={increment}>Aumentar Valor</button>
        <button onClick={decrement}>Reducir Valor</button>
        <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
