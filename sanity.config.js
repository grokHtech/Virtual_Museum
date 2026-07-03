import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Interactive Virtual Museum',

  // From manage.sanity.io after running: npx sanity@latest init
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
