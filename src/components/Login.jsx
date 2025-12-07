import { useState } from "react";
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [massage, setMassage] = useState(""); 
    function handleSubmit(e) {
        e.preventDefault();
        let storedEmail = localStorage.getItem("email");
        let storedPassword = localStorage.getItem("password");    
        if (email === storedEmail && password === storedPassword) {
            setMassage("Login Successful");
        } else {
            setMassage("Invalid email or password");
        }   
    }
    return (
        <>
            <main className="w-full h-screen bg-[#E3E3E3] flex justify-center items-center ">       
                <form onSubmit={handleSubmit} className="w-auto sm:w-1/3 bg-[#1B3C53] p-6 rounded-2xl shadow-lg text-[#E3E3E3] flex flex-col gap-2 justify-center items-center">
                    <h2 className="text-3xl font-semibold mb-3 ">Login</h2>
                    <p>{massage}</p>
                    <input type="email" placeholder="enter your email" id="login-email" className="focus:outline-none  py-2 rounded-lg pl-2 w-full bg-[#456882] " onChange={(e) => setEmail(e.target.value)} /><br />
                    <input type="password" placeholder="enter your password" id="login-password" className="focus:outline-none  py-2 rounded-lg pl-2 w-full bg-[#456882] " onChange={(e) => setPassword(e.target.value)} /> <br />
                    <input type="submit" value="Login" className="bg-[#234C6A] border-[#E3E3E3] border-[1px] px-7 py-2.5 cursor-pointer font-medium hover:bg-[#E3E3E3] hover:text-[#1B3C53] rounded-lg transition duration-500" />
                </form>
            </main>
        </>
    );
}
export default Login;
