import Users from "@/components/Users"



async function fetchUsers(){
  const res = await  fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data

}

async function IndexPage () {
  const users = await fetchUsers()

  return (
    <div>
      <h1 className='text-2xl'>Index Page</h1>
        <Users users={users} />
    </div>
  )
}

export default IndexPage