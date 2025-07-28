import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(0);
      console.log('Auto-reset after 10 seconds');
    }, 10000);

    return () => {
      clearTimeout(timer);
      console.log('Cleanup: timer cleared');
    };
  }, [count]);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>Reset</button>
    </div>
  );
};

export default Counter;

