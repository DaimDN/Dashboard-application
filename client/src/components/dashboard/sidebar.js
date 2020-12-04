import React from 'react'
import './sidebar.css';

export default function Sidebar() {
    return (
        <div>
            <div class="sidebar-wrapper" id="sidebar-wrapper">
        <ul class="nav">
          <li class="active x ">
            <a href="./dashboard.html">
              <i class="now-ui-icons design_app"></i>
              <p className="x">Dashboard</p>
            </a>
          </li>
          <li className="x">
            <a href="./icons.html">
              <i class="now-ui-icons education_atom"></i>
              <p  className="x">Icons</p>
            </a>
          </li>
          <li className="x">
            <a href="./map.html">
              <i class="now-ui-icons location_map-big"></i>
              <p  className="x">Maps</p>
            </a>
          </li>
          <li className="x">
            <a href="./notifications.html">
              <i class="now-ui-icons ui-1_bell-53"></i>
              <p  className="x">Notifications</p>
            </a>
          </li>
          <li className="x">
            <a href="./user.html">
              <i  className="x" class="now-ui-icons users_single-02"></i>
              <p  className="x">User Profile</p>
            </a>
          </li>
          <li className="x">
            <a href="./tables.html">
              <i  className="x" class="now-ui-icons design_bullet-list-67"></i>
              <p  className="x">Table List</p>
            </a>
          </li>
          <li className="x">
            <a href="./typography.html">
              <i  className="x" class="now-ui-icons text_caps-small"></i>
              <p  className="x">Typography</p>
            </a>
          </li>
          
        </ul>
      </div>
        </div>
    )
}
