import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";


const PopularClasses = () => {
  const [classes,setClasses]=useState([]);
  useEffect(()=>{
    fetch('classes.json')
    .then(res=>res.json())
    .then(data=>{
      const popularClasses=data.filter(pClass=>pClass.numberOfStudents>15);
      setClasses(popularClasses);
    })
  },[])
  console.log(classes);
  return (
    <div>
      <SectionTitle subHeading={'Latest Updates'} heading={'Popular Classes'}></SectionTitle>
      <div className="grid md:grid-cols-3">
        {
          classes.map(pClass=><div key={pClass._id} className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={pClass.classImage} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{pClass.className}</h2>
            <p>{pClass.courseDetails}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Enroll Now</button>
            </div>
          </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default PopularClasses;