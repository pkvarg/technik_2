// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Image from 'next/image';
// import { AiOutlineSend } from 'react-icons/ai';
// import toast from 'react-hot-toast';

// const WhatsApp = () => {
//   const [sender, setSender] = useState('');
//   const [message, setMessage] = useState('');
//   const [text, setText] = useState('');
//   const [showForm, setShowForm] = useState(false);

//   const x = process.env.NEXT_PUBLIC_EMAIL_EXTRA_ONE;
//   const y = process.env.NEXT_PUBLIC_EMAIL_EXTRA_TWO;
//   const [passwordGroupOne, setPasswordGroupOne] = useState(x);
//   const [passwordGroupTwo, setPasswordGroupTwo] = useState(y);

//   useEffect(() => {
//     setText(message + ' ' + sender);
//   }, [sender, message]);

//   const whatsMessage = async (e: any) => {
//     e.preventDefault();
//     if (passwordGroupOne !== x || passwordGroupTwo !== y) {
//       toast.error('Nastala chyba.');
//     } else {
//       try {
//         const res = await axios.put(
//           // 'http://localhost:2000/api/jb/whatssapp',
//           'https://api.pictusweb.com/api/jb/whatssapp',

//           {
//             text,
//           },
//         );

//         console.log(res.data);
//         if (res.data === 'success') {
//           toast.success('Správa bola odoslaná');
//           setShowForm(false);
//           setMessage('');
//           setSender('');
//           setText('');
//         }
//       } catch (error: any) {
//         console.log(error);
//         toast.error(error?.message);
//       }
//     }
//   };
//   return (
//     <div className="relative ml-[20%] mt-[17%]">
//       <div className="flex flex-row items-center gap-2">
//         <Image
//           onClick={() => setShowForm((prev) => !prev)}
//           src={'/whatsapp.png'}
//           alt="whatsapp"
//           width={50}
//           height={50}
//         />
//         <p>Kontakt</p>
//       </div>
//       {showForm && (
//         <form
//           onSubmit={whatsMessage}
//           className="bottom-0 left-[20%] -ml-12 mt-8 flex w-[100%] flex-col lg:absolute lg:w-[50%] lg:flex-row"
//         >
//           <div className="flex w-[100%] flex-col items-center gap-2">
//             <input
//               type="text"
//               placeholder="Vaše číslo vo formáte +421 9xxxxxxx"
//               value={sender}
//               onChange={(e) => setSender(e.target.value)}
//               className="w-[100%] bg-transparent pl-1 text-white"
//               required
//             />
//             <button type="submit" className="hidden cursor-pointer lg:flex">
//               <AiOutlineSend className="text-[25px] text-green-400" />
//             </button>
//           </div>
//           <textarea
//             placeholder="Vaša správa"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="mt-2 h-[150px] w-[100%] bg-transparent pl-1 text-white lg:ml-4 lg:mt-0 lg:h-[75px] lg:w-[250px]"
//             required
//           />
//           <button type="submit" className="mt-6 cursor-pointer lg:hidden">
//             <AiOutlineSend className="ml-[50%] text-[25px] text-green-400 lg:ml-0" />
//           </button>
//           <input
//             className="form-control"
//             type="text"
//             defaultValue={passwordGroupOne}
//             onChange={(e) => setPasswordGroupOne(e.target.value)}
//           />
//           <input
//             className="form-control"
//             type="text"
//             defaultValue={passwordGroupTwo}
//             onChange={(e) => setPasswordGroupTwo(e.target.value)}
//           />
//         </form>
//       )}
//     </div>
//   );
// };

// export default WhatsApp;
