import { color } from 'highcharts'
import React from 'react'
import './dashside.css';
import Drag from '../layout/Drag';





export default function DashSide() {
    const [dock, setDock] = React.useState(false);

    const [notification, setnotification] = React.useState(false);

    const [Task, setTask] = React.useState(false);

    const [Profile, setProfile] = React.useState(false);
    const [Apps, setApps] = React.useState(false);
    return (
        <div className="">
        <div style={{
            position: 'fixed',
            bottom: '0',
            right: '38%',
            zIndex: '100',
            
        }}>
       
       <div style={{margin: 'auto', width: '120%'}}>
       <nav class="navbar navbar-expand-lg gamma"  style={{borderRadius: '30px', backgroundColor: 'rgb(0, 0, 0, 0.8)'}}>
         
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" onClick={()=> setApps(!Apps)} href="#!">
                    <i style={{fontSize: '15px'}} class="fab fa-app-store-ios"></i>
                    </a>
                    <p  className="" style={{color: 'white', fontSize: '9px'}}>Apps</p>
                </li>

                <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="/">
                    <i style={{fontSize: '15px'}} class="fas fa-home"></i>
                    </a>
                    <p  className="" style={{color: 'white', fontSize: '9px'}}>Home</p>
                </li>
               
                <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="#!" onClick={() => setTask(!Task)}>
                    <i style={{fontSize: '15px'}} class="now-ui-icons location_map-big"></i>
                    </a>
                    <p style={{color: 'white', fontSize: '9px'}}>Tasks</p>
                </li>
                <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="#!" onClick={() => setProfile(!Profile)}>
                    <i style={{fontSize: '15px'}}  className="x" class="now-ui-icons users_single-02"></i>
                    </a>
                    <p style={{color: 'white', fontSize: '9px'}}>Profile</p>
                </li>
                <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" onClick={() => setnotification(!notification)} href="#!">
                    <i style={{fontSize: '15px'}} class="now-ui-icons ui-1_bell-53"></i>
                    </a>
                    <p  style={{color: 'white', fontSize: '9px'}}>Notification</p>
                </li>
                <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="/sling">
                    <i style={{fontSize: '18px'}} className="fas fa-rocket" ></i>
                    
                    </a>
                    <p style={{color: 'white', fontSize: '9px'}}>Sling</p>
                </li>
                
                <li class="nav-item v " style={{margin: '0px 20px'}}>
                    <a class="nav-link" href="#!" onClick={() => setDock(!dock)}>
                    <img 
                style={{width:'37px', borderRadius: '50%'}}
                src="https://avatars0.githubusercontent.com/u/17266803?s=460&u=4c801c80490fbe466e6d6a1db2c9f3759c4981e9&v=4"
                alt="New images"
                 />
                    </a>
                </li>
                </ul>
            </div>
            </nav>
       </div>
            
        </div>
        {notification ? (
            
            <div 
            className="w3-animate-zoom"
            style={{
                position: 'fixed',
                width: '85vw',
                height: '30vh',
                backgroundColor: 'rgb(0, 0, 0, 0.8)',
                zIndex: '600',
                borderRadius: '40px'
    
            }}>
            <div style={{padding: '10px', cursor: 'pointer'}}>
            <i onClick={()=> setnotification(false)} style={{color: 'whitesmoke'}} class="fas fa-2x fa-times-circle"></i>
            <br/>
            <h1 className="text-white text-center"> No Notification</h1>
            </div>
            </div>
        ) : (<div></div>)}


        {Apps ? (
            
            <div
            className="w3-animate-zoom"    
             style={{
                position: 'fixed',
                width: '40vw',
                height: '50vh',
                left: '27vw',
                bottom: '120px',
                backgroundColor: 'rgb(0, 0, 0, 0.8)',
                zIndex: '600',
                borderRadius: '40px'
    
            }}>
            <div style={{padding: '10px', cursor: 'pointer'}}>
            <div className="container">
            <ul class="navbar-nav mx-auto">
            
            <div className="row text-white">
            <div className="col-3">
            <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="/sling">
                    <i style={{fontSize: '18px'}} className="fas fa-rocket" ></i>
                    
                    </a>
                    <p style={{color: 'white', fontSize: '10px'}}>Sling</p>
                </li>
           
            </div>
            <div className="col-3">
            <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="/sling">
                    <i style={{fontSize: '18px'}} className="fas fa-rocket" ></i>
                    
                    </a>
                    <p style={{color: 'white', fontSize: '10px'}}>Sling</p>
                </li>
            
            </div>
            <div className="col-3">
            <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="/sling">
                    <i style={{fontSize: '18px'}} className="fas fa-rocket" ></i>
                    
                    </a>
                    <p style={{color: 'white', fontSize: '10px'}}>Sling</p>
                </li>
          
            </div>
            <div className="col-3">
            <li class="nav-item active v text-center" style={{margin: '0px 2px'}}>
                    <a class="nav-link" href="/sling">
                    <i style={{fontSize: '18px'}} className="fas fa-rocket" ></i>
                    
                    </a>
                    <p style={{color: 'white', fontSize: '10px'}}>Sling</p>
                </li>
                
           
            </div>
             </div>
             </ul>
            </div>
            </div>
            </div>
        ) : (<div></div>)}

        {Task? (
            
            <div 
            className="w3-animate-zoom"  
            style={{
                position: 'fixed',
                width: '99vw',
                height: '67vh',
                zIndex: '600',
                borderRadius: '40px'
    
            }}>
            <div style={{padding: '10px', cursor: 'pointer'}}>
            <br/>
            <div style={{marginTop: '-60px'}}>
            <Drag/>
            <Drag/>
            </div>
            </div>
            </div>
        ) : (<div></div>)}

        {Profile? (
            
            <div
            className="w3-animate-zoom"  
             style={{
                position: 'fixed',
                width: '85vw',
                height: '62vh',
                backgroundColor: 'rgb(0, 0, 0, 0.8)',
                zIndex: '600',
                borderRadius: '40px'
    
            }}>
            <div style={{padding: '10px', cursor: 'pointer'}}>
            <i onClick={()=> setProfile(false)} style={{color: 'whitesmoke'}} class="fas fa-2x fa-times-circle"></i>
            <br/>
            <div className="text-center">

            <img 
            style={{width: '16%', borderRadius: '50%'}}
            src="https://avatars0.githubusercontent.com/u/17266803?s=460&u=4c801c80490fbe466e6d6a1db2c9f3759c4981e9&v=4"
                alt="Imags"
            />
            <br/>
            <br/>
            <h1 style={{color: 'white'}}> Hi, I am Daim</h1>
            <h4 style={{color: 'white', lineHeight: '0'}}> A FullStack Developer</h4>
            </div>
           
            </div>
            </div>
        ) : (<div></div>)}

        {dock ? (
            
        <div 
        className="w3-animate-zoom"  
        style={{
            position: 'fixed',
            width: '85vw',
            height: '30vh',
            backgroundColor: 'rgb(0, 0, 0, 0.8)',
            zIndex: '600',
            borderRadius: '40px'

        }}>
        <div style={{padding: '10px', cursor: 'pointer'}}>
        <i onClick={()=> setDock(false)} style={{color: 'whitesmoke'}} class="fas fa-2x fa-times-circle"></i>

        <div className="row">
          <div className="col-3 g text-center">
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/610/610106.svg"
              style={{width: '30%'}}
              alt="nothing"
              className="delta"
               />
               <br/>
               <br/>
              <h5 className="lead" style={{color: 'white', fontWeight: '800'}}>Dashboard</h5>
          </div>
          <div className="col-3 g text-center">
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/3408/3408591.svg"
              style={{width: '30%'}}
              alt="nothing"
              className="delta"
               />
               <br/>
               <br/>
              <h5 className="lead" style={{color: 'white' , fontWeight: '800'}}>Charts</h5>
          </div>
          <div className="col-3 g text-center" > 
          <a href="/graphs">
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/2257/2257295.svg"
              style={{width: '30%'}}
              alt="nothing"
              className="delta"
               />
               <br/>
               <br/>
              <h5 className="lead" style={{color: 'white' , fontWeight: '800'}}>Graphs</h5>
          
          </a>
          </div>
          <div className="col-3 g text-center" > 
          <img
              src="https://www.flaticon.com/svg/static/icons/svg/1828/1828673.svg"
              style={{width: '30%'}}
              alt="nothing"
              className="delta"
               />
               <br/>
               <br/>
              <h5 className="lead" style={{color: 'white' , fontWeight: '800' }}>Projects</h5>
          
          
          </div>
          </div>

        </div>

        </div>
        
        )
        
        : (<div></div>)}
        </div>
    )
}
