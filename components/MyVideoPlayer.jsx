// components/VideoPlayer.js
import React from 'react';

const MyVideoPlayer = () => {
  return (
    <div>
      <video width="600" controls>
        <source src="https://bucket-tkbz21.s3.ap-south-1.amazonaws.com/v1.mkv" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MyVideoPlayer;
