import React, { useState } from "react";
import SidebarTwo from "../Sidebar/SidebarTwo";
import NavbarTwo from "../Navbar/NavbarTwo";
import "./DashboardUser.css"

function DashboardUser() {
    const [isopen, setisopen] = useState(false);
    const toggle = () => {
      setisopen(!isopen);
    };
  return (
    <>
      <NavbarTwo toggle={toggle} />
      <SidebarTwo isopen={isopen} toggle={toggle} />
      <div>
        <div className="container-01">
          <div className="row-01">
            <div className="col-01">
              <h1>Hawkzues</h1>
              <p id="para01">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
                odio maiores distinctio numquam esse fugiat inventore cum
                perferendis modi reiciendis repellat nemo, molestiae asperiores
                eveniet officia qui suscipit. Necessitatibus, modi?
              </p>
              <button type="button">Explore</button>
            </div>
          </div>

          <div className="row-02">
            <div className="card card-1">
              {/* <h5>One</h5>
          <p>Lorem ipsum dolor sit amet.</p> */}
            </div>
            <div className="card card-2">
              {/* <h5>One</h5>
          <p>Lorem ipsum dolor sit amet.</p> */}
            </div>
            <div className="card card-3">
              {/* <h5>One</h5>
          <p>Lorem ipsum dolor sit amet.</p> */}
            </div>
            <div className="card card-4">
              {/* <h5>One</h5>
          <p>Lorem ipsum dolor sit amet.</p> */}
            </div>
          </div>
        </div>
        {/* Display user-specific dashboard content */}
      </div>
    </>
  );
}

export default DashboardUser;
