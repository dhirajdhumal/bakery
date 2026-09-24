import React, { useRef, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("LoggedInUser")));

  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const addRef = useRef();

  function handleUpdate(e) {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name: nameRef.current.value || user.name,
      email: emailRef.current.value || user.email,
      phone: contactRef.current.value || user.phone,
      address: addRef.current.value || user.address
    };

    //update LoggedInUser
    localStorage.setItem("LoggedInUser", JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem("users")) || [];

  // 3. Find current user and update it
  const updatedUsers = users.map((u) => {
    if (u.email === user.email) {
      return updatedUser;
    }

    return u;
  });

  // 4. Save updated users
  localStorage.setItem(
    "users",
    JSON.stringify(updatedUsers)
  );


    setUser(updatedUser);

    alert("Profile Updated Successfully");


  }

  return (
    <>
      <div className="container-fluid">
        <div className="container rounded p-3 mt-5">
          <div className="row">
            
            <div className="col-md-12 col-lg-6 d-flex justify-content-center">
              <div className="shadow rounded border-0 p-3 col-md-12 col-lg-12">
              
                <h1 className="text-center bg-light p-1 rounded fw-bold position-relative">
                  User-Info 
                  <button className="btn btn-warning btn-sm fs-6 position-absolute top-50 end-0 translate-middle-y me-2" data-bs-toggle="modal" data-bs-target="#personalInfo">
                  Edit-info     
                  </button>
                </h1>

                <hr />
                <p className="fs-5"><b>Name: </b> <span className="text-muted">{user.name}</span> </p>
                <p className="fs-5"><b>Email: </b> <span className="text-muted">{user.email}</span> </p>
                <p className="fs-5"><b>Contact-No: </b> <span className="text-muted">{user.phone}</span> </p>
                <p className="fs-5"><b>Address: </b> <span className="text-muted">{user.address}</span> </p>

                {/* Edit Info Model */}
                <div className="modal" id="personalInfo">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title text-center w-100 fw-bold">Edit Personal Informatifvfon</h5>
                        <button type="button" className="btn-close btn btn-dark" data-bs-dismiss="modal"></button>
                      </div>
                      <div className="modal-body">
                        <form onSubmit={handleUpdate}>
                          <label htmlFor="name" className="form-label">Name</label>
                          <input type="text" name="" id="name" className="form-control" ref={nameRef} defaultValue={user.name}/>
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" name="" id="email" className="form-control" ref={emailRef} defaultValue={user.email}/>
                          <label htmlFor="mo" className="form-label">Contact-No</label>
                          <input type="number" name="" id="mo" className="form-control" ref={contactRef} defaultValue={user.phone}/>
                          <label htmlFor="add" className="form-label">Address</label>
                          <textarea name="" id="" className="form-control" ref={addRef} defaultValue={user.address}></textarea>
                          <button className="btn btn-success mt-3 w-100 fw-bold fs-3">Save-Details</button>

                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Edit Info Model end */}

              </div>
            </div>
            <div className="col-md-12 col-lg-6 mt-sm-4 mt-4 mt-lg-0 d-flex justify-content-center">
              <div className="shadow rounded p-3 border-0 col-md-12 col-lg-12">
                <h1 className="text-center bg-light p-1 rounded fw-bold">Change Password</h1>
                <hr />  
                <form >
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <label htmlFor="pass" className="form-label fs-5">Last Pass</label>
                      <input type="password" className="form-control mb-2"/>
                      
                      <label htmlFor="rpass" className="form-label fs-5">Re-enter Last Pass</label>
                      <input type="password" className="form-control"/>

                      <button className="mt-4 btn btn-warning">Change Password</button>
                    </div>

                  
                    <div className="col-md-6 col-sm-12 mt-3 mt-sm-3 mt-md-0">
                      <div className="shadow bg-dark text-white p-4 rounded">
                          <h5 className="text-warning fw-bold">Steps to change password</h5>
                          <p>Step 1: Enter your last password</p>
                          <p>Step 2: Re-enter your last password</p>
                          <p>Step 3: Click on Change / Update password button</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            
            </div>
          </div>
    

          <div className="row mt-4">

            <div className="col-4 d-flex align-items-center">
              <p style={{width: "70%",borderTop: "3px solid black"}} className=" w-100"></p>
            </div>

          
            <div className="col-4 d-flex justify-content-center">
              <div className="shadow rounded p-3 bg-secondary">
                <h4 className="fw-bold text-warning">Bakery-Cakery Offers</h4>
                <p className="border-top border-warning"></p>
                <p className="text-white">Offer Starting Date- 10/10/2026</p>
                <p className="text-white" style={{"margin-top": "-10px"}}>Offer Ending Date- 12/10/2026</p>
                <p className="text-center text-white fs-4 fw-bold" style={{"margin-top": "-10px","margin-bottom": "-10px"}}>Time: 10am to 10pm</p>
              </div>
            </div>

            <div className="col-4 d-flex align-items-center">
              <p style={{width: "70%",borderTop: "3px solid black"}} className=" w-100"></p>
            </div>
          </div>
    
      
        </div>
      </div>
    </>
  );
};

export default Profile;
