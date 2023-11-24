import React from "react";

function Experience({ InstructorExperience }) {
  console.log(InstructorExperience);
  return (
    <div>
      <div className='bg-white my-5 p-4 shadow-md shadow-gray-400 '>
        <div className='text-2xl font-openSansSeven pt-6 pb-4 '>Experience</div>
        {InstructorExperience.length > 0 ? (
          <div className=''>
            {InstructorExperience.map((val, i) => (
              <div
                className='OpenSans font-medium'
                key={i}
                dangerouslySetInnerHTML={{ __html: val.exp }}></div>
            ))}
          </div>
        ) : (
          <div className='h-10 m-2 flex justify-center items-center text-xl text-gray-400'>
            No experience has been added yet
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
