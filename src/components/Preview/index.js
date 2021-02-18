import React, { Component } from 'react';

class Preview extends Component {
  render() {
    return (
      <div className='preview p-10 h-screen'>
        <div className='h-4/5 bg-white my-4'></div>
        <div className='actions my-8 flex justify-center'>
          <button className='py-4 px-6 text-blue-800 rounded-md flex justify-between border border-blue-400'>
            <span className=''>
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
                  strokeWidth='{2}'
                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            </span>
            <span className='ml-2'>Save</span>
          </button>
          <button className='py-4 px-6 ml-8 text-blue-800 rounded-md flex justify-between border border-blue-400'>
            <span className=''>
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
                  strokeWidth='{2}'
                  d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            </span>
            <span className='ml-2'>Download</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Preview;
