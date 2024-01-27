function Header(props) {
    return (
      <div>
        <header>
          <h1 className="m-3">Benjamin Berkowitz</h1>
          {/* props.children refers to the Nav bar, since it is embedded in the Header component in the App.jsx file */}
          {props.children}
        </header>
      </div>
    )
  }
  
  export default Header