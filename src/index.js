import React from 'react';
import ReactDOM from 'react-dom';
import './testingtoken.css';
import {Explorer, sites} from "adventure-component-library";
import axios from 'axios';

var userAddress;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: null
        }
    }

    componentDidMount() {
        this.getAccountName();
    }

    async getAccountName() {
        // eslint-disable-next-line no-undef
        this.setState({account: await ethereum.enable()}, () => {
            console.log(this.state.account);
            userAddress = this.state.account[0];
        });
    }

    sendAPIRequest() {
        window.alert('Obtained 1 Shoe Token');
        var apiAddress;
        apiAddress = "http://13.56.163.182:8000/transfer-token";
        axios.post(apiAddress, {
            ticker: "SHOE",
            amount: 1,
            to: userAddress,
            hookUrl: "done",
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return <div className = "container">
            <div className="header">
                <h1>Shoes Shoes and More Shoes</h1>
                <h2>Some Shoes</h2>
            </div>
            <div className="shoe-container">
                <img className="shoe"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6GNWwUkJBTGJqtZhE_JWAvCNuc_bAG_tMbw&usqp=CAU"/>
            </div>
            <div className="metamask-container">
                <div class="input-group"></div>
                    <input type="text" class="form-control rounded-0" id="validationDefaultUsername" placeholder="Address" aria-describedby="inputGroupPrepend2" required></input>
                <button className="metamask" onClick={this.sendAPIRequest}>Get Shoe Token</button>
            </div>
            <div className="explorer">
              <Explorer site={sites.ginandjuice}/>
            </div>
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
