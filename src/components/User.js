import { useEffect, useState } from 'react';

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  /* useEffect(() => {
    //API calls
    getUserInfo();
  }, []);

  async function getUserInfo() {
    const data = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await data.json();
    console.log(json);
  } */

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('NAMASTE REACT OP');
    }, 1000);
    // console.log('useEffect');

    return () => {
      clearInterval(timer);
      // console.log('useEffect Return');
    };
  });

  // console.log('render');
  /* useEffect(() => {
    //API calls
    async function getUserInfo() {
      const data = await fetch('https://api.github.com/users/akshaymarch7');
      const json = await data.json();
      console.log(json);
    }
    
    getUserInfo()
  }, []); */

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
      <h2>Name : {name}</h2>
      <h3>Location: Dehradun </h3>
      <h4>Contact : @akshaymarch7</h4>
    </div>
  );
};

export default User;
