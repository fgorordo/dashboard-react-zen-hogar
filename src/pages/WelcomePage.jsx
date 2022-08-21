import React from 'react'
import Loading from '../components/Loading'
import ResumeCard from '../components/ResumeCard'
import { useCustomFetch } from '../hooks/useCustomFetch'

const WelcomePage = () => {
  let {data,isLoading,hasErrors} = useCustomFetch('https://zen-hogar.herokuapp.com/api/info')
  return (
    <div className='container'>
      <h2>Welcome Page</h2>
      <hr />
      <div className='resume-card__container'>
        {
          isLoading ? 
            (
              <Loading />
            )
            :
            (
              <ResumeCard value={data}/>
            )
        }
      </div>
    </div>
  )
}

export default WelcomePage