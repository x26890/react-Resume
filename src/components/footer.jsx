import React  from "react";

function Footer({ name }){
    return(
        <footer className="app-footer">
          <p>© 2026 {name} Portfolio</p>
        </footer>
    );
}

export default Footer;