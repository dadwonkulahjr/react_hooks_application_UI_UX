import Employee from "./Employee";

const User = (props) => {
  return (
    <div className="row">
      <div className="col-12 text-warning mt-3 h3">
        <span>Name: {props.name}</span>
        <br />
        <span>Email: {props.email}</span>
        <br />
        <span>
          {props.age === undefined ? "" : "Age: " + props.age + "years old!"}
        </span>
        <br />
        <br />
      </div>
      {/* <div className="col-12 col-lg-5">
        <Employee
          name="Mike Simson"
          position="Frontend Developer"
          introText="Hi my name is Mike Simson and I am an experienced Frontend developer, with 5years of experienced!"
          salary={450000}
          company="Facebook"
        />
        <Employee
          name="Sara Walker"
          position="Backend Developer"
          introText="Hi my name is Sara Walker and I am an experienced Backend developer, with 20years of experienced!"
          salary={100000}
          company="Google"
        />
      </div> */}
    </div>
  );
};
export default User;
