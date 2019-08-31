import React, { Component } from "react";
import Slider from "react-rangeslider";
import History from "./History";
import axios from "axios";

let history = [];
class Home extends Component {
  constructor() {
    super();
    this.state = {
      amount: 500,
      month: 6,
      interestRate: 0,
      monthlyPayment: 0
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://ftl-frontend-test.herokuapp.com/interest?amount=${
          this.state.amount
        }&numMonths=${this.state.month}`
      )
      .then(res => {
        console.log("eeeeeee", res.data);

        this.setState({
          interestRate: res.data.interestRate,
          monthlyPayment: res.data.monthlyPayment.amount
          // numPayments: res.data.numPayments
        });
      })
      .catch(console.log("eeee"));
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.amount !== prevState.amount ||
      this.state.month !== prevState.month
    ) {
      axios
        .get(
          `https://ftl-frontend-test.herokuapp.com/interest?amount=${
            this.state.amount
          }&numMonths=${this.state.month}`
        )
        .then(res => {
          console.log(res.data);
          if (res.data.status && res.data.status === "error") {
            console.log("Error occurred");
          } else {
            console.log("aaaaaaaa", res.data);
            this.setState({
              interestRate: res.data.interestRate,
              monthlyPayment: res.data.monthlyPayment.amount
              // numPayments: res.data.numPayments
            });
          }
        })
        .catch(e => console.log(e));
    }
  }

  handleChangeAmount = amount => {
    this.setState({
      amount: amount
    });
  };

  handleChangeMonth = month => {
    this.setState({
      month: month
    });
  };

  render() {
    const data = {
      amount: this.state.amount,
      month: this.state.month
    };

    history.push(data);

    localStorage.setItem("items", JSON.stringify(history));

    const value = JSON.parse(localStorage.getItem("items"));

    console.log("daATA", value);
    return (
      <div style={{ position: "relative" }}>
        <div className="sidenav">
          <p>Recent Views</p>
          <History />
        </div>
        <div className="container">
          <h1>Loan EMI Calculator</h1>
          <div className="card">
            <div className="card-item">
              <div className="card-heading">
                <p className="card-h1">Loan Amount</p>
                <p className="card-p">$ {this.state.amount}</p>
              </div>
              <div className="slider-horizontal">
                <Slider
                  min={500}
                  max={5000}
                  value={this.state.amount}
                  orientation="horizontal"
                  onChangeStart={this.handleChangeStart}
                  onChange={this.handleChangeAmount}
                  onChangeComplete={this.handleChangeComplete}
                />
              </div>
            </div>
            <div className="card-item">
              <div className="card-heading">
                <p className="card-h1"> Duration (Months)</p>
                <p className="card-p">{this.state.month} Month</p>
              </div>
              <div className="slider-horizontal">
                <Slider
                  min={6}
                  max={24}
                  value={this.state.month}
                  onChangeStart={this.handleChangeStart}
                  onChange={this.handleChangeMonth}
                  onChangeComplete={this.handleChangeComplete}
                />
              </div>
            </div>
            <div className="card-heading">
              <p className="card-h1"> Interest Rate:</p>
              <p className="card-p">{this.state.interestRate}%</p>
            </div>
            <div className="card-heading">
              <p className="card-h1">Monthly Payment:</p>
              <p className="card-p">${this.state.monthlyPayment} Per Month</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
