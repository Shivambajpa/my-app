const MethodProps = (props) => {
  let Var = "bur";

  return (
    <div>
      {props.name}
      <h1>{Var}</h1> {props.HandleClick}
      <br />
      <button type="submit" onClick={props.handleClick}>
        Click
      </button>
    </div>
  );
};

export default MethodProps;
