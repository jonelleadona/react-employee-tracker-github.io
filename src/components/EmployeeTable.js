import React, {useContext} from 'react'
import EmployeeInfoContext from "./utils/EmployeeInfoContext";
import Container from "./Container"

function EmployeeTable(props) {
  const context = useContext(EmployeeInfoContext);
  
  return (
    <div className="datatable mt-5">
      <table id="table"className="table table-striped table-hover table-condensed">
        <thead>
          <tr>
          {context.developerState.headings.map(({ name, width }) => {
            return (
              <th className="col" key={name} style={{ width }} onClick={() => { context.handleSort(name);}}>
                {name}
                <span className="pointer"></span>
              </th>
              );
            })}
          </tr>
        </thead>
          <Container />
      </table>
    </div>
  );
}

export default EmployeeTable;