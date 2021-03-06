import React, {component, Component} from 'react';
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pass: ""
		}
	}

	onPassChange(e) {
		this.setState({
			pass: e.target.value
		})
	}

	render() {
		const {pass} = this.state;
		const {login, lenghtErr, logErr} = this.props;

		let renderLogErr, renderLengthErr;

		logErr ? renderLogErr = <span className="login-error">Введен не правильный пароль!</span> : null;

		lenghtErr ? renderLengthErr = <span className="login-error">Пароль должен быть больше 5 символов!</span> : null;

		return (
			<div className="login-container">
				<div className="login">
					<h2 className="uk-modal-title uk-text-center">Авторизация</h2>
					<div className="uk-margin-top uk-text-lead">Пароль:</div>
					<input 
						type="password" 
						name="" 
						id="" 
						className="uk-input uk-margin-top" 
						placeholder="Пароль"
						value={pass}
						onChange={(e) => this.onPassChange(e)}></input>
						{renderLogErr}
						{renderLengthErr}
					<button 
						className="uk-button uk-button-primary uk-margin-top" 
						type="button"
						onClick={() => login(pass)}>Вход</button>
				</div>
			</div>
		)
	}
}