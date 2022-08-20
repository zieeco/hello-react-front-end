import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingAsync } from '../../redux/greetings/.greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const { loading, error, greet } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreetingAsync());
  }, []);

  const handleGreeting = () => {
    dispatch(getGreetingAsync());
  };

  return (
    <div className="div">
      <h1>{greet}</h1>
      { loading && <p>Loadng....</p> }
      { error && <p>error.message</p>}
      <button type="button" onClick={handleGreeting}>Get Greeting</button>
    </div>
  );
};

export default Greeting;
