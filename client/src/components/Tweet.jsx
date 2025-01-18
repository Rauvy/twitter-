import react from 'react';
import TweetAction from './TweetAction';
import { faComment, faBookmark, faRepeat, faHeart, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../public/styles/tweet.css';

function Tweet(){
    return(
        <div className='tweet-container'>
            <div className="profile-info">
               <img src="../../public/ruins.png" alt="profile_picture" className='profilePicture'/>
               <p>First Last</p>
               <p>@Nickname</p>
               <p>Jan. 18</p>
            </div>
            

            <p>Some tweet text up to around 200 words</p>
            <img src='../../public/ruins.png' /> 
            <div className="tweetActions">
                <TweetAction action="130" a_icon={faComment}/>
                <TweetAction action="200" a_icon={faRepeat}/>
                <TweetAction action="10" a_icon={faHeart}/>
                <TweetAction action="11" a_icon={faChartSimple}/>
                <button><FontAwesomeIcon icon={faBookmark} /></button>
            </div>
           
        </div>
    );
}

export default Tweet;