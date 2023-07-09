import React from "react";
import DataTable from "react-data-table-component";
import { createTheme } from "react-data-table-component";
import { Button } from "@mui/material";
import { FilledInput } from "@mui/material";

const userData = [];

var columns = [
  {
    name: "Rank",
    selector: (row) => row.rank,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Total Score",
    selector: (row) => row.total_score,
    sortable: true,
  },

  {
    name: "College",
    selector: (row) => row.college,
    sortable: true,
  },
];

const customStyles = {
  table: {
    style: {
      // maxWidth: "1550px",
      // marginLeft: "135px",
      marginBottom: "20px",
    },
  },
  rows: {
    style: {
      minHeight: "72px",
      // marginLeft: "50px"
    },
  },
  headCells: {
    style: {
      paddingLeft: "12px",
      // backgroundColor: "#040612",
      // paddingRight: "58px",
      fontSize: "1.3rem",
    },
  },
  cells: {
    style: {
      paddingLeft: "15px", // override the cell padding for data cells
      // paddingRight: "8px",
    },
  },
};

createTheme("dark", {
  background: {
    default: "transparent",
  },
});

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <FilledInput
      variant="outlined"
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
      inputProps={{
        style: { color: "white", opacity: "0.7", fontSize: "0.9rem" },
      }}
    />
    <Button
      type="button"
      onClick={onClear}
      style={{ color: "white", opacity: "0.7" }}
    >
      X
    </Button>
  </>
);

function getData(props) {
  userData.length = 0;
  let rank = 1;

  for (const [key, value] of Object.entries(props.ListToShow)) {
    const obj = {
      rank: rank,
      name: value.name,
      total_score: value.score,
      college: value.college,
    };
    userData.push(obj);
    rank += 1;
  }
}

createTheme(
  "solarized",
  {
    text: {
      primary: "#ffffff",
      secondary: "#white",
    },
    background: {
      // default: "#2C2C43",
      default: "#243A73",
    },
    context: {
      background: "#cb4b16",
      text: "#FFFFFF",
    },
    divider: {
      default: "#073642",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

function RankTableAK(props) {
  getData(props);

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = userData.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );
  const conditionalRowStyles = [
    {
      when: (row) => row.name === props.name,
      style: {
        backgroundColor: "rgb(237 235 255)",
        color: "#002c94",
        textTransform: "uppercase",
        borderRadius: "0.5rem",
        border: "#243a73 solid 0.1rem",
      },
      "&:hover": {
        cursor: "pointer",
      },
    },
  ];

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      customStyles={customStyles}
      conditionalRowStyles={conditionalRowStyles}
      theme="solarized"
      pagination
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
    />
  );
}

export default RankTableAK;
