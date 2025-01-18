import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TweetAction( {action, a_icon} ){
    return(
        <button className='tweet-action'>
           <FontAwesomeIcon icon={a_icon} className="tweet-icon" />
            {action}
        </button>
    );
}

export default TweetAction;