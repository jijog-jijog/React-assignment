import { useState } from 'react';

const ToDo = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello Jijo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default ToDo;
