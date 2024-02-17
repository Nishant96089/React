function ErrorMsg({ EmptyList }) {
  return <>{EmptyList.length === 0 ? <h3>The list is empty!</h3> : null}</>;
}

export default ErrorMsg;
