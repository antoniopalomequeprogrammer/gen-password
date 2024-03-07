"use client";
import { useRouter } from "next/navigation";
const Users = ({ users }) => {

    const router = useRouter();


  return (
    <ul className="container mx-auto">
      {users.map((user) => (
        <li
          onClick={() => 
            router.push(`/users/${user.id}`)
            }
          key={user.id}
          className="flex items-center space-x-4"
        >
          <img
            src={user.avatar}
            alt={user.first_name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <p>{user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Users;
