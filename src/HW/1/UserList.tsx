type AddressType = {
  street: any; // ПОДПРАВЛЯЕМ any
  city: any; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  id: number
  name: string
  age: number
  address: {
    street: string
    city: string
  }
};

type UserListPropsType = {
  users: UserType[];
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((user, i) => (
          <li key={i} id={`hw01-user-${user.id}`}>
            <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
            {user.address.street}, {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
