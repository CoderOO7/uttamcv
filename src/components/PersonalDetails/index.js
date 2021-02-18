import React, { Component } from 'react';
import EditPersonalDetails from './EditPersonalDetails/index.js';

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditPersonalDetailsAllow: false,
    };

    this.handleEditBtnClick = this.handleEditBtnClick.bind(this);
  }

  handleEditBtnClick() {
    this.setState((prevState) => ({
      isEditPersonalDetailsAllow: !prevState.isEditPersonalDetailsAllow,
    }));
  }

  render() {
    const { isEditPersonalDetailsAllow } = this.state;
    const { userName } = this.props.userName;

    const personalDetailsTempelate = (
      <section className='personal-details p-10'>
        <div className='px-8 py-4 bg-white rounded-md shadow-lg'>
          <header className='flex justify-between items-center my-4'>
            <h6 className='font-bold'>Personal Details</h6>
            <button
              className='px-4 py-2 flex border border-black hover:text-gray-800 rounded-md'
              onClick={this.handleEditBtnClick}
            >
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24'
                  width='24'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
                </svg>
              </span>
              <span className='ml-2'>Edit</span>
            </button>
          </header>
          <hr />
          <div className='flex flex-col gap-2 text-gray-700'>
            <div className='my-4 flex items-center flex-wrap'>
              <div className='mt-2 flex items-center justify-center bg-gray-300 h-24 w-24 mr-8 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='62'
                  width='62'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <span className='py-1 font-bold'>{this.props.userName}</span>
            </div>
            <div>Email</div>
            <div>Phone</div>
            <div>Address</div>
          </div>
        </div>
      </section>
    );

    return isEditPersonalDetailsAllow ? (
      <EditPersonalDetails userName={userName} />
    ) : (
      personalDetailsTempelate
    );
  }
}

export default PersonalDetails;
