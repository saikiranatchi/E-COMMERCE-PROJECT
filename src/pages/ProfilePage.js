import React, {useState} from 'react';

const ProfilePage = ({ purchaseHistory }) => {
    const [user] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        address: '123 Main St',
      });
  return (
    <div className="profile-page">
      <h2>Your Profile</h2>
      <div className="profile-details">
        <label>Name:</label>
        <input type="text" value={user.name} />
        <label>Email:</label>
        <input type="email" value={user.email} />
        <label>Address:</label>
        <textarea value={user.address}></textarea>
      </div>
      <h3>Purchase History</h3>
      <ul>
        {purchaseHistory.length > 0 ? (
          purchaseHistory.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - ₹{item.price}
            </li>
          ))
        ) : (
          <p>No purchase history available.</p>
        )}
      </ul>
    </div>
  );
};

export default ProfilePage;
