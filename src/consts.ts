import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Arthur Vasseur Blog',
  description:
    'Personal blog where I share my thoughts and experiences.',
  href: 'https://arthurvasseur.fr',
  author: 'Arthur Vasseur',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/ArthurVasseur',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/arthur-vasseur/',
    label: 'LinkedIn',
  }
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
