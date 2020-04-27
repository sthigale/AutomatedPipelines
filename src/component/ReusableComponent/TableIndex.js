import React from "react";
import styled from "styled-components";
import Table from "./React-Table";
// import makeData from "./makeData";


const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    td {
      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }
`;

const Index = ({ Tabledata }) => {
 
  let Newcolumn = [
    {
      Header: "Target",
      columns: [
        {
          Header: "Target",
          accessor: "target",
          aggregate: "count"
          //   Aggregated: ({ value }) => `${value} Names`
        },
        {
          Header: "DataType",
          accessor: "targetdataType",
          aggregate: "count"
          //   Aggregated: ({ value }) => `${value} Names`
        }
      ]
    },
    {
      Header: "Mapping",
      columns: [
        {
          Header: "Mapping",
          accessor: "mapping",
          aggregate: "count"
        },
        {
          Header: "%",
          accessor: "percent",
          aggregate: "count"
        }
      ]
    },

    {
      Header: "Source",
      columns: [
        {
          Header: "Source",
          accessor: "source",
          aggregate: "count"
        },
        {
          Header: "DataType",
          accessor: "sourcedataType",
          aggregate: "count"
        }
      ]
    },
    {
      Header: "ChooseReson",
      accessor: "chooseReson",
      aggregate: "count"
    }
  ];


  const [data, setData] = React.useState(() => Tabledata);
  const [originalData] = React.useState(data);

  const skipResetRef = React.useRef(false);
  const updateMyData = (rowIndex, columnId, value) => {
    skipResetRef.current = true;
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value
          };
        }
        return row;
      })
    );
  };
  React.useEffect(() => {
    skipResetRef.current = false;
  }, [data]);

  const resetData = () => {
    skipResetRef.current = true;
    setData(originalData);
  };

  return (
    <Styles>
      <Table
        columns={Newcolumn}
        data={data}
        updateMyData={updateMyData}
        skipReset={skipResetRef.current}
      />
    </Styles>
  );
};

export default Index;


//  <button onClick={resetData}>Reset Data</button>;