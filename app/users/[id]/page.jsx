async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();

  return data.data;
}

async function  User ({ params }){
  const data = await getUser(params.id);

  return <div>
    <h1>{data.first_name} {data.last_name}</h1>
    <img src={data.avatar} alt={data.first_name} />
    <p>{data.email}</p>
  </div>;
};

export default User;
