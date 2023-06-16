
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import useClasses from "../../../hooks/useClasses";


const PopularClasses = () => {
  const [classes]=useClasses();
    console.log(classes);
    const navigate=useNavigate();

    const handleSelect=()=>{
      navigate('/classes')
    }

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
              <button onClick={handleSelect} className="btn btn-primary">select Class</button>
            </div>
          </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default PopularClasses;