import React, { Component } from 'react';
import { Classes, Icon, Intent, ITreeNode, Position, Tooltip, Tree } from "@blueprintjs/core";
import PropTypes from 'prop-types';


export default class NavTree extends Component {

	constructor(props) {
		super(props);
		this.state = { nodes: INITIAL_STATE };
	}

	render() {
		return (
			<div className="panel navTree">
				{/*[Tree component]
				Tree is a stateless component. Its contents are dictated by the contents prop, which is an
				 array of ITreeNodes (see below). The tree is multi-rooted if contents contains more than
				  one top-level object.
				*/}
				<Tree
					contents={this.state.nodes}
					onNodeClick={this.handleNodeClick}
					onNodeCollapse={this.handleNodeCollapse}
					onNodeExpand={this.handleNodeExpand}
					className={Classes.ELEVATION_0}
				/>
			</div>
		)
	}


	//private handleNodeClick = (nodeData: ITreeNode, _nodePath: number[], e: React.MouseEvent<HTMLElement>) => {
	handleNodeClick = (nodeData, _nodePath, e) => {
		const originallySelected = nodeData.isSelected;
		if (!e.shiftKey) {
			this.forEachNode(this.state.nodes, n => (n.isSelected = false));
		}
		nodeData.isSelected = originallySelected == null ? true : !originallySelected;
		this.setState(this.state);
		this.props.history.push("/version");
	};

	handleNodeCollapse = (nodeData) => {
		nodeData.isExpanded = false;
		this.setState(this.state);
	};

	handleNodeExpand = (nodeData) => {
		nodeData.isExpanded = true;
		this.setState(this.state);
	};

	forEachNode(nodes, callback) {
		if (nodes == null) {
			return;
		}

		for (const node of nodes) {
			callback(node);
			this.forEachNode(node.childNodes, callback);
		}
	}
}


/* tslint:disable:object-literal-sort-keys so childNodes can come last */
const INITIAL_STATE = [
	/*{
		id: 0,
		hasCaret: true,
		icon: "folder-close",
		label: "Folder 0",
	},*/
	{
		id: 1,
		icon: "home",
		isExpanded: true,
		label: (
			<Tooltip content="Listings" position={Position.RIGHT}>
				Listings
			</Tooltip>
		),
		childNodes: [
			{
				id: 2,
				icon: "box",
				label: (
					<Tooltip content="Project" position={Position.RIGHT}>
						Demo AP
					</Tooltip>
				),
				/*secondaryLabel: (
			<Tooltip content="An eye!">
				<Icon icon="eye-open" />
			</Tooltip>
		),*/
				childNodes: [
					{
						id: 3,
						icon: "folder-close",
						label: (
							<Tooltip content="Listing" position={Position.RIGHT}>
								Docetaxel R3 Label
							</Tooltip>
						),
						childNodes: [
							{ id: 8, icon: "document", label: "Version 1" },
							{ id: 9, icon: "document", label: "Version 2 (working)" },
						],
					},
					{ id: 6, icon: "tag", label: "Item 1" },
					{
						id: 7,
						hasCaret: true,
						icon: "folder-close",
						label: "Folder 3",
						childNodes: [
							{ id: 8, icon: "document", label: "Item 0" },
							{ id: 9, icon: "tag", label: "Item 1" },
						],
					},
				],
			},
			{
				id: 4,
				hasCaret: true,
				icon: "box",
				label: (
					<Tooltip content="" position={Position.RIGHT}>
						XML PM Samples
					</Tooltip>
				),
				childNodes: [
					{
						id: 7,
						hasCaret: true,
						icon: "folder-close",
						label: (
							<Tooltip content="Listing" position={Position.RIGHT}>
								FR HC Lorem Sample
							</Tooltip>
						),
						childNodes: [
							{ id: 8, icon: "document", label: "Initial release" },
							{ id: 9, icon: "document", label: "Updated 20200716" },
							{
								id: 3,
								icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
								label: "Organic meditation gluten-free sriracha",
							},
						],
					},
					{ id: 5, label: "No-Icon Item" },
					{ id: 6, icon: "tag", label: "Item 1" },
				],
			},
		],
	},
	{
		id: 4,
		hasCaret: true,
		icon: "box",
		label: (
			<Tooltip content="" position={Position.RIGHT}>
				NDC Labeler Requests
			</Tooltip>
		),
		childNodes: [
			{
				id: 7,
				hasCaret: true,
				icon: "folder-close",
				label: (
					<Tooltip content="Document" position={Position.RIGHT}>
						Drugco NDC 66677
					</Tooltip>
				),
				childNodes: [
					{ id: 8, icon: "document", label: "Version 1" },
					{ id: 9, icon: "document", label: "Version 2 (20200919)" },
				],
			},
		],
	},
	/*{
		id: 2,
		hasCaret: true,
		icon: "folder-close",
		label: "Super secret files",
		disabled: true,
	},*/
];
/* tslint:enable:object-literal-sort-keys */

// className="navTree"

NavTree.propTypes = {
	history: PropTypes.shape({
		// We don't need to define the whole history object with all its properties, just what we will use.
		push: PropTypes.func.isRequired
	}).isRequired,
	//logout: PropTypes.func.isRequired
}

/*
function mapStateToProps(state) {
	return {
		//isAuthenticated: !!state.user.token
		isConfirmed: !!state.user.confirmed,
	};
}


export default connect(mapStateToProps, { logout })(UserMenu);
*/
