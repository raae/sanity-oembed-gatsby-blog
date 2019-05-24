export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ce7ccc63093b9bbc8838758',
                  title: 'Sanity Studio',
                  name: 'sanity-oembed-gatsby-blog-studio',
                  apiId: 'e5fa4cb1-dd06-49c7-bc71-0d7872bfc9fc'
                },
                {
                  buildHookId: '5ce7ccc6eeb03fd142608382',
                  title: 'Blog Website',
                  name: 'sanity-oembed-gatsby-blog',
                  apiId: '9a1f6291-5e92-4887-a710-40ab73b79777'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raae/sanity-oembed-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-oembed-gatsby-blog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
