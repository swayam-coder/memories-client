import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useLocation, useHistory } from 'react-router-dom'

export default function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const logout = () => {
      dispatch({type: "LOGOUT"});
      history.push("/login");
      setUser(null);
    }

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    return (
        <div>
            <header className="p-3 bg-dark text-white">
    <div className="container">
    
    <div className="brandLink d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <NavLink className="brandName" to="/posts"><h2 className="navbar-brand">Memories</h2></NavLink>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 text-white">Your Posts</a></li>
        <li><a href="#" className="nav-link px-2 text-white">Profile</a></li>
      </ul>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
      </form>

      {
        user?.result ? 
        <div class="dropdown text-end">
          {
            (user?.result.imageUrl) ? 
            <a class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={user?.result.imageUrl} alt="mdo" width="32" height="32" class="rounded-circle" />
            </a>
            :
            <a class="d-block text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </a>
          }
          
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><button class="dropdown-item" href="#" onClick={logout}>Sign out</button></li>
          </ul>
        </div>
        :
        <div className="text-end">
          <NavLink to="/login"><button type="button" className="btn btn-outline-light me-2">Login</button></NavLink>
          <NavLink to="/signup"><button type="button" className="btn btn-warning">Sign-up</button></NavLink>
        </div>
      }

      <div class="dropdown">
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>
</header>

        </div>
    )
}
