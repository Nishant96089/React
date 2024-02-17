import { useState } from "react";
import Members from "./members";

function DisplayFam({ fam }) {
  let [preActive, postActive] = useState([]);

  let onCallBtn = (item, event) => {
    let getActive = [...preActive, item];
    postActive(getActive);
  };

  return (
    <ul className="list-group">
      {fam.map((item) => (
        <Members
          calling={preActive.includes(item)}
          fam={item}
          callHandler={() => {
            onCallBtn(item);
            alert(`Calling ${item}`);
          }}
        ></Members>
      ))}
    </ul>
  );
}

export default DisplayFam;
