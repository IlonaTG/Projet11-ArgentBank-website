import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../redux/actions/userActions.jsx';
import User from '../components/User/user.jsx';
import Account from '../components/Account/account.jsx';
import AccountData from '../data/accounts.json';


function Profile () {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
  
    useEffect(() => {
        if (!token) {
            console.error("Token de connexion n'est pas retrouvé");
            return;
        }
        
        const userData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    const userData = {
                        id: data.body.id,
                        email: data.body.email,
                        password: data.body.password,
                        firstName: data.body.firstName,
                        lastName: data.body.lastName,
                        userName: data.body.userName,
                        createdAt: data.body.createdAt,
                        updatedAt: data.body.updatedAt
                    }
                    dispatch(userProfile(userData));
                } else {
                    console.log("Le profil n'a pas été récupéré");
                }
            } catch (error) {
                console.error(error);
            };
        };

        userData();
    }, [dispatch, token]);

    return (
        <div className='profile-page'>
            <main>
                {token ? (
                    <>
                        < User />
                        {AccountData.map((data) => (
                            <Account 
                                key={data.id}
                                title={data.title}
                                amount={data.amount}
                                amountDescription={data.amountDescription}
                            />
                        ))}
                    </>
                ) : (
                    <p>Veuillez vous connecter pour accéder à votre profil.</p>
                )}
            </main>
        </div>
    )
}

export default Profile;