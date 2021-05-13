import React from 'react';
import { BACKEND_ENDPOINT } from './endpoint';
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message:''
        }
    }

    componentDidMount() {
        const headers = { 'Content-Type': 'application/json','authorization':localStorage.token }
        fetch(`${BACKEND_ENDPOINT}/home`, { headers })
            .then(response => response.json())
            .then(data => this.setState({ message: data.message }));
    }
    refreshPage=()=> {
    window.location.reload();
}
    render() {
        return (
            <div className="container">
                {this.state.message === 'Please Login To See This Page...!!!' ?
                    (<div><h1>{this.state.message}</h1></div>) :
                    (<div>
                        <h1>{this.state.message}</h1>
						<h1>Welcome to frontend!!!</h1>
                        <button className="red" onClick={() => {
                            localStorage.removeItem('token');
                            this.refreshPage();
                        }}>Logout</button>
                    </div>)
                }
            </div>
        )
    }
}

export default Home;