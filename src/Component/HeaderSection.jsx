import "./style.css";
function HeaderSection(props) {
  const {title, subTitle} = props;
  return (
    <h1 className="head-sec py-3 my-3 text-center text-warning ">
      <span className="border-bottom border-warning p-2">{title}</span>
      <span className="subTitle">{subTitle}</span>
    </h1>
  );
}

export default HeaderSection;
