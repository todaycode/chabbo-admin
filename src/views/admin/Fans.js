import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, LinearProgress, FormControl, Select,
         TableBody, TableContainer, TableCell, TableHead, TableRow, Typography, MenuItem, Tooltip,
         } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import componentStyles from "assets/theme/views/admin/dashboard.js";
// @material-ui/icons components
import { Table, Column, HeaderCell, Cell  } from 'rsuite-table';
import { Popover,Whisper, Dropdown, Divider, Pagination, Checkbox, IconButton, Panel,
Tag, InputGroup, Input, Notification, toaster} from 'rsuite';
import TimeAgo from 'timeago-react';
import defaultUser from 'assets/img/user2.jpg';
import { ProfileModal, AlertDialog } from 'components/ProfileModal'

const dateStyle = 'en-US'
const useStyles = makeStyles(componentStyles);
function Fans() {
  const classes = useStyles();
  const theme = useTheme();
  const modalRef = React.useRef();
  const alertRef = React.useRef();
  const data = useSelector(state => state.fan);
  const premiumUser = data.filter(item => item.premium)

  // console.log(data)
  const [checkedKeys, setCheckedKeys] = React.useState([]);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [selectedRowData, setSelectedRowData] = React.useState({});
  const [isMore, setIsMore] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [modalInitial, setModalInitial] = React.useState(true);
  const [searchKey, setSearchKey] = React.useState('');

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
      let newData = [];
      if(searchKey == ''){
        newData = data;
      }else{
        newData = data.filter(item => {
          if(item.hasOwnProperty('name')){
            if(item.name.indexOf(searchKey) > -1 ||
            item.username.indexOf(searchKey) > -1 ||
            item.email.indexOf(searchKey) > -1)
              return item;
          }else{
            if(
            item.username.indexOf(searchKey) > -1 ||
            item.email.indexOf(searchKey) > -1)
              return item;
          }
        })
      }
      return newData.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if(typeof x === 'string'){
          x = x.toLowerCase();
          y = y.toLowerCase();
          if (sortType === 'asc') {
            if(x > y) return true;
            else return false;
          } else {
            if(y > x) return true;
            else return false;
          }
        }
        if(typeof x === 'boolean'){
          if (sortType === 'asc') {
            if(x > y) return true;
            else return false;
          } else {
            if(y > x) return true;
            else return false;
          }
        }
      });
    }else{
      if(searchKey == ''){
        return data;
      }else{
        let newData = [];
        newData = data.filter(item => {
          if(item.hasOwnProperty('name')){
            if(item.name.indexOf(searchKey) > -1 ||
            item.username.indexOf(searchKey) > -1 ||
            item.email.indexOf(searchKey) > -1)
              return item;
          }else{
            if(
            item.username.indexOf(searchKey) > -1 ||
            item.email.indexOf(searchKey) > -1)
              return item;
          }
        })
        return newData;
      }
    }
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
  if(rowData[dataKey]){
    return (
      <Cell {...props}>
        {rowData[dataKey]}
      </Cell>
    );
  }else{
 return (
      <Cell {...props}>
      </Cell>
    );
  }
 
};

const PremiumCell = ({ rowData, dataKey, ...props }) => {
  if(rowData[dataKey] == false){
    return(<Cell {...props} style={{ paddingTop: 10 }}>
      <Tag color="violet">No</Tag>
    </Cell>)
  }else{
      return(<Cell {...props} style={{ paddingTop: 10 }}>
    <Tag color="green">Yes</Tag>
    </Cell>)
  }
}
const ImageCell = ({ rowData, dataKey, ...props }) => {
  if(rowData[dataKey]){
    return(
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
    )
  }else{
    return(
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
              backgroundImage: `url(${defaultUser})`,
              backgroundSize: "100% 100%",
            }}
          >
          </div>
        </div>
      </Cell>
    )
  }
};
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
    // console.log(eventKey);
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
    toaster.push(<Notification type={'success'} header={'Success'} duration={3000} closable>
      This is comming soon.</Notification>, {
      placement: 'bottomEnd'
    });
    // setIsEdit(true);
    // setSelectedRowData(rowData);
    // alertRef.current.showModal()
  }
  function handleMoreAction() {
    setIsMore(true);
    setSelectedRowData(rowData);
    setModalInitial(false);
    modalRef.current.showModal()
  }
  return (
    <Cell {...props} className="link-group" style={{marginTop: -10}}>
      <IconButton appearance="subtle" onClick={handleAction} icon={<EditIcon />} />
      <Divider vertical />
      <IconButton appearance="subtle" onClick={handleMoreAction} icon={<VisibilityIcon />} />
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
      {rowData[dataKey].map((item,index) => {
        return (<Tag color="green" key={index}>{Capitalize(item)}</Tag>)
      })}
    </Cell>
  );
};
const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const searchFunc = (value) => {
  setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSearchKey(value);
    }, 100);
}

  return (
    <>
      <Container maxWidth={false} component={Box}marginTop="100px" classes={{ root: classes.containerRoot }}>
        <Grid container>
          <Grid item xs={12} xl={12} component={Box} marginBottom="3rem!important" classes={{ root: classes.gridItemRoot }} >
            <Panel header="Fans for Chabbo" bordered bodyFill>
              <div>
                  <InputGroup inside style={{width: '200px', marginBottom: '10px', 
                  marginLeft: 'auto', marginRight: 'auto'}}>
                    <Input defaultValue={searchKey} onChange={searchFunc}/>
                    <InputGroup.Button>
                      <SearchIcon />
                    </InputGroup.Button>
                  </InputGroup>
                </div>
                <Table data={getData()} id="table"
                      sortColumn={sortColumn}
                      sortType={sortType}
                      onSortColumn={handleSortColumn}
                      loading={loading}
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
                  <Column  align="center" flexGrow={3} sortable>
                    <HeaderCell>CreatedAt</HeaderCell>
                    <DateCell dataKey="created_on" />
                  </Column>
                  <Column align="center" flexGrow={1}>
                    <HeaderCell>Photo</HeaderCell>
                    <ImageCell dataKey="image" />
                  </Column>
                  <Column align="center" flexGrow={3} sortable>
                    <HeaderCell>Name</HeaderCell>
                    <NameCell dataKey="name" />
                  </Column>
                  <Column align="center" flexGrow={3} sortable>
                    <HeaderCell>UserName</HeaderCell>
                    <NameCell dataKey="username" />
                  </Column>

                  <Column  align="center" flexGrow={3} sortable>
                    <HeaderCell>Email</HeaderCell>
                    <Cell dataKey="email" />
                  </Column>
                  <Column  align="center" flexGrow={4}>
                    <HeaderCell>Category</HeaderCell>
                    <CategoryCell dataKey="category" />
                  </Column>
                  <Column  align="center" flexGrow={1} sortable>
                    <HeaderCell>Premium</HeaderCell>
                    <PremiumCell dataKey="premium" />
                  </Column>
                  <Column align="center" width={100} fixed="right">
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
      <ProfileModal isMore={isMore} data={selectedRowData} ref={modalRef} initial={modalInitial}/>
      <AlertDialog isMore={isMore} data={selectedRowData} ref={alertRef} />
    </> 
  );
}

export default Fans;
