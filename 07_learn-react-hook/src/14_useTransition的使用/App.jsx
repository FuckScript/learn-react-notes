import React, {useState, useTransition, memo} from 'react';
import namesArray from './namesArray';

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray);
  const [pending, setTransition] = useTransition();

  const handleValueChange = (event) => {
    setTransition(() => {
      const keyword = event.target.value;
      const filterShowNames = namesArray.filter((item) =>
        item.includes(keyword)
      );
      setShowNames(filterShowNames);
    });
  };

  return (
    <div>
      <input type="text" onInput={handleValueChange} />
      <h2>用户列表: {pending && <span>Loading</span>}</h2>
      <ul>
        {showNames.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default App;
