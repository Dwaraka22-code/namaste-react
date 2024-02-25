import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { count: 0, count2: 2, count3: 3, count4: 4, count5: 5 };
    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Default',
      },
    };
    console.log(this.props.name + 'Child Constructor');
  }

  /* componentDidMount() {
    console.log(this.props.name + 'Child Component Did Mount');
  } */

  /* async componentDidMount() {
    console.log(this.props.name + 'Component Did Mount');
    const data = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  } */

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('NAMASTE REACT OP');
    }, 1000);
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  //Like Dependancy array with multiple state variables
  /*componentDidUpdate(prevProps, prevState) {
    if(this.state.count !== prevState.count){

    }
  } */

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('Component Will Unmount');
  }

  render() {
    console.log(this.props.name + 'Child Render');
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count, count2 } = this.state;

    // debugger;
    return (
      <div className="user-card">
        {/* <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1>
        <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            this.state.count = this.state.count + 1;
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        {/* <h2>PropsName : {name}</h2>
        <h3>Props Location: {location} </h3> */}
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location: {location} </h3>
        <h4>Contact : @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
