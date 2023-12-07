import React from "react";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import HomePage from "./HomePage";
import AdminMenu from "./AdminMenu";
import Login from "./Login";
import UserMenu from "./UserMenu";
import CoffeMenu from "./CoffeMenu";
import PastryMenu from "./PastryMenu";
import UserMenu2 from "./UserMenu2";
import Staff from "./Staff"
import AddingStaff from "./AddingStaff";
import UpdateStaff from "./UpdateStaff";
import AddingCafe from "./AddingCafe";
import UpdateCafe from "./UpdateCafe";
import Reservation from "./Reservation";
function App() {
  return (
<Router>
<div>
  {/* switch pour render une seule route a la fois  */}
    <Routes> 
    <Route path='/' exact Component={HomePage} />
    <Route path='/AdminMenu' Component={AdminMenu}/>
    <Route path='/Login' Component={Login}/>
    <Route path='/UserMenu' Component={UserMenu}></Route>
    <Route path='/UserMenu2' Component={UserMenu2}></Route>
    <Route path='/CoffeMenu' Component={CoffeMenu}></Route>
    <Route path='/PastryMenu' Component={PastryMenu}></Route>
    <Route path='/Staff' Component={Staff}></Route>
    {/*<Route path='/AdminMenu/reservation' Component={reservation}></Route> */}
    <Route path='/AdminMenu/Settings' Component={AdminMenu}></Route>
    <Route path='/AddingStaff' Component={AddingStaff}></Route>
    <Route path='/UpdateStaff/:id'   Component={UpdateStaff}></Route>
    <Route path='/AddingCafe' Component={AddingCafe}></Route>
    <Route path='/UpdateCafe/:id'   Component={UpdateCafe}></Route>
    <Route path="/Reservation" Component={Reservation}></Route>
    </Routes>
   
</div>

</Router>


  );
}

export default App;
