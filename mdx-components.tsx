import type { MDXComponents } from 'mdx/types'

/**
 * Global MDX component registry — required by Next.js App Router.
 * Components added here are available in all .mdx pages without importing.
 * Add custom components here as they are built (Step 4 in PLAN.md).
 */
const components: MDXComponents = {}

export function useMDXComponents(): MDXComponents {
  return components
}
