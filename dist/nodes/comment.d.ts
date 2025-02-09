import Node from './node';
import NodeType from './type';
import HTMLElement from './html';
export default class CommentNode extends Node {
    rawText: string;
    constructor(rawText: string, parentNode: HTMLElement, range?: [number, number]);
    /**
     * Node Type declaration.
     * @type {Number}
     */
    nodeType: NodeType;
    /**
     * Get unescaped text value of current node and its children.
     * @return {string} text content
     */
    get text(): string;
    get nodeValue(): string;
    set nodeValue(value: string);
    toString(): string;
}
