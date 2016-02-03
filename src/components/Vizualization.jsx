import React from "react";
import RaisedButton from 'material-ui/lib/raised-button';

import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';


class Vizualization extends React.Component {

    constructor(props) {
        super(props)
    }

    frameStyle() {
        return {
            backgroundColor: '#FAFAFA',
            position: 'absolute',
            top: '22%',
            bottom: '2%',
            left: '1%',
            right: '1%',
            padding: '0.5em'
        }
    }

    render() {
        console.log("---------- render2! ------------")
        console.log(this.props.results)

        console.log(typeof this.props.results);

        if(this.props.results === '') {
            return (
                <div style={this.frameStyle()}>
                </div>
            )
        }

        let networkList = JSON.parse(this.props.results);
        console.log(networkList);

        return (
            <div style={this.frameStyle()}>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>NDEx ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {networkList.map( row => (
                            <TableRow selected={false}>
                                <TableRowColumn>{row.externalId}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <RaisedButton
                    label="REACT!"
                    primary={true}
                    onTouchTap={this.handleTouchTap}
                />
            </div>
        )
    }

}

export default Vizualization
