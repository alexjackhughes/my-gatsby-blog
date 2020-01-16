export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e20d026cfdb82fa526bed88',
                  title: 'Sanity Studio',
                  name: 'my-gatsby-blog-studio',
                  apiId: 'd8975c23-96fc-4860-b650-d212f641a9e9'
                },
                {
                  buildHookId: '5e20d027cfdb82a3426bed9a',
                  title: 'Blog Website',
                  name: 'my-gatsby-blog-web',
                  apiId: 'd03a0fed-1ea0-407a-b129-3e58171d61c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexjackhughes/my-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://my-gatsby-blog-web.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
