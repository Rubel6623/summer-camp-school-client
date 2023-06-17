/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'

import useAuth from './useAuth';

const useCart =()=>{
  const {user,loading}=useAuth();
  const token=localStorage.getItem('access-token');
  // const [axiosSecure]=useAxiosSecure();

  const {refetch, data: cart=[] } = useQuery({
    queryKey: ['cart', user?.email],

    queryFn: async ()=>{
      const res = await fetch(`http://localhost:5000/myClasses?email=${user.email}`)
      console.log('response from axios ',res)
      return res.json();
    },

  })
  return [cart,refetch]
}

export default useCart;