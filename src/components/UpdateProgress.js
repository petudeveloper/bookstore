import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';

const UpdateProgress = () => {
  const [progress] = useState(64);
  return (
    <div className="update-progres">
      <div className="progress-bar-container">
        <CircularProgressbar value={progress} className="circular-progress-bar" />
        <div className="progress-completed">
          <span className="progress-in-numbers">
            {progress}
            %
          </span>
          <span className="completed-label">completed</span>
        </div>
      </div>
      <div className="container-update-btn">
        <span className="chapter-title">Current Chapter</span>
        <span className="chapter">Chapter 17</span>
        <button className="update-progres-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default UpdateProgress;
