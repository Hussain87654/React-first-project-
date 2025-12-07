import { useState } from "react"
function SignUp (){
    let [fullName,setFullName]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let [confirmPass,setConfirmPass]=useState("")
    let [massage,setMassage]=useState("")
   

    function handleSubmit (e){
        e.preventDefault()
        if(!fullName || !email || !password || !confirmPass){
            setMassage("All fields are required")
        } 
        else if(password.length < 7){
            setMassage("Password must be at least 7 characters")
        }
        else if(password !== confirmPass){
            setMassage("Password do not match")
        }   
        else{
            localStorage.setItem("fullName",fullName)
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            setMassage("Successfully Signed Up now you can login")

        }



    }

    return (
        <>
        <main className="w-full h-screen bg-[#E3E3E3] flex justify-center items-center ">
            <form onSubmit={handleSubmit}className="w-auto sm:w-1/3 bg-[#1B3C53] p-6 rounded-2xl shadow-lg text-[#E3E3E3] flex flex-col gap-2 justify-center items-center">
                        <h2 className="text-3xl font-semibold mb-3 ">SignUp</h2>
                        <p>{massage}</p>
                        <input  type="text"  placeholder="Your Name"  id="name" className="focus:outline-none  py-2 rounded-lg pl-2 w-full bg-[#456882] " onChange={(e)=> setFullName(e.target.value)}/><br />
                        <input  type="email"  placeholder="example@gmail.com"  id="sign-email" className="focus:outline-none  py-2 rounded-lg pl-2 w-full bg-[#456882] " onChange={(e)=> setEmail(e.target.value)}/><br />
                        <input  type="password" placeholder="Enter yor password"  id="sign-password" className="focus:outline-none  py-2 rounded-lg pl-2 w-full bg-[#456882] " onChange={(e)=> setPassword(e.target.value)}/> <br />

                        <input  type="password" placeholder="Confirm Password"  id="confirm-pass" className="focus:outline-none  py-2 rounded-lg pl-2 w-full bg-[#456882] " onChange={(e)=> setConfirmPass(e.target.value) }/> <br />
                        <input type="submit" value="Sign Up" className="bg-[#234C6A] border-[#E3E3E3] border-[1px] px-7 py-2.5 cursor-pointer font-medium hover:bg-[#E3E3E3] hover:text-[#1B3C53] rounded-lg transition duration-500" />
            </form>
        
        </main>
        </>
    )
   
}
export default SignUp