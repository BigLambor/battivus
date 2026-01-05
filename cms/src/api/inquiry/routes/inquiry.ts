export default {
  routes: [
    {
      method: 'GET',
      path: '/inquiries',
      handler: 'inquiry.find',
      config: { policies: [], middlewares: [] },
    },
    {
      method: 'GET',
      path: '/inquiries/:id',
      handler: 'inquiry.findOne',
      config: { policies: [], middlewares: [] },
    },
    {
      method: 'POST',
      path: '/inquiries',
      handler: 'inquiry.create',
      config: { policies: [], middlewares: [] },
    },
    {
      method: 'PUT',
      path: '/inquiries/:id',
      handler: 'inquiry.update',
      config: { policies: [], middlewares: [] },
    },
    {
      method: 'DELETE',
      path: '/inquiries/:id',
      handler: 'inquiry.delete',
      config: { policies: [], middlewares: [] },
    },
  ],
};
