import MxGraphFactory, { mxgraph } from "./mxgraph-typings";

export const mxgraphFactory: typeof MxGraphFactory = (options) => {
    const optionKeys = [
        "mxBasePath",
        "mxDefaultLanguage",
        "mxForceIncludes",
        "mxImageBasePath",
        "mxLanguage",
        "mxLanguages",
        "mxLoadResources",
        "mxLoadStylesheets",
        "mxResourceExtension",
    ];
    optionKeys.forEach((key: string) => {
        (window as any)[key] = (options as any)[key];
    });
    const mxClient: typeof mxgraph = require("mxgraph/javascript/mxClient");
    mxClient.mxCodec.prototype.decode = function(node: Element, into: Element) {
        if (node !== null && node.nodeType === mxClient.mxConstants.NODETYPE_ELEMENT) {
            const ctor = mxClient[node.nodeName as keyof typeof mxgraph] || (window as any)[node.nodeName];
            if (!ctor) {
                throw new Error(`Missing constructor for ${node.nodeName}`);
            }
            const dec = mxClient.mxCodecRegistry.getCodec(ctor);
            if (dec !== null) {
                return dec.decode(this, node, into);
            }
            const obj = node.cloneNode(true) as Element;
            obj.removeAttribute("as");
            return obj;
        }
        return null;
    };
    return mxClient;
};
