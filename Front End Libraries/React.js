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