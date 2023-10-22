const LoginStaus =(status)=>{

    if(status){
        return <button>log out</button>
    }
    else{
        return <button>Log in</button>
    }
}


function Conditional(){
    return(
        <div>
            <h1>this is Conditional rendering</h1>
        <h1>login status btn</h1>
        {LoginStaus(false)}
        </div>
    )
}


export default Conditional