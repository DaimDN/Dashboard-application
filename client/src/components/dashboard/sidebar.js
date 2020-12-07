import React from 'react'
import './sidebar.css';

export default function Sidebar() {
    return (
        <div style={{marginTop: '10px'}}>
        <hr/>
        <br/>
            <div class="sidebar-wrapper" id="sidebar-wrapper">
        <ul class="nav">
          <li class="active x xactive ndelta ">
            <a href="./dashboard.html">
              <i style={{fontSize: '21px', color: '#2A3EB1'}} class="now-ui-icons design_app"></i>
              <p className="d">Desk</p>
            </a>
          </li>
          <li className="x xactive">
            <a href="./icons.html">
              <i style={{fontSize: '21px', color: '#2A3EB1'}} class="now-ui-icons education_atom"></i>
              <p  className="d">Icons</p>
            </a>
          </li>
          <li className="x xactive">
            <a href="./map.html">
              <i style={{fontSize: '21px', color: '#2A3EB1'}} class="now-ui-icons location_map-big"></i>
              <p  className="d">Maps</p>
            </a>
          </li>
          <li className="x xactive">
            <a href="./notifications.html">
              <i style={{fontSize: '21px', color: '#2A3EB1'}} class="now-ui-icons ui-1_bell-53"></i>
              <p  className="d">Alerts</p>
            </a>
          </li>
          <li className="x xactive">
            <a href="./user.html">
              <i style={{fontSize: '21px', color: '#2A3EB1'}}  className="x" class="now-ui-icons users_single-02"></i>
              <p  className="d">Profile</p>
            </a>
          </li>
          <li className="x xactive">
            <a href="./tables.html">
              <i  style={{fontSize: '21px', color: '#2A3EB1'}} className="x" class="now-ui-icons design_bullet-list-67"></i>
              <p  className="d">List</p>
            </a>
          </li>
          <li className="x xactive">
            <a href="./typography.html">
              <i style={{fontSize: '21px', color: '#2A3EB1'}}  className="x" class="now-ui-icons text_caps-small"></i>
              <p  className="d">Text</p>
            </a>
          </li>
          
        </ul>
       

      </div>
        </div>
    )
}
