import React from 'react'
import useRouter from '../utils/useRouter'


const Home = () => {
  const router = useRouter();

  console.log(router);

  return (
    <div>
      Hello from home page!
    </div>
  )
}

export default Home;
