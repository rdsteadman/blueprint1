import { Callout } from '@blueprintjs/core'
import React from 'react'

export default function ConfirmEmailMessage() {
	return (
		<Callout intent="warning" icon="cube-add" title="Please verify your e-mail">
			This will enable more features.
		</Callout>
	)
}
