import React from "react";
import RaisedButton from 'material-ui/lib/raised-button';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import Colors from 'material-ui/lib/styles/colors';

import {TABLE_VIEW, DETAILS_VIEW} from "../state/actions/Actions.jsx"


class Vizualization extends React.Component {

    constructor(props) {
        super(props)
    }

    frameStyle() {
        return {
            position: 'absolute',
            top: '22%',
            bottom: '2%',
            left: '1%',
            right: '1%',
            padding: '0.1em',
            overflow: 'auto'
        }
    }

    columnStyle() {
        return {
            textAlign: 'left',
            width: '4em'
        }
    }

    headerStyle() {
        return {
            fontWeight: 700,
            textAlign: 'left',
            width: '5em'
        }
    }

    switchView(event) {
        let networkId = this.networkList[event[0]]['externalId']
        console.log(networkId);

        this.props.visualizeDetails(DETAILS_VIEW)
    };

    render() {

        if(this.props.results === '') {
            return (
                <div style={this.frameStyle()}>
                </div>
            )
        }

        this.networkList = JSON.parse(this.props.results);

        console.log(this.networkList);

        this.state = {
            fixedHeader: true,
            selectable: true,
            adjustForCheckbox: false,
            displayRowCheckbox: false,
            displaySelectAll: false
        };

        return (
            <div style={this.frameStyle()}>
                <Table
                    fixedHeader={this.state.fixedHeader}
                    selectable={this.state.selectable}
                    onRowSelection={this.switchView.bind(this)}
                >
                    <TableHeader
                        adjustForCheckbox={this.state.adjustForCheckbox}
                        displaySelectAll={this.state.displaySelectAll}
                        style={{textAlign: 'right'}}
                    >
                        <TableRow>
                            <TableHeaderColumn style={{width: '4em', textAlign: 'left'}}>Matches</TableHeaderColumn>
                            <TableHeaderColumn style={{textAlign: 'left'}}>Name</TableHeaderColumn>
                            <TableHeaderColumn style={{textAlign: 'left'}}>Nodes / Edges</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody
                        displayRowCheckbox={this.state.displayRowCheckbox}
                    >
                        {this.networkList.map( row => (
                            <TableRow
                            >
                                <TableRowColumn
                                    style={this.columnStyle()}>10/33</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.nodeCount} / {row.edgeCount}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }

}

export default Vizualization
