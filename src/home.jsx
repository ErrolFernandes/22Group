
const Home = () =>{
    let Products=[
        {name:'Datamation', address:'/Assets/Datamation.png',id: '001',col:'#EFCEFF80'},
        {name:'Retro', address:'/Assets/Retro.png',id: '002',col:'#FFCECE80'},
        {name:'Eight', address:'/Assets/Eight.png',id: '003',col:'#D2FFCE80'},
        {name:'Eight', address:'/Assets/Eight.png',id: '004',col:'#D2FFCE80'},
        {name:'Datamation', address:'/Assets/Datamation.png',id: '005',col:'#EFCEFF80'},
        {name:'Retro', address:'/Assets/Retro.png',id: '006',col:'#FFCECE80'},
        {name:'Eight', address:'/Assets/Eight.png',id: '007',col:'#D2FFCE80'},
        {name:'Eight', address:'/Assets/Eight.png',id: '008',col:'#D2FFCE80'},
    ]
    return (
        <div className="contentBox">
           
            {Products.map((Prod)=>(
                <div className="insideContentBox" style={{backgroundColor:Prod.col}}>
                <h4>{Prod.id}</h4>
                <div className="image">
                    <img src={Prod.address}></img>
                </div>
                <h5>{Prod.name}</h5>
                </div>
            ))
            }
           
        </div>
    )
}

export default Home