
const Header = ()=>{
    return (
        <div className="Header">
        <h1>to do</h1>
        <img src="./public/images/icon-sun.svg" alt="sun icon activate light mode"/>
        <input type="text" placeholder="Create a new todo..." maxLength="50"/>
        </div>
    )
}

export default Header