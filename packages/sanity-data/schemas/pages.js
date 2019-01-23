// Schema to collect all pages in one schema

import frontPage from './frontPage'

export default {
    name: 'pages',
    title: 'Pages',
    type: 'array',
    of: [frontPage]
}