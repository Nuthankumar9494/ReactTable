import logo from './logo.svg';
import './App.css';
import BasicTable from './Cmponents/BasicTable';
import SortingTable from './Cmponents/SortingTable';
import FilteringTable from './Cmponents/FilteringTable';
import Pagination from './Cmponents/Pagination';


function App() {
  return (
    <div className="App">
      {/* <BasicTable/> */}
      {/* <SortingTable/> */}
      {/* <FilteringTable/> */}
      <Pagination/>
    </div>
  );
}

export default App;
