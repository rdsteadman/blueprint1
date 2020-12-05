// import { IProps, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import React from "react";
import { Menu, MenuDivider, MenuItem } from "@blueprintjs/core";

// export interface IFileMenuProps extends IProps {
//    shouldDismissPopover?: boolean;
// }

// export const UserMenu (props) => (


export default class UserMenu extends React.Component {

	render() {
		return (
			<Menu>
				<MenuItem text="Edit Profile" icon="cog" />
				<MenuItem text="Open" icon="folder-shared" />
				<MenuItem text="Close" icon="add-to-folder" />
				<MenuDivider />
				<MenuItem text="Save" icon="floppy-disk" />
				<MenuItem text="Save as..." icon="floppy-disk" />
				<MenuDivider />
				<MenuItem text="Logout" icon="log-out" />
			</Menu>
		);
	}
}

/* render() {
	return (
<Menu className={props.className}>
	<MenuItem text="New" icon="document" {...props} />
	<MenuItem text="Open" icon="folder-shared" {...props} />
	<MenuItem text="Close" icon="add-to-folder" {...props} />
	<MenuDivider />
	<MenuItem text="Save" icon="floppy-disk" {...props} />
	<MenuItem text="Save as..." icon="floppy-disk" {...props} />
	<MenuDivider />
	<MenuItem text="Exit" icon="cross" {...props} />
</Menu>
	);
} */
