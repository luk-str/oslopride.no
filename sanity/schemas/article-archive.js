import { localize } from "../utils/locale";

export default {
	title: "Article Archive",
	name: "articleArchive",
	type: "document",
	fieldsets: [{ name: "header", title: "Header" }],
	fields: [
		{
			title: "URL",
			name: "slug",
			type: "slug",
			options: {
				source: "header.en.title.id"
			}
		},
		localize(
			{
				title: "Title",
				name: "title",
				type: "string"
			},
			(lang, Rule) => (lang.isDefault ? Rule.required() : undefined)
		),
		localize(
			{
				title: "Subtitle",
				name: "subtitle",
				type: "string"
			},
			(lang, Rule) => (lang.isDefault ? Rule.required() : undefined)
		),
		{
			title: "Image",
			name: "image",
			type: "image",
			options: {
				hotspot: true
			},
			validate: Rule => Rule.required()
		}
	],
	preview: {
		prepare: () => ({ title: "Article Archive" })
	}
};