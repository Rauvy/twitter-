import react from 'react';
import Tweet from './Tweet';
import "../../public/styles/feed.css";

function Feed() {
    return(
        <main className="feed">
            <div className="feed-header">
                <h2>Home</h2>
            </div>
            <Tweet />
            <Tweet />
            <Tweet />
        </main>
    );
}

export default Feed;