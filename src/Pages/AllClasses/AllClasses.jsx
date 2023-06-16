import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";


const AllClasses = () => {
  const [classes]=useClasses();
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
        classes.map((allClass,index)=><tr key={allClass._id}
        style={{backgroundColor:allClass.availableSeats==0?'#ffc2c2':''}}
        >
          <th>{index+1}</th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={allClass.classImage}/>
                </div>
              </div>
              <div>
                <div className="font-bold">{allClass.className}</div>
              </div>
            </div>
          </td>
  
          <td>
            {allClass.instructorName}
          </td>
  
          <td>{allClass.availableSeats}</td>
          <td>{allClass.coursePrice}</td>
  
          <th>
            {allClass.availableSeats==0?<button disabled className="btn btn-outline btn-ghost btn-sm">Select</button>:<button className="btn btn-outline btn-success btn-sm">Select</button>}
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