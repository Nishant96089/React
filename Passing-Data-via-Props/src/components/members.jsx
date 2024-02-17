import membersCSS from "../styles/members.module.css";

function Members({ fam, callHandler, calling }) {
  return (
    <li className={`${membersCSS.list} list-group-item ${calling && "active"}`}>
      {fam}
      <button
        className={`${membersCSS.call} btn btn-success`}
        onClick={callHandler}
      >
        Call
      </button>
    </li>
  );
}

export default Members;
