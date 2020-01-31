import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const Time = () => (
  <span className='time'> 3h ago </span>
);

const ReplyButton = () => (
  <i className='fa fa-reply reply-button'/>
);

const RetweetButton = () => (
  <i className='fa fa-retweet retweet-button' />
);

const LikeButton = () => (
  <i className='fa fa-heart like-button' />
)
const MoreOptionButton = () => (
  <i className='fa fa-ellipsis-h more-options-button' />
)

function Message() {
  return (
    <div className='message'>
      This is less than 140 characters.
    </div>
  )
}

function Author() {
  return (
    <span className='author'>
      <span className='name'> Lawrence </span>
      <span className='handle'> @lawrence4code </span>
    </span>
  )
}

function Avatar() {
  return (
    <img src='https://www.gravatar.com/avatar/nothing' className='avatar' alt='avatar' />
  )
}

function Tweet() {
  return (
    <div className='tweet'>
      <Avatar/>
      <div className='content'>
        <Author/> <Time/>
        <Message/>
        <div className='buttons'>
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionButton />
        </div>
      </div>
    </div>
  )
}


ReactDOM.render(<Tweet/>, document.querySelector('#root'));