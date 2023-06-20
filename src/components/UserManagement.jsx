import React, { useState } from 'react';
import Style from './Management.module.css'

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');
    const [country, setCountry] = useState('');
    const [gender, setGender] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const [newUser, setNewUser] = useState({
        id: Date.now(),
        image,
        email,
        fullName,
        mobile,
        country,
        gender,
        hobbies,
    });

    const handleAddUser = () => {
        const newUser = {
            id: Date.now(),
            image,
            email,
            fullName,
            mobile,
            country,
            gender,
            hobbies,
        };

        setUsers([...users, newUser]);
        clearForm();
    };

    const handleUpdateUser = () => {
        const updatedUsers = users.map((user) => {
            if (user.id === selectedUser.id) {
                return {
                    ...user,
                    image,
                    email,
                    fullName,
                    mobile,
                    country,
                    gender,
                    hobbies,
                };
            }
            return user;
        });

        setUsers(updatedUsers);
        clearForm();
        setSelectedUser(null);
        setIsEditing(false);
    };

    const handleDeleteUser = (user) => {
        const updatedUsers = users.filter((u) => u.id !== user.id);
        setUsers(updatedUsers);
    };

    const handleEditUser = (user) => {
        setSelectedUser(user);
        setImage(user.image);
        setEmail(user.email);
        setFullName(user.fullName);
        setMobile(user.mobile);
        setCountry(user.country);
        setGender(user.gender);
        setHobbies(user.hobbies);
        setIsEditing(true);
    };

    const handleViewUserDetails = (user) => {
        setSelectedUser(user);
    };

    const clearForm = () => {
        setImage('');
        setEmail('');
        setFullName('');
        setMobile('');
        setCountry('');
        setGender('');
        setHobbies('');
    };

    const updateUser = () => {
        setUsers(users.map((user) => (user.id === newUser.id ? newUser : user)));
        setNewUser({
            image,
            email,
            fullName,
            mobile,
            country,
            gender,
            hobbies,
        });
        setSelectedUser(null);;
    };

    return (
        <>
            <h1>User Management</h1>
            <label htmlFor="imge">Image:</label>
            <input
                type="text"
                id="image"
                value={ image }
                onChange={ (e) => setImage(e.target.value) }
                required
            />
            <br />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
                required
            />
            <br />

            <label htmlFor="fullName">Full Name:</label>
            <input
                type="text"
                id="fullName"
                value={ fullName }
                onChange={ (e) => setFullName(e.target.value) }
                required
            />
            <br />

            <label htmlFor="mobile">Mobile:</label>
            <input
                type="tel"
                id="mobile"
                value={ mobile }
                onChange={ (e) => setMobile(e.target.value) }
                required
            />
            <br />

            <label htmlFor="country">Country:</label>
            <input
                type="text"
                id="country"
                value={ country }
                onChange={ (e) => setCountry(e.target.value) }
                required
            />
            <br />

            <label htmlFor="gender">Gender:</label>
            <input
                type="text"
                id="gender"
                value={ gender }
                onChange={ (e) => setGender(e.target.value) }
                required
            />
            <br />

            <label htmlFor="hobbies">Hobbies:</label>
            <input
                type="text"
                id="hobbies"
                value={ hobbies }
                onChange={ (e) => setHobbies(e.target.value) }
                required
            />
            <br />
            <button value={ isEditing ? 'Update' : 'Add' } onClick={ isEditing ? handleUpdateUser : handleAddUser } >{ isEditing ? 'Update' : 'Submit' }</button>

            {/* -------------------------------------------------------------- */ }



            { selectedUser && (
                <div>
                    <h2>User Details</h2>
                    <img src={ selectedUser.image } alt="User" />
                    <p>
                        <strong>Email:</strong> { selectedUser.email }
                    </p>
                    <p>
                        <strong>Full Name:</strong> { selectedUser.fullName }
                    </p>
                    <p>
                        <strong>Mobile:</strong> { selectedUser.mobile }
                    </p>
                    <p>
                        <strong>Country:</strong> { selectedUser.country }
                    </p>
                    <p>
                        <strong>Gender:</strong> { selectedUser.gender }
                    </p>
                    <p>
                        <strong>Hobbies:</strong> { selectedUser.hobbies }
                    </p>

                    <button onClick={ () => updateUser() }>Save</button>
                </div>
            ) }

            {/* ----------------------------------------------------------------- */ }
            <table border="1" cellSpacing="0">
                <thead>
                    <tr className={ Style.heading }>
                        <th>Image URL</th>
                        <th>Email</th>
                        <th>Full Name</th>
                        <th>Mobile</th>
                        <th>Country</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((ele, index) => {
                            return (
                                <tr key={ index } >
                                    <td><img src={ ele.image } alt="no img" /></td>
                                    <td>{ ele.email }</td>
                                    <td>{ ele.fullName }</td>
                                    <td>{ ele.mobile }</td>
                                    <td>{ ele.country }</td>
                                    <td>{ ele.gender }</td>
                                    <td>{ ele.hobbies }</td>
                                    <td><button onClick={ () => handleEditUser(ele) }>Edit</button></td>
                                    <td><button onClick={ () => handleDeleteUser(ele) }>Delete</button></td>
                                    <td><button onClick={ () => handleViewUserDetails(ele) }>
                                        View Details
                                    </button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </>


    );
};

export default UserManagement;