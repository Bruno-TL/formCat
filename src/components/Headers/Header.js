import Login from "./Login";

export default function Header() {
  return (
    <header className="flex justify-around items-center h-14 bg-green-600">
      <div>
        <h2>Form cat</h2>
      </div>
      <div>Alguma coisa</div>
      <div>
        <Login />
      </div>
    </header>
  );
}
