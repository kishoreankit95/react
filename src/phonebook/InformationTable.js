import React from 'react';

const style = {
    table: {
      borderCollapse: "collapse"
    },
    tableCell: {
      border: "1px solid gray",
      margin: 0,
      padding: "5px 10px",
      width: "max-content",
      minWidth: "150px"
    },
    form: {
      container: {
        padding: "20px",
        border: "1px solid #F0F8FF",
        borderRadius: "15px",
        width: "max-content",
        marginBottom: "40px"
      },
      inputs: {
        marginBottom: "5px"
      },
      submitBtn: {
        marginTop: "10px",
        padding: "10px 15px",
        border: "none",
        backgroundColor: "lightseagreen",
        fontSize: "14px",
        borderRadius: "5px"
      }
    }
};

function InformationTable(props) {
    const tableData = props.data;
  
    function filtering(arr) {
      console.log("props");
      console.log(props.data);
      if (arr.length < 2) {
        return arr;
      }
      let pivot = arr[arr.length - 1];
      let leftArr = [];
      let rightArr = [];
  
      for (let i = 0; i < arr.length - 1; i++) {
        let lastName1 = arr[i].lastName;
        let lastName2 = arr[i + 1].lastName;
        if (lastName1.localeCompare(lastName2) > 0) {
          rightArr.push(arr[i]);
        } else if (lastName1.localeCompare(lastName2) < 0) {
          leftArr.push(arr[i]);
        } else {
          leftArr.push(arr[i]);
        }
      }
  
      return [...filtering(leftArr), pivot, ...filtering(rightArr)];
      // tableData.map((elem) => {
  
      // })
    }
    let c = filtering(tableData);
  
    // const filterData = tableData.map();
    console.log(c);
  
    return (
      <table style={style.table} className="informationTable">
        <thead>
          <tr>
            <th style={style.tableCell}>First name</th>
            <th style={style.tableCell}>Last name</th>
            <th style={style.tableCell}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {c.map((elem, index) => {
            return (
              <tr style={style.center} key={"row" + index}>
                <td style={style.center}>{elem.firstName}</td>
                <td>{elem.lastName}</td>
                <td>{elem.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

export default InformationTable