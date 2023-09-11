import { useState } from "react";
import FButton from "./FButton";

export default function FormAddFriend({ addFriendFunc }) {
  const [addFriend, setAddFriend] = useState("");
  const [imageFriend, setImageFriend] = useState("");

  function submitAddFriend(e) {
    e.preventDefault();

    const newFriend = {
      name: addFriend,
      image: imageFriend,
      balance: 0,
      id: crypto.randomUUID(),
    };

    addFriendFunc(newFriend);

    setAddFriend("");
    setImageFriend("");
  }

  return (
    <>
      <div>
        <form className="form-add-friend" onSubmit={submitAddFriend}>
          <label>🤞FriendName</label>
          <input
            type="text"
            value={addFriend}
            onChange={(e) => setAddFriend(e.target.value)}
          />

          <label>🧧Image URL</label>
          <input
            type="text"
            value={imageFriend}
            onChange={(e) => setImageFriend(e.target.value)}
          />

          <FButton>Add</FButton>
        </form>
      </div>
    </>
  );
}
