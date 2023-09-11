import FButton from "./FButton";

export default function Friend({ id, name, balance, image }) {
  return (
    <>
      <li>
        <img src={image} alt="friend's pic" />
        <h3>{name}</h3>
        {balance > 0 ? (
          <p className="green">{`${name} owes you ${balance}€`}</p>
        ) : balance === 0 ? (
          <p>{`You and ${name} are even`}</p>
        ) : (
          <p className="red">{`you owe ${name} ${Math.abs(balance)}€`}</p>
        )}
        <FButton>Select</FButton>
      </li>
    </>
  );
}
