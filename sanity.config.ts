'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { codeInput } from '@sanity/code-input'



// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion} from './src/sanity/env'
// import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
import schemas from '@/sanity/schemas'

export default defineConfig({
  basePath: '/studio',
  projectId: '43gepe6j',
  dataset: 'production',
  schema: {types:schemas},
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    codeInput(),
  
  ],
})