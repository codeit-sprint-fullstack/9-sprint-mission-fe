import type { Route } from 'next';

interface PathConfig {
  getHref: (...args: any[]) => Route;
}

interface PathMap {
  [key: string]: PathConfig | PathMap;
}

export const paths = {
  home: {
    getHref: () => '/',
  },
  app: {
    articles: {
      getHref: () => '/articles',
    },
    articleDetail: {
      getHref: (id: number | string) => `/articles/${id}` as Route,
    },
    registration: {
      getHref: () => '/articles/registration',
    },
    items: {
      getHref: () => '/items',
    },
    itemDetail: {
      getHref: (id: number | string) => `/items/${id}` as Route,
    },
  },
  auth: {
    login: {
      getHref: () => '/login',
    },
    signup: {
      getHref: () => '/signup',
    },
  },
} satisfies PathMap;
