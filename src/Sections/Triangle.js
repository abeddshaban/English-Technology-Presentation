import "./Styles/Triangle.css";

const Triangle = ({ mt, ci1, ci2, ci3 }) => {
  return (
    <div className="up textwhite">
      <p className="main">{mt}</p>
      <div className="rebbg">
        <p>{ci1}</p>
        <p>{ci2}</p>
        <p>{ci3}</p>
      </div>
    </div>
  );
};

export default Triangle;
