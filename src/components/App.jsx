import React, { Component, Fragment } from "react";


// const App = (props) => {
//     return (
//         <h1>My wife's name is {props.name}</h1>
//     );
// };

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            hasLoaded: false
        };
    };
    onInputTextChange(e) {

        this.setState({ name: e.target.value });
    }

    onButtonClick() {
        this.setState({ hasLoaded: true });
    }
    componentDidMount() {
        this.setState({hasLoaded: true});
    }
    render() {
        console.log(this.state.text);
        if (this.state.hasLoaded) {
            return (
                <Fragment>
                    <input onChange={(e) => this.onInputTextChange(e)} value={this.state.text} />
                    <h1>My wife's name is {this.props.name}. {this.state.text}</h1>
                    <button onClick={() => this.onButtonClick()}>Click Me!</button>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <h1>Loading ...</h1>
                    <button onClick={() => this.onButtonClick()}>Click Me!</button>
                </Fragment>
            )
        }
    };
};


export default App;