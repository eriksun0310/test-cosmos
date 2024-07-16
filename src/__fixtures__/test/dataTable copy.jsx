import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function createData(createDateTime, modifyDateTime, materialNo) {
  return {
    createDateTime,
    modifyDateTime,
    materialNo,
    partLists: [
      {
        // 構件編號
        assemblyNo: "11220001",
        //零件編號
        partNo: "11220001",
      },
    ],
  };
}

function Row(props) {
  const { row, color } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <IndeterminateCheckBoxOutlinedIcon
                style={{
                  color: color === "light" ? "#5D5D5D" : "#fff",
                }}
              />
            ) : (
              <AddBoxOutlinedIcon
                style={{
                  color: color === "light" ? "#5D5D5D" : "#fff",
                }}
              />
            )}
          </IconButton>
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          style={{
            color: color === "light" ? "#5D5D5D" : "#fff",
          }}
        >
          {row.createDateTime}
        </TableCell>
        <TableCell
          align="right"
          style={{
            color: color === "light" ? "#5D5D5D" : "#fff",
          }}
        >
          {row.modifyDateTime}
        </TableCell>
        <TableCell
          align="right"
          style={{
            color: color === "light" ? "#5D5D5D" : "#fff",
          }}
        >
          {row.materialNo}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            background: color === "light" ? "#F2F2F2" : "#909090",
          }}
          colSpan={18}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "20px 43px",
                }}
              >
                <Table size="small" aria-label="purchases">
                  <TableHead
                    style={{
                      background: color === "light" ? "#e0e0e0" : "#4B4B4B",
                    }}
                  >
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell
                        style={{
                          color: color === "light" ? "#5D5D5D" : "#fff",
                        }}
                      >
                        構件編號
                      </TableCell>
                      <TableCell
                        style={{
                          color: color === "light" ? "#5D5D5D" : "#fff",
                        }}
                      >
                        零件編號
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody
                    style={{
                      background: color === "light" ? "#fff" : "#5D5D5D",
                      color: color === "light" ? "#5D5D5D" : "#fff",
                    }}
                  >
                    {row.partLists.map((partRow, index) => (
                      <TableRow key={partRow.assemblyNo}>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            color: color === "light" ? "#5D5D5D" : "#fff",
                          }}
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            color: color === "light" ? "#5D5D5D" : "#fff",
                          }}
                        >
                          {partRow.assemblyNo}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            color: color === "light" ? "#5D5D5D" : "#fff",
                          }}
                        >
                          {partRow.partNo}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("2023/12/31", "2023/12/31", 11220001),
  createData("2023/12/31", "2023/12/31", 11220001),
];

export default function CollapsibleTable({ color = "light" }) {
  const tableStyle = {
    background: color === "dark" ? "#333" : "#fff", // 根據系統主題選擇背景色
    color: color === "dark" ? "#fff" : "#333", // 根據系統主題選擇文字色
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" style={tableStyle}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell
              style={{
                color: color === "light" ? "#5D5D5D" : "#fff",
              }}
            >
              建立日期
            </TableCell>
            <TableCell
              align="right"
              style={{
                color: color === "light" ? "#5D5D5D" : "#fff",
              }}
            >
              修改日期
            </TableCell>
            <TableCell
              align="right"
              style={{
                color: color === "light" ? "#5D5D5D" : "#fff",
              }}
            >
              素材編號
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.steelType} row={row} color={color} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
