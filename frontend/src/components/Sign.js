// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Google from "./GoogleLink";

// export default function Example() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [emptyEmailPassErr, setEmptyEmailPassErr] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setEmailError("");
//     setPasswordError("");
//     const loginDetails = { email, password };
//     // console.log(email)
//     // console.log(password)

//     fetch("https://shoes-website-backend.vercel.app/user/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify(loginDetails),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (!data.token) {
//           navigate("/login");
//         }
//         if (data.EmailPassword) {
//           setEmptyEmailPassErr(data.EmailPassword);
//           return;
//         }
//         if (data.passwordError || data.userError) {
//           setPasswordError(data.passwordError);
//           setEmailError(data.userError);
//           return;
//         } else {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem("user", JSON.stringify(data.user));
//           navigate("/");
//         }
//       });
//   };
//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <img
//             alt="Your Company"
//             src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//             className="mx-auto h-10 w-auto"
//           />
//           <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form noValidate className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm/6 font-medium text-gray-900"
//               >
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   value={email}
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   onChange={(event) => setEmail(event.target.value)}
//                 />
//                 <div id="emailHelp" className="form-text">
//                   {emailError && (
//                     <p className="alert alert-danger">{emailError}</p>
//                   )}
//                   {emptyEmailPassErr && (
//                     <p className="alert alert-danger">{emptyEmailPassErr}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   Password
//                 </label>
//                 {/* <div className="text-sm">
//                   <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                     Forgot password?
//                   </a>
//                 </div> */}
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//                   value={password}
//                   onChange={(event) => setPassword(event.target.value)}
//                 />
//                 {passwordError && (
//                   <p className="alert alert-danger">{passwordError}</p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm/6 text-gray-500">
//             Don't have an account?{" "}
//             <a
//               href="#"
//               className="font-semibold text-indigo-600 hover:text-indigo-500"
//             >
//               click here to sign up
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   );u
// }
