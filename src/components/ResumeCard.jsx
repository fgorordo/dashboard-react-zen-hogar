import React from 'react'

const ResumeCard = ({ value }) => {
    let { totalProducts, totalUsers, totalProductsByCategory, totalSubCategories } = value
    let {accesorios,iluminacion,muebles} = totalProductsByCategory;
    let subAccesorios = totalSubCategories.accesorios
    let subMuebles = totalSubCategories.muebles
    let subIluminacion = totalSubCategories.iluminacion
    return (
        <>
            <div className='resume-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Productos</h2>
                    <hr />
                    <p>Total de productos: {totalProducts}</p>
                </div>
            </div>
            <div className='resume-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Usuarios</h2>
                    <hr />
                    <p>Total de usuarios: {totalUsers}</p>
                </div>
            </div>
            <div className='resume-card width-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Total de productos por categoria</h2>
                    <hr />
                    <p>Muebles: {muebles}</p>
                    <p>Iluminación: {iluminacion}</p>
                    <p>Accesorios: {accesorios} </p>
                </div>
            </div>
            <div className='resume-card width-card'>
                <div className='resume-card__wrapper'>
                    <h2 className='resume-card__title'>Total de subcategorias por categoria</h2>
                    <hr />
                    <p>Muebles: {subMuebles}</p>
                    <p>Iluminación: {subIluminacion }</p>
                    <p>Accesorios: {subAccesorios} </p>
                </div>
            </div>
        </>
    )
}

export default ResumeCard