import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, LinearProgress, FormControl, Select,
         TableBody, TableContainer, TableCell, TableHead, TableRow, Typography, MenuItem, Tooltip,
         } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import componentStyles from "assets/theme/views/admin/dashboard.js";
// @material-ui/icons components
import { Table, Column, HeaderCell, Cell  } from 'rsuite-table';
import { Popover,Whisper, Dropdown, Divider, Pagination, Checkbox, IconButton, Panel,
Tag} from 'rsuite';
import TimeAgo from 'timeago-react';

const dateStyle = 'en-US'
const useStyles = makeStyles(componentStyles);
function Requests() {
  const classes = useStyles();
  const theme = useTheme();
  const data = useSelector(state => state.request);
  const [checkedKeys, setCheckedKeys] = React.useState([]);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [loading, setLoading] = React.useState(false);

  let checked = false;
  let indeterminate = false;

  const handleChangeLimit = dataKey => {
    setPage(1);
    setLimit(dataKey);
  };
  if (checkedKeys.length === data.length) {
    checked = true;
  } else if (checkedKeys.length === 0) {
    checked = false;
  } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
    indeterminate = true;
  }

  const handleCheckAll = (value, checked) => {
    const keys = checked ? data.map(item => item.id) : [];
    setCheckedKeys(keys);
  };
  const handleCheck = (value, checked) => {
    const keys = checked ? [...checkedKeys, value] : checkedKeys.filter(item => item !== value);
    setCheckedKeys(keys);
  };
  //sort//////////////////
  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === 'string') {
          x = x.charCodeAt();
        }
        if (typeof y === 'string') {
          y = y.charCodeAt();
        }
        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };
const NameCell = ({ rowData, dataKey, ...props }) => {
  const speaker = (
    <Popover title="Description">
      <p>
        <b>Name:</b> {`${rowData.username}`}{' '}
      </p>
      <p>
        <b>Email:</b> {rowData.email}{' '}
      </p>
      <p>
        <b>Category:</b> {rowData.category}{' '}
      </p>
    </Popover>
  );

  return (
    <Cell {...props}>
      <Whisper placement="top" speaker={speaker}>
        <a>{rowData[dataKey].toLocaleString()}</a>
      </Whisper>
    </Cell>
  );
};

const StatusCell = ({ rowData, dataKey, ...props }) => {
if(rowData[dataKey] == 'pending'){
  return(<Cell {...props} style={{ paddingTop: 10 }}>
    <Tag color="violet">Pending</Tag>
  </Cell>)
}else if(rowData[dataKey] == 'allowed'){
  return(<Cell {...props} style={{ paddingTop: 10 }}>
   <Tag color="green">Allowed</Tag>
  </Cell>)
}else{
    return(<Cell {...props} style={{ paddingTop: 10 }}>
   <Tag color="red">Denied</Tag>
  </Cell>)
}
}
const ImageCell = ({ rowData, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div
     style={{
         display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          marginTop: 2,
          backgroundImage: `url(${rowData[dataKey]})`,
          backgroundSize: "100% 100%",
        }}
      >
      </div>
    </div>
  </Cell>
);
const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (
  <Cell {...props} style={{ padding: 0 }}>
    <div style={{ lineHeight: '46px' }}>
      <Checkbox
        value={rowData[dataKey]}
        inline
        onChange={onChange}
        checked={checkedKeys.some(item => item === rowData[dataKey])}
      />
    </div>
  </Cell>
);

const renderMenu = ({ onClose, left, top, className }, ref) => {
  const handleSelect = eventKey => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item eventKey={3}>Download As...</Dropdown.Item>
        <Dropdown.Item eventKey={4}>Export PDF</Dropdown.Item>
        <Dropdown.Item eventKey={5}>Export HTML</Dropdown.Item>
        <Dropdown.Item eventKey={6}>Settings</Dropdown.Item>
        <Dropdown.Item eventKey={7}>About</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};
const ActionCell = ({ rowData, dataKey, ...props }) => {
  function handleAction() {
    console.log(rowData[dataKey])
  }
  function handleMoreAction() {
    console.log(rowData[dataKey])
  }
  return (
    <Cell {...props} className="link-group" style={{marginTop: -10}}>
      <IconButton appearance="subtle" onClick={handleAction} icon={<EditIcon />} />
      <Divider vertical />
      {/* <Whisper placement="autoVerticalStart" trigger="click" speaker={renderMenu}>
        <IconButton appearance="subtle" icon={<MoreHorizIcon />} />
      </Whisper> */}
      <IconButton appearance="subtle" onClick={handleMoreAction} icon={<EditIcon />} />
    </Cell>
  );
};
const DateCell = ({ rowData, dataKey, ...props }) => {
  return (
    <Cell {...props} style={{marginTop: 0}}>
      <TimeAgo
        datetime={rowData[dataKey]}
      />
    </Cell>
  );
};
const CategoryCell = ({ rowData, dataKey, ...props }) => {
  return (
    <Cell {...props} style={{marginTop: 0}}>
      {Capitalize(rowData[dataKey])}
    </Cell>
  );
};
const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
  return (
    <>
      <Container maxWidth={false} component={Box}marginTop="100px" classes={{ root: classes.containerRoot }}>
        <Grid container>
          <Grid item xs={12} xl={12} component={Box} marginBottom="3rem!important" classes={{ root: classes.gridItemRoot }} >
            <Panel header="Become a creator program" bordered bodyFill>
                <Table data={data} id="table"
                      sortColumn={sortColumn}
                      sortType={sortType}
                      onSortColumn={handleSortColumn}
                      autoHeight
                      affixHeader
                      affixHorizontalScrollbar>
                  <Column align="center" flexGrow={1}>
                    <HeaderCell style={{ padding: 0 }}>
                      <div style={{ lineHeight: '40px' }}>
                        <Checkbox
                          inline
                          checked={checked}
                          indeterminate={indeterminate}
                          onChange={handleCheckAll}
                        />
                      </div>
                    </HeaderCell>
                    <CheckCell dataKey="id" checkedKeys={checkedKeys} onChange={handleCheck} />
                  </Column>
                  <Column  align="center" flexGrow={1} sortable>
                    <HeaderCell>CreatedAt</HeaderCell>
                    <DateCell dataKey="created_on" />
                  </Column>
                  <Column align="center" flexGrow={1}>
                    <HeaderCell>Photo</HeaderCell>
                    <ImageCell dataKey="image" />
                  </Column>

                  <Column align="center" flexGrow={1} sortable>
                    <HeaderCell>UserName</HeaderCell>
                    <NameCell dataKey="username" />
                  </Column>

                  <Column  align="center" flexGrow={1} sortable>
                    <HeaderCell>Email</HeaderCell>
                    <Cell dataKey="email" />
                  </Column>
                  <Column  align="center" flexGrow={1} sortable>
                    <HeaderCell>Category</HeaderCell>
                    <CategoryCell dataKey="category" />
                  </Column>
                  <Column  align="center" flexGrow={1} sortable>
                    <HeaderCell>Status</HeaderCell>
                    <StatusCell dataKey="status" />
                  </Column>
                  <Column align="center" flexGrow={1}>
                    <HeaderCell>Action</HeaderCell>
                    <ActionCell dataKey="id" />
                  </Column>
                </Table>
                <div style={{ padding: 20 }}>
                  <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size="xs"
                    layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                    total={data.length}
                    limitOptions={[10, 20]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={handleChangeLimit}
                  />
                </div>
            </Panel>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Requests;
