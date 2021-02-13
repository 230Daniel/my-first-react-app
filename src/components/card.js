import React from "react";
import './card.css';

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  clicked: false,
		};
	  }

	render() {
		return(
		<div className="Card">
			{this.renderTitle(this.state.clicked ? "boring box" : "hype box", this.state.clicked)}
			{this.props.text}
			<CardButton onClick={() => this.handleClick()}/>
			<CardButton onClick={() => this.handleClick()}/>
		</div>);
	}

	renderTitle(title, clicked){
		return(
			<div style={{background: clicked ? "green" : "pink"}}>
				<h1>{title}</h1>
			</div>
		);
	}

	handleClick(){
		this.setState({clicked: !this.state.clicked});
	}
}

class CardButton extends React.Component{
	render() {
		return(
			<button onClick={this.props.onClick}>
				change colour
			</button>
		);
	}
}

export default Card;