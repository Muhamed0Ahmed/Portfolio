import "./style.css"
function Skill(props) {
  let {skill, percent} = props;
  return (
    <div className="skill-sec p-2">
      <div className="row align-items-center">
        <div className="col-12 col-md-4">
          <h3>{skill}</h3>
        </div>
        <div className="col-12 col-md-8 ">
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{width:percent + "%"}}
              aria-valuenow={percent}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
