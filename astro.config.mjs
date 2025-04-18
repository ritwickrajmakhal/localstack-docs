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
          autogenerate: { directory: '/aws' },
        },
        {
          label: 'Snowflake',
          autogenerate: { directory: '/snowflake' },
        },
      ],
    }),
  ],
});
