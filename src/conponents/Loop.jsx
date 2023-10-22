function Loop(){
    const city = ['dhaka','rajshahi','borisal','nowgawn']
    return(
       
        <div>
            <h1>this is loop</h1>
        {
            city.map((item,i)=>{
                return <li key={i.toString()}>{item}</li>
            })
        }
        </div>
    )
}


export default Loop;