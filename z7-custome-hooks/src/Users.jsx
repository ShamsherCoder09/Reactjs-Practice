import './App.css'
import useFetch from './hooks/useFetch'

function Users() {
  const {data } = useFetch();

  
  return (
    <>
     {
      data && data.map((user)=>{
        return( 
        <div key={user.id}>
          <h1>{user.name}</h1>
        </div>
      )})
     }
    </>
  )
}

export default Users
