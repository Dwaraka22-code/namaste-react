import React from 'react';
import UserContext from '../utils/UserContext';

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log('Parent Constructor');
  }

  componentDidMount() {
    // console.log('Parent Component Did Mount');
  }

  render() {
    // console.log('Parent Render');
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {(data) => {
              console.log(data);
              return <h1 className="text-xl font-bold">{data.loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
      </div>
    );
  }
}

export default About;
