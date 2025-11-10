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
