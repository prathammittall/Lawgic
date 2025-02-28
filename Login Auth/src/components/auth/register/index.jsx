import React, { useState } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { userLoggedIn } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            window.location.href = "https://lawgic-login-auth.vercel.app/";
            await doCreateUserWithEmailAndPassword(email, password);
        }
    };

    return (
        <>
            {userLoggedIn && <Navigate to={'/home'} replace={true} />}

            <main className="w-full h-screen flex justify-center items-center bg-[#f6f0e8]">
                <div className="w-96 text-[#3c2f21] space-y-5 p-6 shadow-lg border rounded-2xl bg-white">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">Create a New Account</h3>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                            <label className="text-sm font-semibold">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-[#3c2f21] bg-[#f6f0e8] outline-none border border-[#c5b9a3] rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-[#3c2f21] bg-[#f6f0e8] outline-none border border-[#c5b9a3] rounded-lg"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Confirm Password</label>
                            <input
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-[#3c2f21] bg-[#f6f0e8] outline-none border border-[#c5b9a3] rounded-lg"
                            />
                        </div>

                        {errorMessage && <span className='text-red-600 font-bold'>{errorMessage}</span>}

                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium rounded-lg bg-[#3c2f21] hover:bg-[#2b2115] transition"
                        >
                            {isRegistering ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        
                        <div className="text-sm text-center">
                            Already have an account?{' '}
                            <Link to={'/login'} className="font-bold hover:underline">Continue</Link>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Register;
