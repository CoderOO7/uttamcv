import React, { Component } from 'react';
import EditPersonalDetails from './EditPersonalDetails/index.js';
import styles from './index.module.css';

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
      <section className={styles.personal_details}>
        <div className={styles.personal_details__wrapper}>
          <header className={styles.personal_details__header}>
            <h6 className={styles.personal_details__heading}>
              Personal Details
            </h6>
            <button
              className={styles.personal_details__btn}
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
          <div className={styles.personal_details__view}>
            <div className={styles.personal_details__view_wrap}>
              <div className={styles.personal_details__user_svg}>
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
              <span className={styles.personal_details__user_name}>
                {this.props.userName}
              </span>
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
