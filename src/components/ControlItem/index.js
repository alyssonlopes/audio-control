// 1
import React from "react";
import PropTypes from "prop-types";

// 2
class ControlItem extends React.Component {
  constructor(props) {
    super(props);
    // State Passo 1: Definição
    this.state = { value: this.props.value };
  }

  handlePlus = () => {
    // State Passo 3: Atualizar o state
    this.setState({ value: this.state.value + 1 });
  };

  handleMinus = () => {
    // State Passo 3: Atualizar o state
    this.setState({ value: this.state.value - 1 });
  };

  // 3
  render() {
    return (
      <li>
        <button onClick={this.handleMinus}>-</button>
        <span>
          {/* State Passo 2: Utilizar o state */}
          {this.state.value} | {this.props.title}
        </span>
        <button onClick={this.handlePlus}>+</button>
      </li>
    );
  }
}

ControlItem.propTypes = {
  value: PropTypes.number,
  title: PropTypes.string,
};

// 4
export default ControlItem;
