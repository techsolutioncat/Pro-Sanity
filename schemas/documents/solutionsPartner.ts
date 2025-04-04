import { RESOURCE_TYPES } from '@/lib'
import { categories } from '@/schemas/fields/categories'
import { language } from '@/schemas/fields/language'
import { pageBody } from '@/schemas/fields/pageBody'
import { seo } from '@/schemas/fields/seo'
import { CogIcon, EditIcon, HashIcon, RocketIcon, TagIcon } from '@sanity/icons'
import { defineType } from 'sanity'

export const solutionsPartner = defineType({
  name: 'solutionsPartner',
  title: 'Solutions Partner',
  icon: RocketIcon,
  type: 'document',
  groups: [
    {
      title: 'Basics',
      name: 'basics',
      icon: EditIcon,
      default: true,
    },
    {
      title: 'Categories',
      name: 'categories',
      icon: TagIcon,
    },
    {
      title: 'SEO',
      name: 'seo',
      icon: HashIcon,
    },
    {
      title: 'Settings',
      name: 'settings',
      icon: CogIcon,
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'basics',
    },
    {
      name: 'company',
      title: 'Company',
      description: 'The company that is this solutions partner.',
      type: 'reference',
      to: [{ type: 'company' }],
      group: 'basics',
    },
    {
      name: 'whatIsIt',
      title: 'What is it?',
      type: 'complexRichText',
      group: 'basics',
    },
    {
      name: 'howWeWorkTogether',
      title: 'How we work together',
      type: 'complexRichText',
      group: 'basics',
    },
    {
      name: 'featuredContent',
      title: 'Featured Content',
      type: 'reference',
      to: RESOURCE_TYPES.map((type) => ({ type })),
      group: 'basics',
    },
    {
      ...pageBody,
      group: 'basics',
    },
    {
      ...language,
      group: 'settings',
    },
    categories,
    seo,
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'language',
      media: 'company.logotype.default',
    },
  },
})
