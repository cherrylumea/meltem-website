import type { StructureBuilder } from 'sanity/structure'

const SINGLETONS = ['homePage', 'siteSettings']
const HIDDEN_FROM_LIST = [...SINGLETONS, 'post', 'announcement', 'category']

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .id('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('announcement').title('Announcements'),
      S.documentTypeListItem('category').title('Categories'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !HIDDEN_FROM_LIST.includes(listItem.getId() || '')
      ),
    ])
