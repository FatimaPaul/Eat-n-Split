import FButton from "./FButton";

export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split your bill with X</h2>

      <label>💰 Bill Value</label>
      <input type="text" />

      <label>💸 Expense</label>
      <input type="text" />

      <label>🎈 X expense</label>
      <input type="text" disabled />

      <label>🍜 Who is paying the bill? </label>
      <select>
        <option value="user">you</option>
        <option value="friend">X</option>
      </select>

      <FButton>Split Bill</FButton>
    </form>
  );
}
