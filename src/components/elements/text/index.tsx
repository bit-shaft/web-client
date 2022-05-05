import { TextProps } from "./types"

function Text(props: TextProps) {
	return <p>{props.children}</p>
}

export { Text }