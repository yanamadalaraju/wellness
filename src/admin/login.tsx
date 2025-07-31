// import React, { useState } from 'react';
// import axios from 'axios';

// const Login: React.FC = () => {
//   const [form, setForm] = useState({ email: '', password: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/login', form);
//       alert(res.data.message);
//     } catch (err: any) {
//       alert(err.response.data.message || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Login: React.FC = () => {
//   const [form, setForm] = useState({ email: '', password: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/login', form);
//       alert(res.data.message);
//     } catch (err: any) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-400 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-sm text-center text-gray-600">
//           Don’t have an account? <a href="/register" className="text-indigo-600 font-semibold hover:underline">Register</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login: React.FC = () => {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const navigate = useNavigate(); // Hook for navigation

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/login', form);
//       alert(res.data.message);
//       // Redirect to /customers after successful login
//       navigate('/customers');
//     } catch (err: any) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-400 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-sm text-center text-gray-600">
//           Don't have an account? <a href="/register" className="text-indigo-600 font-semibold hover:underline">Register</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = form;

    // Static credentials check
    if (email === 'admin@gmail.com' && password === 'admin@123') {
      alert('Login successful!');
      navigate('/customers');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-400 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-indigo-600 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
