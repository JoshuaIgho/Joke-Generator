import React from "react";
import "./footer.css"

function Footer(){
    return(
        <>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3   footer">
              <div>
                <span className="mb-3 mb-md-0 text-light">© 2024 Company, Inc</span>
              </div>

              <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-light" href="#"><i className="fab fa-github"></i></a></li>
                <li className="ms-3"><a className="text-light" href="#"><i className="fab fa-instagram"></i></a></li>
                <li className="ms-3"><a className="text-light" href="#"><i className="fab fa-facebook"></i></a></li>
              </ul> 
            </footer>
        </>
    )
}

export default Footer;