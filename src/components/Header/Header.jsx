const buttonOnClick = () => {
  location.href = "https://www.dafk.net/what/";
};

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <div className="contentContainer">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
            massa sit amet augue consectetur ullamcorper non ac massa.
          </p>
          <button onClick={buttonOnClick}>Button</button>
        </div>
        <div className="imageContainer">
          <img src="images/header_img.svg" alt="Header" />
        </div>
      </div>
    </header>
  );
};

export default Header;
