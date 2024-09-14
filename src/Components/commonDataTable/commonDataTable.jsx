import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import CircularLoader from "../../config/suspenseFallback/circularLoader";

export const CommonDataTable = (props) => {
  const {
    data,
    columns,
    loading,
    totalRows,
    currentPage,
    handlePerRowsChange,
    handlePageChange,
    selectable,
    conditionalRowStyles,
    totalDuration
  } = props;

  const [filterText, setFilterText] = useState("");

  const customStyles = {
    head: {
      style: {
        color: "#000",
        fontSize: "12px",
        fontWeight: 700,
        backgroundColor: "#f6f7fb",

        whiteSpace: "pre-line", // Allow text to wrap
      },
    },

    headRow: {
      style: {
        color: "#000",
        backgroundColor: "#fff",
        border: "1px solid #e2e2e2",
        borderRadius: "10px 10px 0 0",
        whiteSpace: "pre-line", // Allow text to wrap
      },
    },

    cells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "16px",
        wordBreak: "break-word",
      },
    },

    rows: {
      style: {
        fontSize: "13px",
        fontWeight: 400,
        minHeight: "3.5em",
        "&:not(:last-of-type)": {
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          borderBottomColor: "#F5F5FF",
        },
      },
      denseStyle: {
        minHeight: "32px",
      },
      highlightOnHoverStyle: {
        color: "#000",
        backgroundColor: "#f0e8fd",
        transitionDuration: "0.15s",
        transitionProperty: "background-color",
        borderBottomColor: "#F5F5FF",
        outlineStyle: "solid",
        outlineWidth: "1px",
        outlineColor: "#F5F5FF",
      },
      stripedStyle: {
        backgroundColor: "#F5F5FF",
      },
    },

    pagination: {
      style: {
        color: "#000",
        fontSize: "13px",
        minHeight: "56px",
        border: "1px solid #e2e2e2",
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: "#F5F5FF",
        borderRadius: "0 0 10px 10px",
      },
      pageButtonsStyle: {
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        padding: "8px",
        margin: "px",
        cursor: "pointer",
        transition: "0.4s",
        color: "#000",
        fill: "#000",
        backgroundColor: "transparent",
        "&:disabled": {
          cursor: "unset",
          color: "#000",
          fill: "#000",
        },
        "&:hover:not(:disabled)": {
          backgroundColor: "#F5F5FF",
        },
        "&:focus": {
          outline: "none",
          backgroundColor: "#F5F5FF",
        },
      },
    },
    noData: {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#000",
        backgroundColor: "#F5F5FF",
      },
    },
    progress: {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#000",
        backgroundColor: "#F5F5FF",
      },
    },
  };



  const darkModeStyles = {
    head: {
      style: {
        color: "#fff",
        fontSize: "12px",
        fontWeight: 500,
        backgroundColor: "#222133",
      },
    },
    headRow: {
      style: {
        color: "#fff",
        backgroundColor: "#31314d",
        border: "1px solid #4C4C6D",
        // borderRadius: "10px",
        borderRadius: "10px 10px 0 0",
      },
    },
    cells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "16px",
        wordBreak: "break-word",
        backgroundColor: "#2c2a42",
        color: "#888EA8",
      },
    },
    rows: {
      style: {
        fontSize: "13px",
        fontWeight: 400,
        minHeight: "3.5em",
        color: "#fff",
        backgroundColor: "#31314d",
        "&:not(:last-of-type)": {
          borderBottomStyle: "solid",
          borderBottomWidth: "1px",
          borderBottomColor: "#4C4C6D",
        },

      },
      highlightOnHoverStyle: {
        color: "#fff",
        backgroundColor: "#aaa",
        transitionDuration: "0.15s",
        transitionProperty: "background-color",
        borderBottomColor: "#aaa",
        outlineStyle: "solid",
        outlineWidth: "1px",
        outlineColor: "#aaa",
      },
      stripedStyle: {
        backgroundColor: "#333",
      },
    },
    pagination: {
      style: {
        color: "#fff",
        fontSize: "13px",
        minHeight: "56px",
        backgroundColor: "#31314d",
        border: "1px solid #4C4C6D",
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: "#444",
        borderRadius: "0 0 10px 10px ",
      },
      pageButtonsStyle: {
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        padding: "8px",
        margin: "px",
        cursor: "pointer",
        transition: "0.4s",
        color: "#fff",
        fill: "#fff",
        backgroundColor: "transparent",
        "&:disabled": {
          cursor: "unset",
          color: "#fff",
          fill: "#fff",
        },
        "&:hover:not(:disabled)": {
          backgroundColor: "#31314d",
        },
        "&:focus": {
          outline: "none",
          backgroundColor: "#31314d",
        },
      },
    },
    noData: {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        backgroundColor: "#31314d",
      },
    },
    progress: {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        backgroundColor: "#31314d",
      },
    },
  };
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(filterText.toLowerCase())
    )
  );

  const paginationOptions = {
    rowsPerPageText: "",
    showPaginationBottom: false,
  };


  return (
    <div>
      <DataTable
        useFilters
        columns={columns}
        bootstrap4
        data={filteredData}
        progressPending={loading}
       // progressComponent={<CircularLoader />}
        pagination
        paginationTotalRows={totalRows}
        paginationDefaultPage={currentPage}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        paginationServer
        striped
        highlightOnHover
        customStyles={themeOutlet === 'light' ? customStyles : darkModeStyles}
        conditionalRowStyles={conditionalRowStyles}
        paginationPerPageOptions={[]}
        // paginationRowsPerPageOptions={[]}
        paginationComponentOptions={paginationOptions}
        className="box-tab"
        {...(selectable ? { selectableRows: true } : {})}
      />
      {totalDuration && <div style={{ padding: '10px', textAlign: 'left', backgroundColor: '#f1f1f1' }}>
        <strong>Total Duration: </strong> {totalDuration} days
      </div>}
    </div>

  );
};
