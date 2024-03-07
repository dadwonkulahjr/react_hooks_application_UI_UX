export default function CustomApiHelper(props) {
  return (
    <>
      <div className="col col-12 col-md-12 col-lg-12">
        <button
          className="btn btn-primary form-control"
          onClick={props.handleOnClick}
        >
          Generate Cat Fact
        </button>
        <button className="btn btn-secondary rounded form-control mt-2">
          {props.apiData.length > 0 ? (
            props.apiData
          ) : (
            <span className="h4">Loading...</span>
          )}
        </button>
      </div>
    </>
  );
}
