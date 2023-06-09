import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

import {myTheme} from './theme'
import StudioNavBar from './components/StudioNavBar'
import Logo from './components/Logo'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'daily_blog_content',
  title: 'CSE Daily Blog Content Studio',
  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
  studio: {
    components: {navbar: StudioNavBar, logo: Logo},
  },
})
