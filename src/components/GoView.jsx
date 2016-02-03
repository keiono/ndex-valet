import React from "react";
import D3 from "d3";
import venn from "./venn";

class GoView extends React.Component {

    constructor(props) {
        super(props)
    }

    frameStyle() {
        return {
            background: '#FFFFFF',
            position: 'absolute',
            top: '22%',
            bottom: '2%',
            left: '1%',
            right: '1%',
            padding: '0.1em',
            overflow: 'auto'
        }
    }

    render() {
        return (
            <div id="venn" style={this.frameStyle()}>
                <p>(Draw D3 visualizations here...)</p>
            </div>
        )
    }

    draw() {
        console.log("@@@@@@@@@ Drawing Venn");
        console.log(d3);

        var sets = [{
            sets: ['Genes in network'],
            size: 1233
        }, {
            sets: ['Query genes'],
            size: 152
        }, {
            sets: ['Genes in network', 'Query genes'],
            size: 75
        }
        ];
        var chart = venn.VennDiagram().width(300).height(300);
        return d3.datum(sets).call(chart);


    }
}

export default GoView
