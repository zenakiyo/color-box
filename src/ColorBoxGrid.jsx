import ColorBox from "./ColorBox";
export default function ColorBoxGrid(props) {
  return (
    <div
      className="container"
      style={{ gridTemplateColumns: `repeat(${props.totalBox}, auto)` }}
    >
      {[...Array(props.totalBox * props.totalBox).keys()].map((key) => (
        <ColorBox key={key} colors={props.colors} />
      ))}
    </div>
  );
}
