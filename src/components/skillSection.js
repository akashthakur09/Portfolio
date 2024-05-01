// import React from 'react'

// function SkillSection() {
//   return (
//     <div className="skillSection">
//       Skill Section
//     </div>
//   )
// }

// export default SkillSection;
// import React, { useState } from "react";
// import "../App.css";

// const SkillSection = () => {
//   const [showSkills, setShowSkills] = useState(false);

//   const toggleSkills = () => {
//     setShowSkills(!showSkills);
//   };

//   const skills = [
//     {
//       name: "HTML",
//       level: "Expert",
//     },
//     {
//       name: "CSS",
//       level: "Expert",
//     },
//     {
//       name: "JavaScript",
//       level: "Expert",
//     },
//     {
//       name: "React",
//       level: "Expert",
//     },
//     {
//       name: "Python",
//       level: "Intermediate",
//     },
//     {
//       name: "Java",
//       level: "Beginner",
//     },
//   ];

//   return (
//     <div className="skills-container">
//       {/* <h1>My Skills</h1> */}
//       <button onClick={toggleSkills}>
//         {showSkills ? "My Skills" : "My Skills"}
//       </button>
//       {showSkills && (
//         <ul className="skills-list">
//           {skills.map((skill) => (
//             <li key={skill.name} className="skill">
//               <div className="skill-name">{skill.name}</div>
//               <div className="skill-level">{skill.level}</div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SkillSection;
// import React from "react";
// import "../App.css";

// const SkillSection = () => {
//   const skills = [
    // {
    //   name: "HTML",
    //   level: "Expert",
    // },
    // {
    //   name: "CSS",
    //   level: "Expert",
    // },
    // {
    //   name: "JavaScript",
    //   level: "Expert",
    // },
    // {
    //   name: "ReactJs",
    //   level: "Expert",
    // },
    // {
    //   name: "NodeJs",
    //   level: "Expert",
    // },
    // {
    //   name: "Python",
    //   level: "Intermediate",
    // },
    // {
    //   name: "Java",
    //   level: "Beginner",
    // },
    // {
    //   name: "C++",
    //   level: "Expert",
    // },
//   ];

//   return (
//     <div className="skills-container">
//       {/* <h1>My Skills</h1> */}
//       <ul className="skills-list">
//         {skills.map((skill) => (
//           <li key={skill.name} className="skill">
//             <div className="skill-name">{skill.name}</div>
//             <div className="skill-level">{skill.level}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SkillSection;

import React from "react";
import "../App.css";

const SkillSection = () => {
  const skills = [
    {
      name: "HTML",
      level: 90,
      tag:"expert",
    },
    {
      name: "CSS",
      level: 90,
      tag:"expert",
    },
    {
      name: "JavaScript",
      level: 80,
      tag:"expert",
    },
    {
      name: "ReactJs",
      level: 70,
      tag:"Intermediate",
    },
    {
      name: "NodeJs",
      level: 60,
      tag:"Intermediate",
    },
    {
      name: "Python",
      level: 90,
      tag:"beginner",
    },
    {
      name: "Java",
      level: 50,
      tag:"beginner",
    },
    {
      name: "C++",
      level: 95,
      tag:"Expert",
    },
    // Add other skills with their respective percentages
  ];

  return (
    <div className="skills-container">
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.name} className="skill">
            <div className="skill-name" style={{display:"flex",justifyContent:"space-between"}}>
              
              <div>{skill.name}</div>
              <div style={{fontWeight:"lighter"}}>{skill.tag}</div>
              </div>
            
            <div className="skill-level">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
                
              >
                <div className="skill-tag">{`${skill.level}%`}</div>
              </div>
              
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSection;
