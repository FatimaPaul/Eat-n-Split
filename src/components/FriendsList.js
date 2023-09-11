import Friend from "./Friend";

export default function FriendsList({ fList }) {
  return (
    <>
      <ul>
        {fList.map((f) => (
          <Friend
            key={f.id}
            id={f.id}
            name={f.name}
            balance={f.balance}
            image={f.image}
          />
        ))}
      </ul>
    </>
  );
}
