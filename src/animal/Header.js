import Login from "./Login";


function Header(){
    function handleClick(e){
        e.preventdefault();
       return(
           <Login/>
       )

    }
    return(
        <div className="header">
            <h1>ANIMAL</h1>
            <div className="menu">
                <ul className="menu-header">
                    <li><a href> <i className="fa fa-home" /> HOME</a></li>
                    <li><a href="list_animal" >A-Z ANIMAL</a></li>
                    <li><a href>EXTINCT ANIMALS</a></li>
                    <li className="subnav">
                    <a className="subnav-a" href>ACCOUNT <i className="fa fa-caret-down" /></a>
                    <div className="subnav-content">
                        <a href="#">Name</a>
                        <a href="#">Email</a>
                        <a href="#" onClick={handleClick} >LOGOUT</a>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;