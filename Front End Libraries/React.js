// Create a Simple JSX Element
  const JSX = <h1>{'Hello JSX!'}</h1>;

// Create a Complex JSX Element
  const JSX = (
    <div>
      <h1></h1>
      <p></p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );

// Add Comments in JSX
  const JSX = (
    <div>
      {/* */}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );

// Render HTML Elements to the DOM
  const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // change code below this line
  ReactDOM.render(JSX, document.getElementById("challenge-node"));

// Define an HTML Class in JSX
  const JSX = (
    <div className={'myDiv'}>
      <h1>Add a class to this div</h1>
    </div>
  );

// Learn About Self-Closing JSX Tags
  const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
  );

// Create a Stateless Functional Component
  const MyComponent = function () {
    // change code below this line
    return <div>asdfasdfasdf</div>;
    // change code above this line
  };

// Create a React Component
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // change code below this line
      return (
        <div>
          <h1>{"Hello React!"}</h1>
        </div>
      );
      // change code above this line
    }
  }

// Create a Component with Composition
  const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };

  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          {/* change code below this line */}
          <ChildComponent />
          {/* change code above this line */}
        </div>
      );
    }
  }

// Use React to Render Nested Components
  const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };

  const Fruits = () => {
    return (
      <div>
        { /* change code below this line */ }
        <TypesOfFruit />
        { /* change code above this line */ }
      </div>
    );
  };

  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* change code below this line */ }
          <Fruits />
          { /* change code above this line */ }
        </div>
      );
    }
  };

// Compose React Components
  class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          {/* change code below this line */}
          <NonCitrus />
          <Citrus />
          {/* change code above this line */}
        </div>
      );
    }
  }

  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* change code below this line */}
          <Fruits />
          {/* change code above this line */}
          <Vegetables />
        </div>
      );
    }
  }

// Render a Class Component to the DOM
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* change code below this line */}
          <Fruits />
          <Vegetables />
          {/* change code above this line */}
        </div>
      );
    }
  }

  // change code below this line
  ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));

// Write a React Component from Scratch
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>My First React Component!</h1>
        </div>
      );
    }
  }

  ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));

// Pass Props to a Stateless Functional Component
  const CurrentDate = (props) => {
    return (
      <div>
        {/* change code below this line */}
        <p>The current date is: {props.date}</p>
        {/* change code above this line */}
      </div>
    );
  };

  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          {/* change code below this line */}
          <CurrentDate date={Date()} />
          {/* change code above this line */}
        </div>
      );
    }
  }

// Pass an Array as Props
  const List = (props) => {
    {
      /* change code below this line */
    }
    return <p>{props.tasks.join(", ")}</p>;
    {
      /* change code above this line */
    }
  };

  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          {/* change code below this line */}
          <List tasks={["walk dog", "workout"]} />
          <h2>Tomorrow</h2>
          <List tasks={["walk dog", "workout", "workout"]} />
          {/* change code above this line */}
        </div>
      );
    }
  }

// Use Default Props
  const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    );
  };
  // change code below this line
  ShoppingCart.defaultProps = { items: 0 };

// Override Default Props
  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
  };

  Items.defaultProps = {
    quantity: 0,
  };

  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      {
        /* change code below this line */
      }
      return <Items quantity={10} />;
      {
        /* change code above this line */
      }
    }
  }

// Use PropTypes to Define the Props You Expect
  const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
  };

  // change code below this line
  Items.propTypes = { quantity: PropTypes.number.isRequired };
  // change code above this line

  Items.defaultProps = {
    quantity: 0,
  };

  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />;
    }
  }

// Access Props Using this.props
  class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          {/* change code below this line */}
          <p>
            Your temporary password is: <strong>{this.props.tempPassword}</strong>
          </p>
          {/* change code above this line */}
        </div>
      );
    }
  }

  class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          {/* change code below this line */}
          <ReturnTempPassword tempPassword={"asdfasdf"} />
          {/* change code above this line */}
        </div>
      );
    }
  }

// Review Using Props with Stateless Functional Components
  class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper />
        </div>
      );
    }
  }
  // change code below this line
  class Camper extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <p>{this.props.name}</p>;
    }
  }
  Camper.defaultProps = { name: "CamperBot" };
  Camper.propTypes = { name: PropTypes.string.isRequired };

// Create a Stateful Component
  class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "alex",
      };
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  }

// Render State in the User Interface
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "freeCodeCamp",
      };
    }
    render() {
      return (
        <div>
          {/* change code below this line */}
          <h1>{this.state.name}</h1>
          {/* change code above this line */}
        </div>
      );
    }
  }

// Render State in the User Interface Another Way
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "freeCodeCamp",
      };
    }
    render() {
      // change code below this line
      const name = this.state.name;
      // change code above this line
      return (
        <div>
          {/* change code below this line */}
          <h1>{name}</h1>
          {/* change code above this line */}
        </div>
      );
    }
  }

// Set State with this.setState
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Initial State",
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // change code below this line
      this.setState({
        name: "React Rocks!",
      });
      // change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  }

// Bind 'this' to a Class Method
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello",
      };
      // change code below this line
      this.handleClick = this.handleClick.bind(this);
      // change code above this line
    }
    handleClick() {
      this.setState({
        text: "You clicked!",
      });
    }
    render() {
      return (
        <div>
          {/* change code below this line */}
          <button onClick={this.handleClick}>Click Me</button>
          {/* change code above this line */}
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  }

// Use State to Toggle an Element
