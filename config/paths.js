export const paths = {
  home: {
    getHref: () => '/',
  },

  app: {
    articles: {
      getHref: () => '/articles',
    },
    registration: {
      getHref: () => '/articles/registration',
    },
    items: {
      getHref: () => '/items',
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
