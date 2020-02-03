import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import './index.css';

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return (<span className='time'> {timeString} </span>);
}
  ;

const ReplyButton = () => (
  <i className='fa fa-reply reply-button' />
);

const RetweetButton = ({ count }) => (<span className="retweet-button">
  <i className="fa fa-retweet" />
  {getRetweetCount(count)}
</span>
);

const LikeButton = ({ count }) => (<span className="like-button">
  <i className="fa fa-heart" />
  {count > 0 &&
    <span className="like-count">
      {count} </span>}
</span>
);

const MoreOptionButton = () => (
  <i className='fa fa-ellipsis-h more-options-button' />
)

function Message({ text }) {
  return (
    <div className='message'>
      {text}
    </div>
  )
}

function Author({ author }) {
  return (
    <span className='author'>
      <span className='name'> {author.name} </span>
      <span className='handle'> @{author.handle} </span>
    </span>
  )
}

function Avatar({ hash }) {
  return (
    <img src={`https://www.gravatar.com/avatar/${hash}`} className='avatar' alt='avatar' />
  )
}

const testTweet = {
  message: "something about cats",
  gravatar: "xyz",
  author: {
    handle: "dogperson",
    name: "IAMA Dog Person"
  },
  likes: 2,
  retweets: 100,
  timestamp: "2016-07-30 21:24:37"
}

function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    )
  } else {
    return null;
  }
}

function Tweet({ tweet }) {
  return (
    <div className='tweet'>
      <Avatar hash={tweet.gravatar} />
      <div className='content'>
        <Author author={tweet.author} /> <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className='buttons'>
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionButton />
        </div>
      </div>
    </div>
  )
}


ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));