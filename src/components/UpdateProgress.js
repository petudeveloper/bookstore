import '../styles/circle.css';

const UpdateProgres = () => (
  <div className="update-progres">
    <div className="c100 p12 small">
      <span>12%</span>
      <div className="slice">
        <div className="bar" />
        <div className="fill" />
      </div>
    </div>
    <div className="container-update-btn">
      <span className="chapter-title">Current Chapter</span>
      <span className="chapter">Chapter 17</span>
      <button className="update-progres-btn" type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

export default UpdateProgres;
