function Planet(props) {
  return (
    <div>
      <span>{props.name}</span>&nbsp;
      <span>{props.isGasPlanet}</span>
      {props.backgroundColor}
    </div>
  );
}

export default Planet;
