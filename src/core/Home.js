import React from 'react'
import Base from './Base'
import '../styles.css'
const Home = () => {    
    return (
        <Base title="Home Page">            
            <div>
                <h1 className="text-center">Welcome To My Website</h1>
                <h3 className="text-center">Connect To the world and Enjoy the life</h3>
                <br/><br/>
                <div class="row">
                    <div class="col">
                        <div className="card" >
                            <div className="card-body">
                                <h5 clasName="card-title text-center">Dummy Account</h5>                        
                                <p clasName="card-text">Email : dd@g.com</p> 
                                <p clasName="card-text">Password : xzsawq</p> 
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card" >
                            <div className="card-body">
                                <h5 clasName="card-title text-center">Dummy Account</h5>                        
                                <p clasName="card-text">Email : sac@g.com</p> 
                                <p clasName="card-text">Password : xzsawq</p> 
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className="card" >
                            <div className="card-body">
                                <h5 clasName="card-title text-center">Dummy Account</h5>                        
                                <p clasName="card-text">Email : ani@g.com</p> 
                                <p clasName="card-text">Password : xzsawq</p> 
                            </div>
                        </div>
                    </div>                    
                </div>
                <br/><br/>
                <h5 className="text-center">Friend Suggestions are based of friends of friends</h5>
                <h3 className="text-center">Passwords for all other accounts are also same</h3>
                <h3 className="text-center">Email can be found in All Users tab</h3>
            </div>            
        </Base>
    )
}

export default Home
