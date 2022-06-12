import React from "react";
import './App.css';
import axios from 'axios';


class App extends React.Component {
    // global object for the App component
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((res) => {
                // console.log(res.data.slip.advice); is the same thing as the 2 lines below
                const { advice } = res.data.slip;
                // console.log(advice);

                // this.setState({advice: advice}); means the same as the line below (set advice value to advice property in the state)
                this.setState({ advice });

            })
            .catch((err) => {
                console.log(err);

            });

    }

    render() {
        const { advice } = this.state;

        return (
            <div className="app">
                <div className="card">
                    <div className="advice">{advice}</div>
                    <button onClick={this.fetchAdvice}>
                        <span>Generate New Quote</span>
                    </button>
                </div>
            </div >

        );
    }
}

export default App;