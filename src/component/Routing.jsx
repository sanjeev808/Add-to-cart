import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Dashboard/DashBoard.jsx";
import SideBar from "./Dashboard/SideBar.jsx";
import Content from "./Dashboard/Content.jsx";
import Attendance from './Attendance/Attendance.jsx';
import PayRolls from "./payrolls/PayRolls.jsx";
// import PayRolls  from './payRolls/PayRolls.jsx';
import SalarySlip from "./payrolls/SalarySlip.jsx";
// import EmployeeDocument from "./EmployeeDocument/AddUsers.jsx";
import Complaint from "./Complaint/Complaint.jsx";
import Events from "./Event/Events.jsx";
import NewHiring from "./NewHiring/NewHiring.jsx";
// HEAD
import NavBars from "./EmployeeDocument/Navbars.jsx";
import AddUsers from "./EmployeeDocument/AddUsers.jsx";
import Update from "./EmployeeDocument/Update.jsx";
import AllUsers from "./EmployeeDocument/AllUsers.jsx"
import View from "./EmployeeDocument/View"
import  Notfound from "./EmployeeDocument/Notfound.jsx"


import ViewComplaintDetail from "./Complaint/ViewComplaintDetail.jsx";



export default function Routing() {
  return (
    <div>


      <BrowserRouter>
        <DashBoard />
        <div style={{ display: "flex" }}>
          <SideBar />
          <Routes>
            <Route exact path="/" element={<Content />} />
            <Route path="/hr-attendance" element={<Attendance />} />
            <>
            <Route path="/hr-employeedocument/view/:id" element={<View/>}/>
            <Route path="/hr-employeedocument" element={<AllUsers />}/>
            <Route path="/hr-employeedocument/add" element={<AddUsers />}/>
            <Route path="/hr-employeedocument/edit/:id" element={<Update/>}/>
            </>
            <Route path="/hr-payrolls" element={<PayRolls />} />
            <Route path="/payrolls/salaryslip" element={<SalarySlip />} />
            <Route path="/payrolls/salaryslip/generate" element={<SalarySlip />} />
            <Route path="/hr-complaint" element={<Complaint />} />
            {/* <Route path="/complaint/View_detail" element={<ViewComplaintDetail />} /> */}
            <Route path="/complaint/View_detail/complaint_detail/:id" element={<ViewComplaintDetail />} />
            <Route path="/hr-events" element={<Events />} />
            <Route path="/hr-hiring" element={<NewHiring />} />
            <Route  element = {<Notfound/>} />
            


          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}
