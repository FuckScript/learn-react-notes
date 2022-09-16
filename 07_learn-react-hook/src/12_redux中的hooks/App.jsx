import React, {memo} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {changeCountAction} from './store/modules/counter';

const App = memo(() => {
  const dispatch = useDispatch();
  const {count} = useSelector(
    (state) => ({count: state.counter.count}),
    shallowEqual
  );

  return (
    <div>
      <h4>当前计数: {count}</h4>
      <button onClick={() => dispatch(changeCountAction(1))}>+1</button>
    </div>
  );
});

export default App;
