import React from "react";

const UseEffectTable = ({ Data = [] }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>category</th>
            <th>Image/Email/Date</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((each, i) => {
            return (
              <tr key={i}>
                <td>{each.Data1}</td>
                <td>{each.Data2}</td>
                {each.Data3 && each.Data3.startsWith("http") ? (
                  <td>
                    <img style={{ width: "150px" }} src={each.Data3} alt="" />
                  </td>
                ) : (
                  <td>{each.Data3}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UseEffectTable;
