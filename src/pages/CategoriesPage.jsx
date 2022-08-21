import React from 'react'
import ListCategories from '../components/ListCategories'
import Loading from '../components/Loading';
import { useCustomFetch } from '../hooks/useCustomFetch'

const CategoriesPage = () => {
    const { data, isLoading, hasErrors } = useCustomFetch('https://zen-hogar.herokuapp.com/api/categories/');
    return (
        <div className='container'>
            <h2>Categories Page</h2>
            <hr />
            {
                isLoading ? (
                    <Loading />
                )
                    :
                    (
                        <div>
                            <ListCategories value={data} />
                        </div>
                    )
            }
        </div>
    )
}

export default CategoriesPage