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

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 30,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor:
//       theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: "#F4B2FF",
//   },
// }));

// const ProgressWithLabel = ({ value }) => {
//   return (
//     <div
//       style={{
//         position: "relative",
//       }}
//     >
//       <BorderLinearProgress variant="determinate" value={value} />
//       <Box
//         top={5}
//         left={30}
//         position="absolute"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Typography>{`${value}%`}</Typography>
//       </Box>
//     </div>
//   );
// };

function createData(
  createDateTime,
  modifyDateTime,
  materialNo,
  steelType,
  profile,
  material,
  quantity,
  length,
  usedRate,
  RemainingLength,
  title1,
  title2
) {
  return {
    createDateTime,
    modifyDateTime,
    materialNo,
    steelType,
    profile,
    material,
    quantity,
    length,
    usedRate,
    RemainingLength,
    title1,
    title2,
    partLists: [
      {
        // 構件編號
        assemblyNo: "11220001",
        //零件編號
        partNo: "11220001",
        //建立日期?
        createDateTime: "2023/12/31",
        //修改日期?
        modifyDateTime: "2023/12/31",
        //零件長度
        length: "34512",
        //名稱
        name: "M20 - H250*125素材",
        //斷面規格
        profile: "RH999*999*999",
        // 材質
        material: "SN490B",

        //總數量?
        quantity: 4,

        // 重量
        weight: 9999999,
        // Phase
        Phase: "AAB",
        // 拆運
        shippingNumber: "AAB001",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
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
              <IndeterminateCheckBoxOutlinedIcon />
            ) : (
              <AddBoxOutlinedIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.createDateTime}
        </TableCell>
        <TableCell align="right">{row.modifyDateTime}</TableCell>
        <TableCell align="right">{row.materialNo}</TableCell>
        <TableCell align="right">{row.steelType}</TableCell>
        <TableCell align="right">{row.profile}</TableCell>
        <TableCell align="right">{row.material}</TableCell>
        <TableCell align="right">{row.quantity}</TableCell>
        <TableCell align="right">{row.length}</TableCell>
        <TableCell align="right">{row.usedRate}</TableCell>
        <TableCell align="right">{row.RemainingLength}</TableCell>
        <TableCell align="right">{row.title1}</TableCell>
        <TableCell align="right">{row.title2}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0,
            
            // background: "#ECECEC"
        
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
                  
                //   style={{ background: "#ccc" }}
                  
                  >
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>構件編號</TableCell>
                      <TableCell>零件編號</TableCell>
                      <TableCell>建立日期</TableCell>
                      <TableCell>修改日期</TableCell>
                      <TableCell>零件長度</TableCell>
                      <TableCell align="center">名稱</TableCell>
                      <TableCell align="center">斷面規格</TableCell>
                      <TableCell align="center">材質</TableCell>
                      <TableCell align="center">總數量</TableCell>
                      <TableCell align="center">重量</TableCell>
                      <TableCell align="center">Phase</TableCell>
                      <TableCell align="center">拆運</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody 
                  
                //   style={{ background: "#fff" }}
                  
                  >
                    {row.partLists.map((partRow, index) => (
                      <TableRow key={partRow.assemblyNo}>
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {partRow.assemblyNo}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {partRow.partNo}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {partRow.createDateTime}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {partRow.modifyDateTime}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {partRow.length}
                        </TableCell>
                        <TableCell>{partRow.name}</TableCell>
                        <TableCell align="right">{partRow.profile}</TableCell>
                        <TableCell align="right">{partRow.material}</TableCell>
                        <TableCell align="right">{partRow.quantity}</TableCell>
                        <TableCell align="right">{partRow.weight}</TableCell>
                        <TableCell align="right">{partRow.Phase}</TableCell>
                        <TableCell align="right">
                          {partRow.shippingNumber}
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
  createData(
    "2023/12/31",
    "2023/12/31",
    "11220001",
    "M999",
    "RH999*999*999",
    "SN490B",
    "9999999",
    "9999999",
    80.3,
    9999999
  ),
  createData(
    "2023/12/31",
    "2023/12/31",
    11220001,
    "M999",
    "RH999*999*999",
    "SN490B",
    "9999999",
    "9999999",
    90.3,
    9999999
  ),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>建立日期</TableCell>
            <TableCell align="right">修改日期</TableCell>
            <TableCell align="right">素材編號</TableCell>
            <TableCell align="right">鋼材類型</TableCell>
            <TableCell align="right">斷面規格</TableCell>
            <TableCell align="right">材質</TableCell>
            <TableCell align="right">零件數量</TableCell>
            <TableCell align="right">素材長度</TableCell>
            <TableCell align="right">素材使用率</TableCell>
            <TableCell align="right">餘長</TableCell>
            <TableCell align="right">標題一</TableCell>
            <TableCell align="right">標題二</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.steelType} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
