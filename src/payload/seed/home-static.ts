import type { Page } from '../payload-types'

export const staticHome: Page = {
  id: '',
  title: 'Home',
  slug: 'home',
  createdAt: '',
  updatedAt: '',
  meta: {
    title: 'فروشگاه هفن',
    description: 'فروشگاه پوشاک زنانه',
  },
  hero: {
    type: 'lowImpact',
    richText: [
      {
        children: [
          {
            text: 'فروشگاه هفن',
          },
        ],
        type: 'h1',
      },
      {
        children: [
          {
            text: ' به فروشگاه هفن خوش آمدید, ',
          },
          {
            text: ' در حال حاضر پایگاه داده شما خالی می‌باشد. ',
            bold: true,
          },
          {
            text: 'برای ساخت محصول و صفحه جدید, ',
          },
          {
            type: 'link',
            linkType: 'custom',
            url: '/admin',
            children: [
              {
                text: ' وارد بخش مدیریت شوید',
              },
            ],
          },
        ],
      },
    ],
    media: '',
  },
  layout: [
    {
      richText: [
        {
          children: [
            {
              text: 'Seed your database',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'در حال حاضر پایگاه داده شما خالی می‌باشید ',
            },
            {
              type: 'link',
              linkType: 'custom',
              url: '/admin',
              children: [
                {
                  text: 'وارد داشبورد بخش مدیریت خود شوید ',
                },
              ],
            },
            {
              text: 'و پایگاه داده خود را خوراک دهید ',
            },
          ],
        },
      ],
      links: [
        {
          link: {
            type: 'custom',
            url: '/admin',
            label: 'Go to dashboard',
            appearance: 'primary',
            reference: null,
          },
        },
      ],
      blockName: 'CTA',
      blockType: 'cta',
    },
  ],
}
