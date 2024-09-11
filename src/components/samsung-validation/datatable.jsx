import "./table.modules.css";

const TableComponentFill = ({ Data = [] }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Mobile Name</th>
            <th>Phone Number</th>
            <th>Customer Email</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((eachData) => {
            return (
              <tr>
                <td>{eachData.text}</td>
                <td>{eachData.number}</td>
                <td>{eachData.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default TableComponentFill;
