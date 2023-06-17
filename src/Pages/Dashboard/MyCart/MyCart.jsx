import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyCart = () => {
  const [cart,refetch]=useCart();
  // reduce function
  // const total=cart.reduce((sum,item)=>item.price+sum,0).toFixed(2);

  const handleDelete=(item)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myClasses/${item._id}`,{
          method:'DELETE'
        })
        .then(res=>res.json()
        .then(data=>{
          if(data.deletedCount>0){
            refetch();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        }))
        
      }
    })
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Music Guru | My Cart</title>
      </Helmet>

      <div className="font-semibold h-[60px] flex justify-evenly items-center uppercase w-full">
        <h3>total Classes : {cart.length}</h3>
        {/* <h3>total Price : ${total}</h3> */}
        
      </div>

      <div className="overflow-x-auto w-full">
    <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Payment</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item,index)=><tr key={item._id}>
          <td>
            {index+1}
          </td>
          <td>

              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={item.classImage} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>

          </td>
          <td>
            {item.className}
          </td>
          <td className=""> {item?.coursePrice}</td>
          <td>
          <button className="btn btn-warning btn-sm">PAY</button>
          </td>
          <td>
          <button onClick={()=> handleDelete(item)} className="btn btn-ghost bg-red-500"><FaTrashAlt className="text-2xl text-white"></FaTrashAlt></button>
          </td>
        </tr>)
      }
    </tbody>
    {/* foot */}
  </table>
      </div>
    </div>
  );
};

export default MyCart;