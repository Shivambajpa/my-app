import React from "react";

const ReactDevloperTool = (props) => {
  console.log(props);

  return (
    <div>
      <div className="grid gap-14 text-center items-center justify-center bg-cyan-700">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam
          corporis nisi repellat qui nobis quia velit placeat dolorum!
          Doloremque.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam
          corporis nisi repellat qui nobis quia velit placeat dolorum!
          Doloremque.
        </div>{" "}
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam
          corporis nisi repellat qui nobis quia velit placeat dolorum!
          Doloremque.
        </div>{" "}
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam
          corporis nisi repellat qui nobis quia velit placeat dolorum!
          Doloremque.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam
          corporis nisi repellat qui nobis quia velit placeat dolorum!
          Doloremque.
        </div>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p>{props.phonenumber}</p>
      </div>
    </div>
  );
};

export default ReactDevloperTool;
