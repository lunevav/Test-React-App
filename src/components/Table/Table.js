import React, { Component } from 'react';
import PropTypes from 'prop-types';

// @CHILD CLASSES
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {

    constructor() {
        super();
        this.state = {
            activeRowID: [],
            myUserList: [],
            searchValue: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            myUserList: nextProps.data
        });
    }

    deleteFromTable = () => {
        const array = this.state.myUserList;
        const activeRows = this.state.activeRowID;

        this.setState({
            myUserList: array.filter(val => !activeRows.includes(val.id)),
            activeRowID: []
        });
    }

    activeRowHanlder = (value) => {
        const array = this.state.activeRowID;
        if (array.indexOf(value) > -1) {
            let indexToRemove = array.indexOf(value);
            array.splice(indexToRemove, 1);
        } else {
            array.push(value);
        }
        this.setState({
            activeRowID: array
        });
    }

    searchItem = (e) => {
        const { value } = e.target;
        this.setState({
            searchValue: value
        });
    }

    render() {
        const headerColumnNames = this.state.myUserList.length > 0 ? Object.keys(this.state.myUserList[0]) : [];
        headerColumnNames.unshift('checkbox');
        const activeColumns = ['checkbox', 'id', 'title'];
        return (
            <div>
                <input type="text"
                       onChange={this.searchItem}
                />
                <button
                    style={{ display: this.state.activeRowID.length > 1 ? "block" : "none"}}
                    onClick={this.deleteFromTable}
                >MULTIPLY DELETE</button>
                <button
                    disabled
                >RESTORE DELETED ITEMS
                </button>
                <table className="rwd-table">
                    <TableHeader
                        activeColumns={activeColumns}
                        headerColumnNames={headerColumnNames}
                    >
                    </TableHeader>
                    <TableBody
                        activeRowID={this.state.activeRowID}
                        activeRowHanlder={this.activeRowHanlder}
                        data={this.state.myUserList.length > 0 ? this.state.myUserList
                            .filter(value => (value.title.includes(this.state.searchValue) || value.id == this.state.searchValue)) : []}
                        isCheckboxActive={activeColumns.indexOf('checkbox') > -1}
                    >
                    </TableBody>
                </table>
            </div>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array
}


export default Table;

