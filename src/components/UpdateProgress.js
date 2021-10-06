import '../styles/circle.css';

const UpdateProgres = () => (
  <div>
    <div className="c100 p12 small">
      <span>12%</span>
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
    </div>
    <div className="container-update-btn">
      <span>Current Chapter</span>
      <span>Chapter 17</span>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

export default UpdateProgres;
