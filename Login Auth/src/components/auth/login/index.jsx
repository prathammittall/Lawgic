import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';

const Login = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                // Redirect to the target page after successful sign-in
                window.location.href = "https://law-files-chatbot-nzjiwmxfuzgpsnwzbepqhf.streamlit.app/";
            } catch (err) {
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
                // Redirect to the target page after successful sign-in
                window.location.href = "https://law-files-chatbot-nzjiwmxfuzgpsnwzbepqhf.streamlit.app/";
            } catch (err) {
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main className="w-full h-screen flex items-center justify-center bg-[#F3EEE5] px-6">
                <div className="w-96 text-[#251C1A] space-y-5 p-6 shadow-xl border border-[#251C1A] rounded-xl bg-white">
                    <div className="text-center">
                        <h3 className="text-[#251C1A] text-2xl font-semibold">Welcome Back</h3>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label className="text-sm font-bold">Email</label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-[#251C1A] bg-[#F3EEE5] outline-none border border-[#251C1A] focus:ring-2 focus:ring-[#251C1A] shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-bold">Password</label>
                            <input
                                type="password"
                                autoComplete='current-password'
                                required
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-[#251C1A] bg-[#F3EEE5] outline-none border border-[#251C1A] focus:ring-2 focus:ring-[#251C1A] shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#251C1A] hover:bg-[#3A2826] hover:shadow-xl transition duration-300'}`}
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    <p className="text-center text-sm">Don't have an account? <Link to={'/register'} className="hover:underline font-bold">Sign up</Link></p>
                    <div className='flex items-center text-center w-full'>
                        <div className='border-b-2 border-[#251C1A] flex-grow'></div>
                        <div className='text-sm font-bold mx-2'>OR</div>
                        <div className='border-b-2 border-[#251C1A] flex-grow'></div>
                    </div>
                    <button
                        disabled={isSigningIn}
                        onClick={onGoogleSignIn}
                        className={`w-full flex items-center justify-center gap-x-3 py-2.5 border border-[#251C1A] rounded-lg text-sm font-medium text-[#251C1A] ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-[#251C1A] hover:text-white transition duration-300'}`}>
                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_40)">
                                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
