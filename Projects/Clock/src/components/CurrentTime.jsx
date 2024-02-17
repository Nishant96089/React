function CurrentTime() {
  let time = new Date();

  return (
    <p className="fs-4">
      Current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
