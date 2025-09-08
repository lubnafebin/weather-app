import { CiSearch } from "react-icons/ci";

function App() {
  return (
    <>
      <div className="container">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>
            <CiSearch />
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
