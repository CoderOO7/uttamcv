import React, { Component } from 'react';

class EditPersonalDetails extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    console.log(e);
  }

  render() {
    const { userName } = this.props;

    return (
      <section className='edit-personal-details p-8 '>
        <div className='p-8 bg-white rounded-md shadow-lg'>
          <header className='my-4'>
            <h6 className='font-bold text-2xl text-gray-800'>
              Edit Personal Details
            </h6>
          </header>
          <div>
            <form className='form' onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label className='font-bold text-sm text-gray-800'>Photo</label>
                <div className='my-4 flex flex-col items-center flex-wrap'>
                  <div className='my-4 flex items-center justify-center bg-gray-300 h-24 w-24 rounded-full'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='62'
                      width='62'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <button className='flex px-4 py-2 border border-blue-700 text-blue-700 hover:text-blue-500 rounded-md'>
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
                    <span>Add Photo</span>
                  </button>
                </div>
              </div>
              <div className='form-group flex flex-col my-4'>
                <label htmlFor='' className='font-bold text-sm text-gray-800'>
                  Full name
                </label>
                <input
                  type='text'
                  className='px-3 py-2 w-full mt-1 focus:outline-blue bg-gray-100 rounded-sm'
                  value={userName}
                />
              </div>
              <div className='form-group flex flex-col my-4'>
                <label htmlFor='' className='font-bold text-sm text-gray-800'>
                  Display Email
                </label>
                <input
                  type='text'
                  className='px-3 py-2 w-full mt-1 focus:outline-blue bg-gray-100 rounded-sm'
                  placeholder='Email to display'
                />
              </div>
              <div className='form-group flex flex-col my-4'>
                <label htmlFor='' className='font-bold text-sm text-gray-800'>
                  Phone
                </label>
                <input
                  type='text'
                  className='px-3 py-2 w-full mt-1 focus:outline-blue bg-gray-100 rounded-sm'
                  placeholder='Enter Phone number'
                />
              </div>
              <div className='form-group flex flex-col my-4'>
                <label htmlFor='' className='font-bold text-sm text-gray-800'>
                  Street
                </label>
                <input
                  type='text'
                  className='px-3 py-2 w-full mt-1 focus:outline-blue bg-gray-100 rounded-sm'
                  placeholder='Enter residence address'
                />
              </div>
              <div className='form-group my-4'>
                <div className='flex gap-4 flex-wrap'>
                  <div className='flex flex-col flex-grow'>
                    <label
                      htmlFor=''
                      className='font-bold text-sm text-gray-800'
                    >
                      Post Code
                    </label>
                    <input
                      type='text'
                      className='px-3 py-2 w-full mt-1 focus:outline-blue bg-gray-100 rounded-sm'
                      placeholder='Enter 0-9 six digit postal code'
                    />
                  </div>
                  <div className='flex flex-col flex-grow'>
                    <label
                      htmlFor=''
                      className='font-bold text-sm text-gray-800'
                    >
                      City
                    </label>
                    <input
                      type='text'
                      className='px-3 py-2 w-full mt-1 focus:outline-blue bg-gray-100 rounded-sm'
                      placeholder='Enter City'
                    />
                  </div>
                  <div className='flex flex-col flex-grow'>
                    <label
                      htmlFor=''
                      className='font-bold text-sm text-gray-800'
                    >
                      Country
                    </label>
                    <input
                      type='text'
                      className='px-3 py-2 w-full mt-1 focus:outline-blue bg-gray-100 rounded-sm'
                      placeholder='Enter Country'
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Link card  --> */}
              <div className='form-group flex flex-col my-4'>
                <label htmlFor='' className='font-bold text-sm text-gray-800'>
                  Website
                </label>
                <div className='flex flex-wrap gap-2 items-center'>
                  <input
                    type='text'
                    className='px-4 py-3 flex-grow max-w-full mt-1 focus:outline-blue bg-gray-100 rounded-sm'
                    placeholder='Enter website link'
                  />
                  <button className='px-3 py-2 flex border text-gray-500 border-gray-500 hover:text-gray-400 rounded-md'>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                    <span className='ml-2'>Link</span>
                  </button>
                </div>
              </div>
            </form>
            {/* <!------- Add link card Modal -----> */}
            <div className='flex flex-col shadow-lg p-4'>
              <label htmlFor='' className='font-bold text-sm text-gray-800'>
                Add link
              </label>
              <input
                type='text'
                className='w-full px-3 py-2 mt-1 focus:outline-blue bg-gray-100 rounded-sm'
                placeholder='Enter link'
              />
              <div className='actions mt-4 flex justify-center flex-wrap gap-2 rounded-md shadow-md'>
                <button className='flex-1 px-5 py-1 border border-black'>
                  Cancel
                </button>
                <button className='flex-1 px-5 py-1 border border-green-600 text-green-600 hover:text-green-400'>
                  Add
                </button>
              </div>
            </div>
            {/* <!-- Additional fields --> */}
            <aside className='additional-fields my-8'>
              <h5 className='font-bold'>Additional fields</h5>
              <div className='addtional-fields-list'>
                <div className='addtional-fields-item my-4'>
                  <h6 className='font-bold font-sm'>Web</h6>
                  <div className='additional-fields-category flex flex-wrap gap-3'>
                    <button className='flex border border-gray-400 text-gray-800 px-2 py-1 rounded-sm'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='24'
                          width='24'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                          />
                        </svg>
                      </span>
                      <span>LinkedIn</span>
                    </button>
                    <button className='flex border border-gray-400 text-gray-800 px-2 py-1 rounded-sm'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='24'
                          width='24'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                          />
                        </svg>
                      </span>
                      <span>LinkedIn</span>
                    </button>
                    <button className='flex border border-gray-400 text-gray-800 px-2 py-1 rounded-sm'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='24'
                          width='24'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                          />
                        </svg>
                      </span>
                      <span>LinkedIn</span>
                    </button>
                    <button className='flex border border-gray-400 text-gray-800 px-2 py-1 rounded-sm'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          height='24'
                          width='24'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                          />
                        </svg>
                      </span>
                      <span>LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  }
}

export default EditPersonalDetails;
