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
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12 col-lg-6">
              <h1>Website-Data</h1>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-center">
              <div className="shadow rounded border-0 p-3 col-lg-12">
              
                <h1 className="text-center bg-light p-1 rounded fw-bold position-relative">
                  User-Info 
                  <button className="btn btn-success btn-sm fs-6 position-absolute top-50 end-0 translate-middle-y me-2" data-bs-toggle="modal" data-bs-target="#personalInfo">
                  Edit-info     
                  </button>
                </h1>

                <hr />
                <p className="fs-4"><b>Name: </b> <span className="text-muted">{user.name}</span> </p>
                <p className="fs-4"><b>Email: </b> <span className="text-muted">{user.email}</span> </p>
                <p className="fs-4"><b>Contact-No: </b> <span className="text-muted">{user.phone}</span> </p>
                <p className="fs-4"><b>Address: </b> <span className="text-muted">{user.address}</span> </p>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
