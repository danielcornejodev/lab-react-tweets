import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp'

function Tweet({image, userData, time}) {
console.log({image, userData, time})

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User userData={userData} />

          <Timestamp time={time} />
        </div>

        <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
