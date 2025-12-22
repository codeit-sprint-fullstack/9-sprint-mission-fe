export const paths = {
  home: {
    getHref: () => '/',
  },

  app: {
    articles: {
      getHref: () => '/articles',
    },
    articleDetail: {
      getHref: (id: number | string) => `/article/${id}`,
    },
    registration: {
      getHref: () => '/articles/registration',
    },
    items: {
      getHref: () => '/items',
    },
    itemDetail: {
      getHref: (id: number | string) => `/items/${id}`,
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
};
