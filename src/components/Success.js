import React from 'react'
import useRouter from '../utils/useRouter'

const Success = () => {
  const router = useRouter();

  const [timer,setTimer] = React.useState(4);

  React.useEffect(() => {
    setTimeout(() => {
      setTimer(timer-1);
    },1000);

    if(timer === 0){
      router.push('/');
    }
  })

  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <div className="w-20 h-20 p-2 text-white bg-green-400 rounded-full">
        <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </div>
      <h1 className="mt-1 text-2xl font-bold text-gray-700">Congratulations</h1>
      <p className="mt-2 text-sm font-semibold">You have successfully created your account</p>
      <small className="text-xs text-gray-500">You will be redirected in {timer} seconds to the login page!</small>
    </div>
  )
}

export default Success;