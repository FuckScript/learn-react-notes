import React, {useState, useId, memo} from 'react';

const App = memo(() => {
  const [count, setCount] = useState(1207);
  const id = useId();
  console.log(id);

  return (
    <div>
      <h4>当前计数: {count}</h4>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
