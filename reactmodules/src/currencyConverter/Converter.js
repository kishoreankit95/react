import React, { Component } from "react";

export class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      yen: 0,
      usd: 0,
      keyupFlag: false
    };
  }

  convertToUsd = (num) => {
    let newVal = num * 0.009;
    return newVal;
  };

  convertToyen = (num) => {
    let newVal = num * 111.1111;
    return newVal;
  };

  onYenType = (e) => {
    let value = Number.parseFloat(e.target.value);
    let getVal = this.convertToUsd(value);
    this.setState({ yen: value, usd: getVal, keyupFlag: true });
  };

  onUsdType = (e) => {
    let value = Number.parseFloat(e.target.value);
    let getVal = this.convertToyen(value);
    this.setState({ usd: value, yen: getVal, keyupFlag: true });
  };

  componentDidUpdate() {
    
  }

  render() {
    return (
      <div>
        <div>
          <h2>Japanese yen</h2>
          <input
            placeholder="YEN"
            type="text"
            onChange={this.onYenType}
            value={this.state.keyupFlag ? this.state.yen : ""}
          />
        </div>
        <div>
          <h2>USD</h2>
          <input
            placeholder="USD"
            type="text"
            onChange={this.onUsdType}
            value={this.state.keyupFlag ? this.state.usd : ""}
          />
        </div>
      </div>
    );
  }
}

export default Converter;
