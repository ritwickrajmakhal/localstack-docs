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
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  slug: 'aws/capabilities',
                },
                {
                  label: 'LocalStack Web App',
                  autogenerate: {
                    directory: '/aws/capabilities/web-app',
                  },
                  collapsed: true,
                },
                {
                  label: 'Config',
                  autogenerate: {
                    directory: '/aws/capabilities/config',
                  },
                  collapsed: true,
                },
                {
                  label: 'Cloud Sandbox',
                  autogenerate: {
                    directory: '/aws/capabilities/cloud-sandbox',
                  },
                  collapsed: true,
                },
                {
                  label: 'Networking',
                  autogenerate: {
                    directory: '/aws/capabilities/networking',
                  },
                  collapsed: true,
                },
                {
                  label: 'State Management',
                  autogenerate: {
                    directory: '/aws/capabilities/state-management',
                  },
                  collapsed: true,
                },
                {
                  label: 'Chaos Engineering',
                  autogenerate: {
                    directory: '/aws/capabilities/chaos-engineering',
                  },
                  collapsed: true,
                },
                {
                  label: 'Security Testing',
                  autogenerate: {
                    directory: '/aws/capabilities/security-testing',
                  },
                  collapsed: true,
                },
              ],
            },
            {
              label: 'Tooling',
              collapsed: true,
              items: [
                {
                  label: 'Overview',
                  slug: 'aws/tooling',
                },
                {
                  label: 'LocalStack SDKs',
                  autogenerate: {
                    directory: '/aws/tooling/localstack-sdks',
                  },
                  collapsed: true,
                },
                {
                  label: 'Extensions',
                  autogenerate: {
                    directory: '/aws/tooling/extensions',
                  },
                  collapsed: true,
                },
                {
                  label: 'Testing Utils',
                  slug: 'aws/tooling/testing-utils',
                },
                {
                  label: 'LocalSurf',
                  slug: 'aws/tooling/localsurf',
                },
                {
                  label: 'AWS Replicator',
                  slug: 'aws/tooling/aws-replicator',
                },
                {
                  label: 'Event Studio',
                  slug: 'aws/tooling/event-studio',
                },
                {
                  label: 'Transparent Endpoint Injection',
                  slug: 'aws/tooling/transparent-endpoint-injection',
                },
                {
                  label: 'DNS Server',
                  slug: 'aws/tooling/dns-server',
                },
                {
                  label: 'Lambda Tools',
                  autogenerate: {
                    directory: '/aws/tooling/lambda-tools',
                  },
                  collapsed: true,
                },
              ],
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
