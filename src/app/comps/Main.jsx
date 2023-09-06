import Card from "./Card"
import Main_Css from "../Css/Main.module.css"
const Main = (props) => {
  let { data } = props
  return (
    <div className={Main_Css.container}>
      {
      data.map((ele) => (
        <Card vedio={ele} />
      ))}
    </div>
  );
};

export default Main;
