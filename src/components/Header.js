import { LOGO_URL } from '../utils/constants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login');

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //useEffect - Default Nature - withhout any dependency array
  //Whenever page reloads or whenever local state variable updates , useEffect will be called on every render
  /* useEffect(() => {
    console.log('useEffect called');
  }); */

  //useEffect - with EMPTY DEPENDENCY ARRAY
  //Whenever page reloads for the first time, then useEffect will be called on every initial render (only once - 1st time). But with empty dependency array, useEffect cannot be called on local state variable UPDATION
  /* useEffect(() => {
    console.log('useEffect called');
  }, []); */

  //useEffect - with a value(local state variable) in DEPENDENCY ARRAY
  //Whenever page reloads or whenever local state variable updates , useEffect will be called on every render here also
  useEffect(() => {
    // console.log('useEffect called');
  }, [btnNameReact]);

  // console.log('Header render');

  const onlineStatus = useOnlineStatus();

  //Subscribing to the Store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header flex justify-between bg-pink-100 sm:bg-yellow-200 lg:bg-green-200 shadow-lg mb-2">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo w-56" />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li>Online Status : {onlineStatus ? '✅' : '🔴'}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart-({cartItems.length}items)</Link>
          </li>
          <button
            className="login bg-black px-5 text-white"
            onClick={() => {
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
