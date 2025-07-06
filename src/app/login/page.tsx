// 'use client';

// import { useState, useEffect } from 'react';
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   updateProfile,
//   signInWithPopup,
//   GoogleAuthProvider,
//   sendPasswordResetEmail,
//   onAuthStateChanged,
// } from 'firebase/auth';
// import { useRouter } from 'next/navigation';
// import { auth } from '../lib/firebase';

// export default function AuthPage() {
//   const router = useRouter();
//   const [isLogin, setIsLogin] = useState(true);
//   const [isResetting, setIsResetting] = useState(false);
//   const [email, setEmail] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const [resetLoading, setResetLoading] = useState(false);
//   const [resetSent, setResetSent] = useState(false);

//   // Redirect if already signed in
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         router.replace('/templates');
//       }
//     });
//     return () => unsubscribe();
//   }, [router]);

//   const handleAuth = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       if (!isLogin) {
//         if (!agreeTerms) {
//           alert('Please agree to the terms and conditions.');
//           return;
//         }
//         if (password !== confirmPassword) {
//           alert('Passwords do not match.');
//           return;
//         }
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         await updateProfile(userCredential.user, { displayName: fullName });
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//       }
//       router.replace('/templates');
//     } catch (err: any) {
//       alert(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleLogin = async () => {
//     if (googleLoading) return;
//     setGoogleLoading(true);
//     try {
//       const provider = new GoogleAuthProvider();
//       await signInWithPopup(auth, provider);
//       router.replace('/templates');
//     } catch (err: any) {
//       if (err.code !== 'auth/cancelled-popup-request') {
//         alert(err.message);
//       }
//     } finally {
//       setGoogleLoading(false);
//     }
//   };

//   const handlePasswordReset = async () => {
//     if (!email) {
//       alert('Please enter your email address.');
//       return;
//     }
//     setResetLoading(true);
//     try {
//       await sendPasswordResetEmail(auth, email);
//       setResetSent(true);
//     } catch (err: any) {
//       alert(err.message);
//     } finally {
//       setResetLoading(false);
//     }
//   };

//   const toggleAuthMode = (mode: boolean) => {
//     setIsLogin(mode);
//     setIsResetting(false);
//     setGoogleLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#e0f2ff] to-[#f5f7ff] px-4 overflow-hidden">
//       {/* Background Graphic */}
//       <div className="absolute inset-0 z-0">
//         <svg
//           className="absolute -top-20 -left-20 opacity-40 blur-[100px]"
//           width="700"
//           height="700"
//           viewBox="0 0 700 700"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle cx="350" cy="350" r="300" fill="url(#grad1)" />
//           <defs>
//             <radialGradient id="grad1" cx="0" cy="0" r="1" gradientTransform="rotate(45)">
//               <stop offset="0%" stopColor="#8A3FFC" />
//               <stop offset="100%" stopColor="#4F82FF" />
//             </radialGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Auth Form */}
//       <div className="z-10 w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
//         <h2 className="text-3xl font-extrabold text-center text-[#4F82FF] mb-6">
//           {isResetting
//             ? 'Reset Your Password'
//             : isLogin
//             ? 'Sign In to DMI.ai'
//             : 'Register for DMI.ai'}
//         </h2>

//         {isResetting ? (
//           resetSent ? (
//             <p className="text-center text-green-600 mb-4">
//               A password reset link has been sent to your email.
//             </p>
//           ) : (
//             <>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F82FF] mb-4"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button
//                 onClick={handlePasswordReset}
//                 disabled={resetLoading}
//                 className={`w-full py-2 text-white rounded-lg transition-all mb-4 $
//                   resetLoading
//                     ? 'bg-gray-400 cursor-not-allowed'
//                     : 'bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] hover:opacity-90'
//                 }`}
//               >
//                 {resetLoading ? 'Sending...' : 'Send Reset Link'}
//               </button>
//               <p className="text-center text-sm text-gray-600">
//                 <button onClick={() => setIsResetting(false)} className="text-[#4F82FF] hover:underline">
//                   Back to {isLogin ? 'Sign In' : 'Register'}
//                 </button>
//               </p>
//             </>
//           )
//         ) : (
//           <>
//             <form onSubmit={handleAuth} className="space-y-4">
//               {!isLogin && (
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F82FF]"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                 />
//               )}
//               <input
//                 type="email"
//                 placeholder="Email"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F82FF]"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F82FF]"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               {isLogin && (
//                 <p className="text-right text-sm">
//                   <button onClick={() => setIsResetting(true)} className="text-[#4F82FF] hover:underline">
//                     Forgot Password?
//                   </button>
//                 </p>
//               )}

//               {!isLogin && (
//                 <>
//                   <input
//                     type="password"
//                     placeholder="Confirm Password"
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F82FF]"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                   />
//                   <label className="flex items-center space-x-2 text-sm text-gray-700">
//                     <input
//                       type="checkbox"
//                       checked={agreeTerms}
//                       onChange={(e) => setAgreeTerms(e.target.checked)}
//                     />
//                     <span>
//                       I agree to the{' '}
//                       <a href="#" className="text-[#4F82FF] underline">
//                         Terms & Conditions
//                       </a>
//                     </span>
//                   </label>
//                 </>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full py-2 text-white rounded-lg transition-all ${
//                   loading
//                     ? 'bg-gray-400 cursor-not-allowed'
//                     : 'bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] hover:opacity-90'
//                 }`}
//               >
//                 {loading
//                   ? isLogin
//                     ? 'Signing in...'
//                     : 'Registering...'
//                   : isLogin
//                   ? 'Sign In'
//                   : 'Register'}
//               </button>
//             </form>

//             {/* Divider */}
//             <div className="my-4 flex items-center justify-center text-gray-400 text-sm">
//               <div className="w-full border-t border-gray-300" />
//               <span className="mx-2">or</span>
//               <div className="w-full border-t border-gray-300" />
//             </div>

//             {/* Google Auth */}
//             <button
//               onClick={handleGoogleLogin}
//               disabled={googleLoading}
//               className={`w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 transition ${
//                 googleLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
//               }`}
//             >
//               <img
//                 src="https://www.svgrepo.com/show/475656/google-color.svg"
//                 alt="Google"
//                 className="h-5 w-5"
//               />
//               <span>{googleLoading ? 'Signing in...' : 'Continue with Google'}</span>
//             </button>

//             {/* Switch */}
//             <p className="text-center text-sm text-gray-600 mt-6">
//               {isLogin ? (
//                 <>
//                   Don't have an account?{' '}
//                   <button
//                     onClick={() => toggleAuthMode(false)}
//                     className="text-[#4F82FF] font-medium hover:underline"
//                   >
//                     Register
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   Already have an account?{' '}
//                   <button
//                     onClick={() => toggleAuthMode(true)}
//                     className="text-[#4F82FF] font-medium hover:underline"
//                   >
//                     Sign In
//                   </button>
//                 </>
//               )}
//             </p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }



'use client';

import { useState, useEffect, useRef } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../lib/firebase';

export default function AuthPage() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [isResetting, setIsResetting] = useState(false);
  const [usePhoneAuth, setUsePhoneAuth] = useState(false);

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<any>(null);

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const recaptchaVerifier = useRef<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/templates');
      }
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (!recaptchaVerifier.current) {
      recaptchaVerifier.current = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
        callback: () => {
          console.log('reCAPTCHA solved');
        },
      });
      recaptchaVerifier.current.render().catch((err: any) => {
        console.error('reCAPTCHA render error:', err);
      });
    }
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    // Phone Auth
    if (usePhoneAuth) {
      const formattedPhone = `+91${phoneNumber.trim()}`;

      if (!formattedPhone.match(/^\+91\d{10}$/)) {
        setErrorMessage('Please enter a valid 10-digit Indian phone number.');
        setLoading(false);
        return;
      }

      try {
        if (!confirmationResult) {
          const result = await signInWithPhoneNumber(auth, formattedPhone, recaptchaVerifier.current);
          setConfirmationResult(result);
        } else {
          if (!verificationCode) {
            setErrorMessage('Please enter the verification code.');
            return;
          }
          await confirmationResult.confirm(verificationCode);
          router.replace('/templates');
        }
      } catch (err: any) {
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
      return;
    }

    // Email/Password Auth
    try {
      if (!isLogin) {
        if (!agreeTerms) {
          setErrorMessage('Please agree to the terms and conditions.');
          return;
        }
        if (password !== confirmPassword) {
          setErrorMessage('Passwords do not match.');
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: fullName });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.replace('/templates');
    } catch (err: any) {
      if (err.code === 'auth/user-not-found') {
        setErrorMessage('No user found with this email.');
      } else if (err.code === 'auth/wrong-password') {
        setErrorMessage('Incorrect password.');
      } else {
        setErrorMessage(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    setResetLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (err: any) {
      setErrorMessage(err.message);
    } finally {
      setResetLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (googleLoading) return;
    setGoogleLoading(true);
    setErrorMessage('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.replace('/templates');
    } catch (err: any) {
      if (err.code !== 'auth/cancelled-popup-request') {
        setErrorMessage(err.message);
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const toggleAuthMode = (mode: boolean) => {
    setIsLogin(mode);
    setIsResetting(false);
    setUsePhoneAuth(false);
    setConfirmationResult(null);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#e0f2ff] to-[#f5f7ff] px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg className="absolute -top-20 -left-20 opacity-40 blur-[100px]" width="700" height="700" viewBox="0 0 700 700" fill="none">
          <circle cx="350" cy="350" r="300" fill="url(#grad1)" />
          <defs>
            <radialGradient id="grad1" cx="0" cy="0" r="1" gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#8A3FFC" />
              <stop offset="100%" stopColor="#4F82FF" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="z-10 w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center text-[#4F82FF] mb-6">
          {isResetting ? 'Reset Your Password' : isLogin ? 'Sign In to DMI.ai' : 'Register for DMI.ai'}
        </h2>

        {errorMessage && <p className="text-red-600 text-sm text-center mb-4">{errorMessage}</p>}
        {isResetting ? (
          resetSent ? (
            <p className="text-green-600 text-center mb-4">A password reset link has been sent to your email.</p>
          ) : (
            <>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button onClick={handlePasswordReset} disabled={resetLoading} className={`w-full py-2 text-white rounded-lg ${resetLoading ? 'bg-gray-400' : 'bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF]'}`}>
                {resetLoading ? 'Sending...' : 'Send Reset Link'}
              </button>
              <p className="text-center text-sm text-gray-600 mt-4">
                <button onClick={() => setIsResetting(false)} className="text-[#4F82FF] hover:underline">Back to {isLogin ? 'Sign In' : 'Register'}</button>
              </p>
            </>
          )
        ) : (
          <>
            <form onSubmit={handleAuth} className="space-y-4">
              {!isLogin && !usePhoneAuth && (
                <input type="text" placeholder="Full Name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              )}

              {usePhoneAuth ? (
                <>
                  <input type="tel" placeholder="Phone Number (10-digit)" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                  {confirmationResult && (
                    <input type="text" placeholder="Verification Code" className="w-full px-4 py-2 border border-gray-300 rounded-lg" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                  )}
                </>
              ) : (
                <>
                  <input type="email" placeholder="Email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" placeholder="Password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                  {isLogin && (
                    <p className="text-right text-sm">
                      <button type="button" onClick={() => setIsResetting(true)} className="text-[#4F82FF] hover:underline">Forgot Password?</button>
                    </p>
                  )}
                  {!isLogin && (
                    <>
                      <input type="password" placeholder="Confirm Password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                      <label className="flex items-center space-x-2 text-sm text-gray-700">
                        <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
                        <span>I agree to the <a href="#" className="text-[#4F82FF] underline">Terms & Conditions</a></span>
                      </label>
                    </>
                  )}
                </>
              )}

              <button type="submit" disabled={loading} className={`w-full py-2 text-white rounded-lg ${loading ? 'bg-gray-400' : 'bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF]'}`}>
                {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Register'}
              </button>
            </form>

            <div className="my-4 flex items-center justify-center text-gray-400 text-sm">
              <div className="w-full border-t border-gray-300" />
              <span className="mx-2">or</span>
              <div className="w-full border-t border-gray-300" />
            </div>

            {!usePhoneAuth && (
              <button onClick={handleGoogleLogin} disabled={googleLoading} className={`w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 ${googleLoading ? 'opacity-50' : 'hover:bg-gray-50'}`}>
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
                <span>{googleLoading ? 'Signing in...' : 'Continue with Google'}</span>
              </button>
            )}

            <p className="text-center text-sm text-gray-600 mt-4">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button onClick={() => toggleAuthMode(!isLogin)} className="text-[#4F82FF] font-medium hover:underline">
                {isLogin ? 'Register' : 'Sign In'}
              </button>
            </p>

            <p className="text-center text-sm text-gray-600 mt-2">
              {usePhoneAuth ? 'Use email instead?' : 'Sign in with phone instead?'}{' '}
              <button onClick={() => { setUsePhoneAuth(!usePhoneAuth); setErrorMessage(''); setConfirmationResult(null); }} className="text-[#4F82FF] font-medium hover:underline">
                {usePhoneAuth ? 'Use Email' : 'Use Phone'}
              </button>
            </p>
          </>
        )}
      </div>

      {/* reCAPTCHA container */}
      <div id="recaptcha-container"></div>
    </div>
  );
}
