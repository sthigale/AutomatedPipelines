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

function Index() {
  /*
 const columns = React.useMemo(
   () => [
     {
       Header: "Name",
       columns: [
         {
           Header: "First Name",
           accessor: "firstName",
           // Use a two-stage aggregator here to first
           // count the total rows being aggregated,
           // then sum any of those counts if they are
           // aggregated further
           aggregate: "count",
           Aggregated: ({ value }) => `${value} Names`
         },
         {
           Header: "Last Name",
           accessor: "lastName",
           // Use our custom `fuzzyText` filter on this column
           filter: "fuzzyText",
           // Use another two-stage aggregator here to
           // first count the UNIQUE values from the rows
           // being aggregated, then sum those counts if
           // they are aggregated further
           aggregate: "uniqueCount",
           Aggregated: ({ value }) => `${value} Unique Names`
         }
       ]
     },
     {
       Header: "Info",
       columns: [
         {
           Header: "Age",
           accessor: "age",
           Filter: SliderColumnFilter,
           filter: "equals",
           // Aggregate the average age of visitors
           aggregate: "average",
           Aggregated: ({ value }) => `${value} (avg)`
         },
         {
           Header: "Visits",
           accessor: "visits",
           Filter: NumberRangeColumnFilter,
           filter: "between",
           // Aggregate the sum of all visits
           aggregate: "sum",
           Aggregated: ({ value }) => `${value} (total)`
         },
         {
           Header: "Status",
           accessor: "status",
           Filter: SelectColumnFilter,
           filter: "includes"
         },
         {
           Header: "Profile Progress",
           accessor: "progress",
           Filter: SliderColumnFilter,
           filter: filterGreaterThan,
           // Use our custom roundedMedian aggregator
           aggregate: roundedMedian,
           Aggregated: ({ value }) => `${value} (med)`
         }
       ]
     }
   ],
   []
 );
  const [data, setData] = React.useState(() => data);

 */

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

  const data1 = [
    {
      target: "TT1",
      targetdataType: "Col1",
      mapping: "ML Model 1",
      percent: 10,
      source: "source Table",
      sourcedataType: "Col 2",
      chooseReson: "by user"
    },
    {
      target: "TT2",
      targetdataType: "Col 3",
      mapping: "ML Model 2",
      percent: 20,
      source: "source Table",
      sourcedataType: "Col 4",
      chooseReson: "by user"
    }
  ];

  const [data, setData] = React.useState(() => data1);
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
      <button onClick={resetData}>Reset Data</button>
      <Table
        columns={Newcolumn}
        data={data}
        updateMyData={updateMyData}
        skipReset={skipResetRef.current}
      />
    </Styles>
  );
}

export default Index;


