import React, {useState, useDeferredValue, memo} from 'react';
import namesArray from './namesArray';

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray);
  const deferredNames = useDeferredValue(showNames);

  const handleValueChange = (event) => {
    const keyword = event.target.value;
    const filterShowNames = namesArray.filter((item) => item.includes(keyword));
    setShowNames(filterShowNames);
  };

  return (
    <div>
      <input type="text" onInput={handleValueChange} />
      <h2>用户列表: </h2>
      <ul>
        {deferredNames.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default App;
