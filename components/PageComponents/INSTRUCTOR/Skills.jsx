import React, { useState } from "react";

// import { CgArrowRight } from "react-icons/cg";
// import { Steps } from "rsuite";

function Skills({
  InstructorSkill
}) {
  const Colors = [
    'rgb(255,0,255)', 'rgb(255,0,0)', 'rgb(128,128,0)', "rgb(128,0,128)",
    "rgb(128,0,0)", 'rgb(0,255,0)', "rgb(0,128,128)", "rgb(0,128,0)",
    "rgb(0,0,255)", "rgb(0,0,128)"
  ]
  // const [step, setStep] = useState(0);
  // const [steped, setSteped] = useState(false);

  // const onChange = (nextStep) => {
  // 	setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  // };
  // const styles = {
  // 	width: "100%",
  // 	display: "inline-table",
  // 	verticalAlign: "top",
  // };
  return (
    <div className='bg-white my-5 shadow-md shadow-gray-400 '>
      <div className='bg-white my-5 p-4 '>
        <div className='text-2xl font-openSansSeven pt-6 pb-2 '>Skills</div>
        {
          InstructorSkill.length > 0 ?
            <div className="flex flex-wrap ">
              {
                InstructorSkill.map((val, i) => {
                  var randomColor = Math.floor(Math.random() * 16777215).toString(16);;
                  let color = '#';
                  color += randomColor;
                  // console.log(randomColor)
                  let skill = val.replaceAll('"', '');
                  skill = skill.replaceAll(/\\/g, "")
                  return <div key={i}
                    style={{
                      border: `1px solid ${color}`,
                      // background:Colors[randomColor],
                      // color:'white'
                    }}
                    className='mx-2 my-2 rounded-full border-gray-300 
                     py-3 px-5 capitalize'>
                    <div>{skill}</div>
                  </div>
                })
              }
            </div> : <div className="h-10 m-2 flex justify-center items-center text-xl text-gray-400">
              No skills has been added yet
            </div>
        }







        {/* skills in step form starts */}
        {/* <div>
					<Steps current={step} vertical style={styles} small>
						<Steps.Item
							className='capitalize font-openSansSeven'
							title='html5'
							icon={
								<div className='border border-gray-400 mx-auto h-4 w-4 rounded-full '></div>
							}
							description='Description'
						/>
						<Steps.Item
							title='css'
							description='Description'
							icon={
								<div className='border border-gray-400 mx-auto h-4 w-4 rounded-full '></div>
							}
						/>
						<Steps.Item
							title='javaScript'
							description='Description'
							icon={
								<div className='border border-gray-400 mx-auto h-4 w-4 rounded-full '></div>
							}
						/>
						<Steps.Item
							title='Php'
							description='Description'
							icon={
								<div className='border border-gray-400 mx-auto h-4 w-4 rounded-full '></div>
							}
						/>
					</Steps>
					<div className='flex my-8 animate-pulse items-center justify-center font-openSansFour'>
						<button className=' '>Show all skills</button>
						<div>
							<CgArrowRight className='w-5 h-5' />
						</div>
					</div>
				</div> */}
        {/* skills in step form ends */}



      </div>
    </div>
  );
}

export default Skills;
