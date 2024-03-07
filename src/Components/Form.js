import { useState } from "react";

const Form = (props) => {
  const textString = "Hi, my name is Dad S. Wonkulah Jr";
  const [textColor, setTextColor] = useState(() => {
    return "text-success";
  });
  const handleTextColor = () => {
    setTextColor(
      textColor === "text-success" ? "text-warning" : "text-success"
    );
  };

  return (
    <div className="col-12">
      {<h2 className={textColor}>{textString}</h2>}
      <button onClick={handleTextColor} className="btn btn-success">
        Change Text color
      </button>
    </div>
  );
};
export default Form;

//Handling form data and updating complex objects!
//-----------------------------------------------------

// import { useEffect, useState } from "react";
// // import axios from "axios";
// import PrediateAge from "./PrediateAge";
// import GenerateAnExcuse from "./GenerateAnExcuse";
// import tuse from "../images/Iam_Tuse.jpg";
// import employee from "../images/employees.png";

// export default function ReactStudy() {
//   const [user, setUser] = useState({
//     profesion: {
//       name: "Web developer",
//       salary: 450000.0,
//     },
//     education: {
//       degree: "BSc. IT",
//       gpa: 3.364,
//     },
//     firstName: "Dad",
//     lastName: "Wonkulah",
//     email: "dadwonkulahjr96@gmail.com",
//     imagePath: tuse,
//     skills: {
//       frontEnd: "REACT JS",
//       backEnd: "C# & .NET",
//     },
//   });

//   // function handleChangeFirstName(event) {
//   //   setUser((prevState) => {
//   //     return { ...prevState, firstName: event.target.value };
//   //   });
//   // }

//   // const handleCountWithOutPrevValuesBtnInfo = () => {
//   //   setMyCounter(myCounter + 1);
//   // };

//   // const handleCountWithOutPrevValuesBtnSuccess = () => {
//   //   setMyCounter(myCounter + 1);
//   // };

//   // fetch("https://catfact.ninja/fact")
//   //   .then((res) => res.json())
//   //   .then((data) => {
//   //     console.log(data.fact);
//   //   });
//   // const [catfact, setCatFact] = useState("");

//   // function handleGenerateCatFact() {
//   //   axios.get("https://catfact.ninja/fact").then((res) => {
//   //     setCatFact(res.data.fact);
//   //   });
//   // }
//   // useEffect(() => {
//   //   handleGenerateCatFact();
//   // }, []);
//   return (
//     <>
//       <div className="row border py-3 w-100">
//         <div className="col-12 col-lg-12 col-md-12">
//           <div className="h5 text-center">
//             On Change Event
//             <hr />
//             <div className="row">
//               <div className="col-md-12 col-lg-12 col-12">
//                 Hi, my name is {user.firstName} {user.lastName}!
//                 <br />
//                 This is my email address ({user.email})<br />I am skill in (
//                 {user.skills.backEnd}) for backend & ({user.skills.frontEnd}) on
//                 the Frontend!
//                 <br />I am a professional {user.profesion.name} who is earning $
//                 {user.profesion.salary.toFixed(1)} (usd) monthly,
//                 <br />I hold a {user.education.degree} and graduated with{" "}
//                 {user.education.gpa} GPA!
//               </div>
//             </div>
//             <hr />
//           </div>
//         </div>
//         <div className="col-12 col-lg-12 col-md-12">
//           <div className="row">
//             <div className="col-12 col-lg-4 col-md-4">
//               <label>First name:</label>
//             </div>
//             <div className="col-12 col-lg-8 col-md-8">
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="First name..."
//                 value={user.firstName}
//                 onChange={(e) => {
//                   setUser((prevState) => {
//                     return { ...prevState, firstName: e.target.value };
//                   });
//                 }}
//               />
//             </div>

//             <div className="col-12 col-lg-4 col-md-4">
//               <label>Last name:</label>
//             </div>
//             <div className="col-12 col-lg-8 col-md-8">
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Last name..."
//                 value={user.lastName}
//                 onChange={(e) => {
//                   setUser((prevState) => {
//                     return { ...prevState, lastName: e.target.value };
//                   });
//                 }}
//               />
//             </div>

//             <div className="col-12 col-lg-4 col-md-4">
//               <label>Email:</label>
//             </div>
//             <div className="col-12 col-lg-8 col-md-8">
//               <input
//                 type="email"
//                 className="form-control mb-2"
//                 placeholder="Email..."
//                 value={user.email}
//                 onChange={(e) => {
//                   setUser((prevState) => {
//                     return { ...prevState, email: e.target.value };
//                   });
//                 }}
//               />
//             </div>
//             <div className="col-12 col-lg-4 col-md-4">
//               <label>Backend Languages:</label>
//             </div>
//             <div className="col-12 col-lg-8 col-md-8">
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Backend skill..."
//                 value={user.skills.backEnd}
//                 onChange={(e) => {
//                   setUser((prevState) => {
//                     return {
//                       ...prevState,
//                       skills: {
//                         ...prevState.skills,
//                         backEnd: e.target.value,
//                       },
//                     };
//                   });
//                 }}
//               />
//             </div>
//             <div className="col-12 col-lg-4 col-md-4">
//               <label>Frontend technologies:</label>
//             </div>
//             <div className="col-12 col-lg-8 col-md-8">
//               <input
//                 type="email"
//                 className="form-control mb-2"
//                 placeholder="Frontend technologies..."
//                 value={user.skills.frontEnd}
//                 onChange={(e) => {
//                   setUser((prevState) => {
//                     return {
//                       ...prevState,
//                       skills: {
//                         ...prevState.skills,
//                         frontEnd: e.target.value,
//                       },
//                     };
//                   });
//                 }}
//               />
//             </div>
//             <div className="col-12 col-lg-4 col-md-4">
//               <label>Profession:</label>
//             </div>
//             <div className="col-12 col-lg-8 col-md-8">
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Profession..."
//                 value={user.profesion.name}
//                 onChange={(e) => {
//                   setUser((prevState) => {
//                     return {
//                       ...prevState,
//                       profesion: {
//                         ...prevState.profesion,
//                         name: e.target.value,
//                       },
//                     };
//                   });
//                 }}
//               />
//             </div>
//             <div className="col-12 col-lg-4 col-md-4">
//               <label>Salary:</label>
//             </div>
//             <div className="col-12 col-lg-8 col-md-8">
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Salary..."
//                 value={user.profesion.salary}
//                 onChange={(e) => {
//                   setUser((prevState) => {
//                     return {
//                       ...prevState,
//                       profesion: {
//                         ...prevState.profesion,
//                         salary: e.target.value,
//                       },
//                     };
//                   });
//                 }}
//               />
//             </div>
//             <div className="col-12 col-lg-4 col-md-4">
//               <label>Education:</label>
//             </div>
//             <div className="col-12 col-lg-8 col-md-8">
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Degree..."
//                 value={user.education.degree}
//                 onChange={(e) => {
//                   setUser((prevState) => {
//                     return {
//                       ...prevState,
//                       education: {
//                         ...prevState.education,
//                         degree: e.target.value,
//                       },
//                     };
//                   });
//                 }}
//               />
//             </div>
//             <div className="col-12 col-lg-4 col-md-4">
//               <label>GPA obtained:</label>
//             </div>
//             <div className="col-12 col-lg-8 col-md-8">
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="GPA obtained..."
//                 value={user.education.gpa}
//                 onChange={(e) => {
//                   setUser((prevState) => {
//                     return {
//                       ...prevState,
//                       education: {
//                         ...prevState.education,
//                         gpa: e.target.value,
//                       },
//                     };
//                   });
//                 }}
//               />
//             </div>
//             <div className="row">
//               <div className="text-center col-12 col-lg-12 col-md-12">
//                 <img
//                   className="img-fluid rounded-circle"
//                   src={user.imagePath === null ? employee : user.imagePath}
//                   width={250}
//                 />
//               </div>
//             </div>
//             <div className="row mt-5">
//               <div className="col-md-12 col-12 col-lg-12">
//                 <button className="btn btn-success form-control">Create</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <GenerateAnExcuse /> */}
//       {/* <div className="border mt-5">
//         <div className="text-center h2">
//           User Information
//           <hr />
//         </div>
//         <div className="row text-center mb-4 p-4 m-1">
//           <div className="row">
//             <div className="col-12 col-md-12 col-lg- mt-1">
//               <div className="row">
//                 <div className="col-12 col-md-12 col-lg-12">
//                   <button
//                     className="btn btn-primary form-control"
//                     onClick={handleGenerateCatFact}
//                   >
//                     Generate Cat Fact
//                   </button>
//                   <div className="row">
//                     <div className="col-12 col-md-12 col-lg-12">
//                       <p>{catfact}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row text-center mb-4">
//           <div className="col-12 col-md-12 col-lg-12">Age: </div>
//           <div className="col-12 col-md-12 col-lg-12">Name: </div>
//           <div className="col-12 col-md-12 col-lg-12">Third</div>
//         </div>
//       </div> */}
//     </>
//   );
// }
