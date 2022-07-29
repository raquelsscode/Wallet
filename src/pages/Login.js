import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendAction } from '../actions/index';
import styles from '../WalletCSS/Login.module.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
    const { name, email, password, loginButtonDesable } = this.state;
    const { dispatchInputs } = this.props;
    return (
      <section className={ styles.container }>
        <h1> Wallet </h1>
        <form>
        <label htmlFor="name">
            Nome:
            <input
              type="text"
              placeholder="Nome"
              data-testid="name-input"
              onChange={ this.handleChange }
              value={ name }
              name="name"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              placeholder="Email"
              data-testid="email-input"
              onChange={ this.handleChange }
              value={ email }
              name="email"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              placeholder="Senha"
              data-testid="password-input"
              onChange={ this.handleChange }
              value={ password }
              name="password"
            />
          </label>
          <p>* Senha com no mínimo 6 caracteres</p>
          <Link to="/carteira">
            <button
              type="button"
              disabled={ loginButtonDesable }
              onClick={ () => dispatchInputs(name) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </section>
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
