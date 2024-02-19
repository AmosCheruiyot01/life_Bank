import React from 'react'
import { bloodStore } from '../DB'
import { useForm } from 'react-hook-form'


 export function bloodSearch(bloodGroup){
const result = bloodStore.filter((blood) => blood.bloodType == bloodGroup)
return result;
}

function Search({submit}) {

  const {register, handleSubmit} = useForm()
 
  return (
    <form action="" onSubmit={handleSubmit(submit)}>
    <input
      type="text"
     id="search"
      {...register("search")}
      className="focus:outline-none ring ca rounded ring-gray-400 focus:ring-red-400 transition-all duration-300 
      "
      placeholder={`search blood`}
    />
    </form>
  )
}

export default Search