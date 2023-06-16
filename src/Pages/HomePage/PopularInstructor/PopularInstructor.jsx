import SectionTitle from "../../../Components/SectionTitle";
import useClasses from "../../../hooks/useClasses";


const PopularInstructor = () => {
  const [classes]=useClasses(); 

  return (
    <div>
      <SectionTitle subHeading={'Dedicated Teacher'} heading={'Popular Instructors'}></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {
          classes.map(pClass=><div key={pClass._id} className="card card-side bg-base-100 shadow-xl">
          <figure><img className="w-72" src={pClass.instructorImage} alt="Movie"/></figure>
          <div className="card-body">
            <h2 className="card-title">{pClass.instructorName}</h2>
            <p>Take : {pClass.className}</p>
            <p>Education : {pClass.Education}</p>
            <p>Instument: {pClass.Instument}</p>
            <p>Experience : {pClass.Experience}</p>
          </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default PopularInstructor;