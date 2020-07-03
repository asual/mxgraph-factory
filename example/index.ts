import { mxgraphFactory } from "mxgraph-factory";

const { mxCodec, mxGraph, mxUtils } = mxgraphFactory({
    mxLoadResources: false,
    mxLoadStylesheets: false,
});

window.onload = () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    const graph = new mxGraph(container);
    const root = mxUtils.parseXml(`
        <mxGraphModel>
            <root>
            <mxCell id="0" />
            <mxCell id="1" parent="0" />
            <mxCell
                parent="1"
                style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontColor=#000000;fontStyle=1;fontSize=16;spacing=2;"
                value="mxgraph-factory"
                vertex="1"
            >
                <mxGeometry x="10" y="10" width="160" height="40" as="geometry" />
            </mxCell>
            </root>
        </mxGraphModel>
    `);
    const codec = new mxCodec(root);
    codec.decode(root.documentElement, graph.getModel());
}
