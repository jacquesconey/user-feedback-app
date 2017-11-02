import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// Creating a basic Clock Component

// The answers to each exercise are in the Answers.js file if you get stuck and need inspiration
// https://reactjs.org/docs/state-and-lifecycle.html for more details

// Exercise 1: Functional component to Class
// 1 - turn functional component into class
// 2 - Create an ES6 class, with the same name, that extends React.Component.
// 3 - Add a single empty method to it called render().
// 4 - Move the body of the function into the render() method.
// 5 - Replace props with this.props in the render() body.
// 6 - Delete the remaining empty function declaration.
// 7 - export the class and import it into the index.js

//Exercise 2: Moving Date from props to state
// 1 - replace props with state
// 2 - add a class constructor that assigns the initial state to this.state
// 3 - remove the property date we once had assigned to clock

// Exercise 3: Using Lifecycle Methods
// 1 - Set up a timer whenever the clock is rendered for the first time (mounting)
// 2 - Clear that timer whenever the DOM produced by the clock is removed (unmounting)
// 3 - Create new method tick() as part of class to set the state of date

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

//export default Clock;


