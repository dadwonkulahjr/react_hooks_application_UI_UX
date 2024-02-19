function PhoneBook() {
  return (
    <div>
      <div className="row border py-6">
        <div className="col-12 py-4">
          <div className="text-center mb-3 h2 text-success">
            Phonebook application
          </div>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Name...."
            // onChange={handleNewTask}
          />
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Phone number...."
            // onChange={handleNewTask}
          />
        </div>
      </div>
    </div>
  );
}
export default PhoneBook;
