import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

function Tweet({image, userData, time, message}) {
  console.log(message)
  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User userData={userData} />

          <Timestamp time={time} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
