import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loginButtonDesable: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(() => ({ [name]: value }), () => {
      const { email, password } = this.state;
      const AT_SIGN = '@';
      const NUMBER_SIX = 6;
      const DOT_COM = '.com';
      if (
        email.includes(AT_SIGN)
      && email.includes(DOT_COM)
      && password.length >= NUMBER_SIX) {
        this.setState({ loginButtonDesable: false });
      } else {
        this.setState({ loginButtonDesable: true });
      }
    });
  }

  render() {
    const { email, password, loginButtonDesable } = this.state;
    const { dispatchInputs } = this.props;
    return (
      <div>
        <label htmlFor="email">
          Email
          <input
            type="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
            name="email"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
            name="password"
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ loginButtonDesable }
            onClick={ () => dispatchInputs(this.state) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchInputs: (state) => dispatch(sendAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchInputs: propTypes.func,
}.isRequired;
