/**
 * Type for an object representing how content is displayed in the UI.
 */
export type ContentConfig = {
	category: string
	links: { displayName: string; href: string }[]
}[]
