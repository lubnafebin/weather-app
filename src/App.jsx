import { CiSearch } from "react-icons/ci";

function App() {
  return (
    <>
      <div className="container">
        <form action="">
          <input type="text" placeholder="Search" />
          <button>
            <CiSearch />
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
