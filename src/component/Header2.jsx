function Header2() {
  return (
    //this is a component
    <div>
      <div className="container text-center move">
        <div className="row">
          <div className="col-6">
            <img src="workpics.jpg" />
            <p className="dollar">$100.00</p>
            <button className="butClick3">Order Now</button>
          </div>
          <div className="col-6">
            <img src="workpics.jpg" />
            <p className="dollar">$80.00</p>
            <button className="butClick3">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header2;
