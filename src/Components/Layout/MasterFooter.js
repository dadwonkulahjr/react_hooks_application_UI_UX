const MasterFooter = () => {
  var getCurrentYear = new Date().getFullYear().toString();
  return (
    <footer className="bg-dark fixed-bottom">
      <div>
        All rights reserved dadwonkulahjr &#128522; {getCurrentYear}&#128187;
      </div>
    </footer>
  );
};
export default MasterFooter;

// Code with &#128151;
