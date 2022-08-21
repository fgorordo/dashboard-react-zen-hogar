import React from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import UserDetailCard from '../components/UserDetailCard';
import { useCustomFetch } from '../hooks/useCustomFetch'

const UserDetails = () => {
    let { id } = useParams();
    let { data, isLoading, hasErrors } = useCustomFetch(`https://zen-hogar.herokuapp.com/api/users/${id}`)
    console.log(id)
    return (
        <>
            <div className='container'>
                <h2>UserDetail</h2>
                <hr />
            </div>
            <div className='user-detail'>
                {
                    isLoading ?
                        (
                            <Loading />
                        )
                        :
                        (
                            <UserDetailCard value={data} />
                        )
                }
            </div>
        </>
    )
}

export default UserDetails