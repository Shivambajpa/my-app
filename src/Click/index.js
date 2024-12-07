const CickEvent = () => {
  let Var = "data";

  const Pop = () => {
    let Var = "pata";
    alert(Var + 1);
  };
  return (
    <div>
      <div>
        <h1>this is called shivam website</h1>
        <label></label>
        <button type="text" className="bg-slate-500   w-44" onClick={Pop}>
          Click
        </button>{" "}
        <h1>{Var}</h1>
      </div>
    </div>
  );
};

export default CickEvent;
