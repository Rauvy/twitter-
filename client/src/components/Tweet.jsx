import react from 'react';
import TweetAction from './TweetAction';
import { faComment, faBookmark, faRepeat, faHeart, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../public/styles/tweet.css';

const Tweet = () => {
    return (
      <div className="tweet">
        <div className="tweet-avatar">
          <img src="../../public/ruins.png" alt="avatar" className='avatar'/>
        </div>
        <div className="tweet-content">
          <div className="tweet-header">
            <span className="tweet-name">John Doe</span>
            <span className="tweet-handle">@johndoe</span>
            <span className="tweet-time">· 2h</span>
          </div>
          <p className="tweet-text">This is a sample tweet content. 🚀</p>
          <div className="tweet-actions">
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faRepeat} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faChartSimple} />
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Tweet;