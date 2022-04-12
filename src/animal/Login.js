import { useState } from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPass, setErrorPass] = useState('');
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePass(e){
        setPass(e.target.value)
    }
    function handleSubmit(){
        if(email=""){
            setErrorEmail("vui long nhap email")
        }else{
            setErrorEmail("")
        }
        if(pass=""){
            setErrorPass("vui long nhap email")
        }else{
            setErrorPass("")
        }
    }
    return(
        <div className="main">
            <h2>LOGIN</h2>
            <form action className="login" onSubmit={handleSubmit} > 
                <div className="content-login">
                    <p>Email</p>
                    <input className="nhap" type="email" name="email" placeholder="xxx@gmail.com" onChange={handleEmail} />
                    <p>{errorEmail}</p>
                </div>
                <div className="content">
                    <p>Password</p>
                    <input className="nhap" type="password" name="password" placeholder="******" onChange={handlePass} />
                    <p>{errorPass}</p>
                </div>
                <button className="submit" type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;