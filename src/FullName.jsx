function Fullname(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <p>{props.address}</p>
    </div>
  );
}

export default Fullname;
