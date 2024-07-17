import {useCallback, useEffect, useState, useMemo, useRef, MouseEvent, KeyboardEvent} from "react";

interface User {
    id: number,
    name: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n: number): number => {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

const myNum: number = 37

function App() {
    const [count, setCount] = useState<number>(0)
    const [users, setUsers] = useState<User[] | null>(null)

    const inputRef = useRef<HTMLInputElement>(null)

    console.log(inputRef?.current)
    console.log(inputRef?.current?.value)

    useEffect (() => {
        console.log('mounting')
        console.log('Users: ', users)

        return () => {
            console.log('unmounting')
        }
    }, [users])

    const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void  =>
        setCount(prev => prev + 2),[])

    const result = useMemo<number>(() => fib(myNum), [myNum])
    // const result = useMemo<number>(() => fib(myNum),[myNum])

    return (
      <div className="App">
        <h1>Counter: {count}</h1>
          <button onClick={addTwo}>Increment</button>
          <h2>{result}</h2>
          <input ref={inputRef} type="text" />
      </div>
  )
}

export default App
