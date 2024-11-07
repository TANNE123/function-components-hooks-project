import "./country.modules.css";

const TableComponent = ({ Data = [] }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>States Name</th>
            <th>Capital</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((eachState, id) => {
            return (
              <tr key={eachState.id}>
                <td>{id + 1}</td>
                <td>{eachState.name}</td>
                <td>{eachState.capital}</td>
                <td>{eachState.population}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
