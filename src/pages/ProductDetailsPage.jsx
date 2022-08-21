import React from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import ProductDetail from '../components/ProductDetail'
import { useCustomFetch } from '../hooks/useCustomFetch'

const ProductDetailsPage = () => {
  const params = useParams();
  const { id } = params;
  const { data, isLoading, hasErrors } = useCustomFetch(`https://zen-hogar.herokuapp.com/api/products/${id}`);
  return (
    <div className='container'>
      <h2>Product Detail</h2>
      <hr />
      <div className='product-detail'>
        {
          isLoading ?
            (
              <Loading />
            )
            :
            (
              <ProductDetail value={data} />
            )
        }
      </div>
    </div>
  )
}

export default ProductDetailsPage