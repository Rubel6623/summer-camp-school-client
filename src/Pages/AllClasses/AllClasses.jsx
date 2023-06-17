import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const AllClasses = () => {
  const [classes]=useClasses();
  const {user}=useAuth();
  const navigate=useNavigate();
  const location=useLocation();
  const [,refetch]=useCart();

  const handleSelect=(selectedClass)=>{
    console.log(selectedClass);

    if(user && user.email){
      const selectClass={
        classId:selectedClass._id,
        className:selectedClass.className,
        classImage:selectedClass.classImage,
        coursePrice:selectedClass.coursePrice,
        email:user.email
      }
      fetch('http://localhost:5000/myClasses',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(selectClass)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class added on the cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    else{
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state:{from:location}})
        }
      })
    }
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All Classes</title>
      </Helmet>

      <h3 className="text-3xl font-semibold my-4">Total Class :{classes.length}</h3>

      <div className="overflow-x-auto">
    <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class Name</th>
        <th>Instructor name</th>
        <th>Available seats</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        classes.map((sClass,index)=><tr key={sClass._id}
        style={{backgroundColor:sClass.availableSeats==0?'#ffc2c2':''}}
        >
          <th>{index+1}</th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={sClass.classImage}/>
                </div>
              </div>
              <div>
                <div className="font-bold">{sClass.className}</div>
              </div>
            </div>
          </td>
  
          <td>
            {sClass.instructorName}
          </td>
  
          <td>{sClass.availableSeats}</td>
          <td>{sClass.coursePrice}</td>
  
          <th>
            {sClass.availableSeats==0?<button disabled className="btn btn-outline btn-ghost btn-sm">Select</button>:<button onClick={()=>handleSelect(sClass)} className="btn btn-outline btn-success btn-sm">Select</button>}
          </th>
  
        </tr>)
      }
    </tbody>    
  </table>
</div>
    </div>
  );
};

export default AllClasses;