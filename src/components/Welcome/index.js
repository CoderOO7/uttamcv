import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      isValidationErr: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  validateName(name) {
    if (name.length === 0) {
      return false;
    }
    return true;
  }

  handleUserNameChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({ [name]: value }));
  }

  handleSubmit(e) {
    e.preventDefault();

    const { userName } = this.state;
    if (this.validateName(userName)) {
      this.props.setUserName(userName);
    } else {
      this.setState((prevState) => ({
        isValidationErr: !prevState.isValidationErr,
      }));
    }
  }

  render() {
    return (
      <section className='welcome p-10'>
        <div className='flex flex-col h-screen items-center justify-center'>
          <p className='font-medium my-4 text-2xl'>{`Hi there 👋, let's begin by entering your name.`}</p>
          <div className='px-8 py-4 bg-white rounded-md shadow-lg'>
            <form className='flex flex-col' onSubmit={this.handleSubmit}>
              <div className='my-4'>
                <label htmlFor='' className='font-bold'>
                  Full name
                </label>
                <input
                  className='px-4 w-full py-3 mt-1 focus:outline-blue bg-gray-100 rounded-sm'
                  onChange={this.handleUserNameChange}
                  type='text'
                  name='userName'
                  value={this.state.userName}
                  id=''
                  placeholder='Enter your first and last name'
                />
                {this.state.isValidationErr && (
                  <div className='rounded-sm mt-2 px-4 py-1 bg-red-200 text-red-600 border border-red-600'>
                    Please enter your name
                  </div>
                )}
              </div>
              <button
                className='my-4 py-3 bg-green-500 hover:bg-green-400 text-white'
                type='submit'
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
