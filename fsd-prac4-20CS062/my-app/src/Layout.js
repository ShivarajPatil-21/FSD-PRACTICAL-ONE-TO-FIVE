// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <nav style={{
//        backgroundColor:'black'
//       }}>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contactus">Contact US</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;

import { render } from "react-dom";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{
       backgroundColor:'black',
       padding:40, 
      }}>
        <span> <Link to="/" style={{fontFamily:'verdana', margin:20,textAlign:'left', textDecoration:'none',color:'white', fontWeight:'bold'}}>Home</Link></span>
        <span> <Link to="/about" style={{fontFamily:'verdana', margin:20,textAlign:'left', textDecoration:'none',color:'white',fontWeight:'bold'}}>About</Link></span>
        <span><Link to="/contactus" style={{fontFamily:'verdana', margin:20,textAlign:'left', textDecoration:'none',color:'white',fontWeight:'bold'}}>Contact US</Link></span>  
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;