function Header() {
  function doSomething() {
    console.log("do something");
  }
  return (
    //this is a component
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img src="workpics.jpg" />
            <p className="dollar">$50.00</p>
            <button className="butClick3">Order Now</button>
          </div>
          <div className="col">
            <p>
              Welcome to Struoma Integrated Services where we cater for a
              complete branding solution. From your corporate logo, business
              card, letter head, website, intranet to digital marketing. We help
              organizations and businesses scale effortlessly
              <br />
              <button className="butClick2" onClick={doSomething}>
                Read more
              </button>
            </p>
          </div>
          <div className="col">
            <img src="workpics.jpg" />
            <p className="dollar">$150.00</p>
            <button className="butClick3">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
