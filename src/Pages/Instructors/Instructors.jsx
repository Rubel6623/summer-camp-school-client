import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";

const Instructors = () => {
  const [classes]=useClasses();

  return (
    <div>
      <Helmet>
        <title>Music Guru | Instructor</title>
      </Helmet>
      <div
        className="hero h-96 bg-[url('https://songbook.qodeinteractive.com/wp-content/uploads/2020/05/about-us-title-img-1536x880.jpg')]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p>Dedication to Teaching</p>
            <h2 className="text-5xl font-semibold">MEET THE INSTRACTORS</h2>
            <p className="w-96 mx-auto text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum rhoncus tristique metus, id mattis ante aliquam
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-12">
        {
          classes.map(instructor=><div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={instructor.instructorImage} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{instructor.instructorName}</h2>
            <p>{instructor.instructorEmail}</p>
            <p>{instructor.teachersCategory}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default Instructors;
