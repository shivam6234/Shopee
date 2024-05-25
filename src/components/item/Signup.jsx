import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../Pages/Home';

const Signup = () => {

    const [formData, setFormData] = useState({

        phoneNumber: '',
        username: '',
        name: '',
        password: '',
        email: '',
        dob: '',
        address: '',
        confirmPassword: ''
    });

    const [isSignedUp, setIsSignedUp] = useState(false);
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        phoneNumber: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [isUnique, setIsUnique] = useState({
        username: true,
        email: true,
        phoneNumber: true
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setIsUnique({
            ...isUnique,
            [name]: true
        });


        setErrors({
            ...errors,
            [name]: ''
        });
        if (name === 'username' || name === 'email' || name === 'phoneNumber') {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const isDuplicate = existingUsers.some(user => user[name] === value);
            setIsUnique({
                ...isUnique,
                [name]: !isDuplicate
            });
        }
    };
    const [home, setHome] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, email, phoneNumber, password, confirmPassword } = formData;
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const isDuplicateUsername = existingUsers.some(user => user.username === username);
        const isDuplicateEmail = existingUsers.some(user => user.email === email);
        const isDuplicatePhoneNumber = existingUsers.some(user => user.phoneNumber === phoneNumber);

        if (password !== confirmPassword) {
            setErrors({
                ...errors,
                confirmPassword: 'Passwords do not match'
            });
            return;
        }
        if (existingUsers.some(user => user.email === email && user.phoneNumber === phoneNumber && user.username === username)) {
            setErrors({
                ...errors,
                email: 'Email already exists.',
                phoneNumber: 'Phone number already exists.',
                username: 'Username already exists.',


            });
            return;
        }
        if (existingUsers.some(user => user.username === username && user.phoneNumber === phoneNumber)) {
            setErrors({
                ...errors,
                username: 'Username already exists.',
                phoneNumber: 'Phone number already exists.'
            });
            return;
        }

        if (existingUsers.some(user => user.email === email && user.phoneNumber === phoneNumber)) {
            setErrors({
                ...errors,
                email: 'Email already exists.',
                phoneNumber: 'Phone number already exists.'


            });
            return;
        }

        if (existingUsers.some(user => user.username === username && user.email === email)) {
            setErrors({
                ...errors,
                email: 'Email already exists.',
                username: 'Username already exists.',

            });
            return;
        }

        if (isDuplicateUsername) {
            setErrors({
                ...errors,
                username: 'Username already exists.'
            });
            return;
        }

        if (isDuplicateEmail) {
            setErrors({
                ...errors,
                email: 'Email already exists.'
            });
            return;
        }

        if (isDuplicatePhoneNumber) {
            setErrors({
                ...errors,
                phoneNumber: 'Phone number already exists.'
            });
            return;
        }



        localStorage.setItem('users', JSON.stringify([...existingUsers, formData]));
        setFormData({
            username: '',
            name: '',
            password: '',
            dob: '',
            phoneNumber: '',
            email: '',
            address: ''
        });
        setIsSignedUp(true);
        setHome(true)
    };

    const togglePasswordVisibility = () => {
        setShowPassword1(!showPassword1);
    };
    const PasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            {home ? <Home /> : (

                <div className="container-fluid " style={{
                    background: 'linear-gradient(to right, orangeRed, navy)',
                }} >

                    <div className="container">
                        <div className="row" >
                            <div className="col-md-6 col-lg-4 my-5 d-flex flex-column justify-content-center my-5" style={{ alignItems: 'center', border: '2px solid white', backgroundColor: 'transparent', opacity: '' }}>
                                <h1 className='text-center my-5 pt-4 text-white' >Already have an account with us ?</h1>
                                <Link to='/login' className='px-auto'><button className='btn btn-outline-success text-white py-1 px-5 rounded-pill fs-4' style={{ border: '2px solid white' }}>Sign In</button></Link>
                            </div>
                            <div className="col-md-6 col-lg-8 my-5" >
                                {!isSignedUp ? (
                                    <form onSubmit={handleSubmit} className='d-flex justify-content-center py-5' style={{ border: '2px solid white' }} >
                                        <div className='w-75'>



                                            <div className='pt-4 w-100 d-flex justify-content-between' style={{ borderBottom: '2px solid white' }}>
                                                <i class="fa-solid fa-signature fs-2 text-white pe-1"></i>
                                                <input className='fs-5  bg-transparent text-white  w-100' style={{ border: 'none', }} type="text" name="name" value={formData.name} placeholder='Full Name...' onChange={handleChange} required />
                                            </div>
                                            <div>
                                                <div className='pt-4 w-100 d-flex justify-content-between' style={{ borderBottom: '2px solid white' }}>
                                                    <i class="fa-solid fa-user fs-2 text-white pe-2"></i>

                                                    <input className='fs-5  bg-transparent text-white  w-100' style={{ border: 'none', }} type="text" name="username" value={formData.username} onChange={handleChange} placeholder='Username...' required />
                                                    {formData.username && (
                                                        <span style={{ color: isUnique.username ? 'green' : 'red' }}>{isUnique.username ? '✔' : '✘'}</span>
                                                    )}
                                                </div>
                                                {errors.username && <p className='text-center' style={{ color: 'red' }}>{errors.username}</p>}
                                            </div>
                                            <div>

                                                <div className='pt-4 w-100 d-flex justify-content-between' style={{ borderBottom: '2px solid white' }}>
                                                    <i class="fa-solid fa-envelope fs-2 text-white pe-2"></i>

                                                    <input className='fs-5  bg-transparent text-white  w-100' style={{ border: 'none', }} type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email.... Id@gmail.com' required />
                                                    {formData.email && (
                                                        <span style={{ color: isUnique.email ? 'green' : 'red' }}>{isUnique.email ? '✔' : '✘'}</span>
                                                    )}
                                                </div>
                                                {errors.email && <p className='text-center' style={{ color: 'red' }}>{errors.email}</p>}
                                            </div>
                                            <div>

                                                <div className='pt-4 w-100 d-flex justify-content-between' style={{ borderBottom: '2px solid white' }}>
                                                    <i class="fa-solid fa-phone fs-2 text-white pe-2"></i>

                                                    <input className='fs-5  bg-transparent text-white  w-100' style={{ border: 'none', }} type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='Phone Number' required />
                                                    {formData.phoneNumber && (
                                                        <span style={{ color: isUnique.phoneNumber ? 'green' : 'red' }}>{isUnique.phoneNumber ? '✔' : '✘'}</span>
                                                    )}
                                                </div>
                                                {errors.phoneNumber && <p className='text-center' style={{ color: 'red' }}>{errors.phoneNumber}</p>}
                                            </div>
                                            <div className='pt-4 w-100 d-flex justify-content-between' style={{ borderBottom: '2px solid white' }}>
                                                <i class="fa-solid fa-key fs-2 text-white pe-2"></i>
                                                <input className='fs-5  bg-transparent text-white  w-100' style={{ border: 'none', }} type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} required placeholder='Password' />
                                                <span className='w-25 d-flex justify-content-end' onClick={PasswordVisibility}>{showPassword ? <img src='https://cdn-icons-png.flaticon.com/512/1000/1000915.png' alt='' className='img-fluid ' style={{ width: '25%' }} /> : <img src='https://cdn-icons-png.flaticon.com/512/1000/1000957.png' alt='' className='img-fluid ' style={{ width: '25%' }} />} </span>
                                            </div>
                                            <div className='pt-4 w-100 d-flex justify-content-between' style={{ borderBottom: '2px solid white' }}>
                                                <i class="fa-solid fa-key fs-2 text-white pe-2"></i>
                                                <input className='fs-5  bg-transparent text-white  w-100' style={{ border: 'none' }} type={showPassword1 ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm Password' required />
                                                <span className='w-25 d-flex justify-content-end' onClick={togglePasswordVisibility}>{showPassword1 ? <img src='https://cdn-icons-png.flaticon.com/512/1000/1000915.png' alt='' className='img-fluid ' style={{ width: '25%' }} /> : <img src='https://cdn-icons-png.flaticon.com/512/1000/1000957.png' alt='' className='img-fluid ' style={{ width: '25%' }} />} </span>
                                                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}

                                            </div>
                                            <div className='pt-4 w-100 d-flex justify-content-between' style={{ borderBottom: '2px solid white' }} >
                                            <i class="fa-solid fa-location fs-2 text-white pe-2"></i>
                                               
                                                <textarea name="address" placeholder='Give Address In  Format Hnumber,St.number,Colony,City,State,Pincode ' className='w-100 bg-transparent text-white' style={{ border: 'none' }} id="" type="text" value={formData.address} onChange={handleChange} required ></textarea>

                                            </div>
                                            <div className='pt-4 w-100 d-flex justify-content-between' style={{ borderBottom: '2px solid white' }}>
                                            <i class="fa-solid fa-baby fs-2 text-white pe-2"></i>
                                               
                                                <input className='fs-5  bg-transparent text-white  w-100' style={{ border: 'none', }} type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                                            </div>
                                            <div className='d-flex justify-content-center w-100  my-5'>
                                                <button type="submit" className='w-50 rounded-pill fs-4  btn btn-outline-success text-white ' style={{ border: '2px solid white' }} >Signup</button>
                                            </div>
                                        </div>
                                    </form>
                                ) : (
                                    <div>
                                        <Home />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )

}

export default Signup;
