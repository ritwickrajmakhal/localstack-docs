// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'LocalStack Docs',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      plugins: [
        starlightUtils({
          multiSidebar: {
            switcherStyle: 'dropdown',
          },
        }),
      ],
      sidebar: [
        {
          label: 'AWS',
          collapsed: true,
          items: [
            {
              label: 'Welcome',
              slug: 'aws',
            },
            {
              label: 'Getting Started',
              autogenerate: { directory: '/aws/getting-started' },
              collapsed: true,
            },
            {
              label: 'Local AWS Services',
              slug: 'aws/aws-services',
            },
            {
              label: 'Sample Apps',
              slug: 'aws/sample-apps',
            },
            {
              label: 'Capabilities',
              autogenerate: { directory: '/aws/capabilities' },
              collapsed: true,
            },
            {
              label: 'Tooling',
              slug: 'aws/tooling',
            },
            {
              label: 'Integrations',
              autogenerate: { directory: '/aws/integrations' },
              collapsed: true,
            },
            {
              label: 'Enterprise',
              autogenerate: { directory: '/aws/pro' },
              collapsed: true,
            },
            {
              label: 'Tutorials',
              slug: 'aws/tutorials',
            },
          ],
        },
        {
          label: 'Snowflake',
          autogenerate: { directory: '/snowflake' },
          collapsed: true,
        },
      ],
    }),
  ],
});
