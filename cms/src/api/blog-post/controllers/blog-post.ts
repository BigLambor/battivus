declare const strapi: any;

export default {
  async find(ctx: any) {
    const entities = await strapi.entityService.findMany('api::blog-post.blog-post', {
      ...ctx.query,
    });
    return { data: entities };
  },

  async findOne(ctx: any) {
    const { id } = ctx.params;
    
    // Check if id is numeric or a slug
    const isNumeric = /^\d+$/.test(id);
    
    if (isNumeric) {
      const entity = await strapi.entityService.findOne('api::blog-post.blog-post', parseInt(id), {
        ...ctx.query,
      });
      return { data: entity };
    } else {
      // Find by slug
      const entities = await strapi.entityService.findMany('api::blog-post.blog-post', {
        filters: { slug: id },
        ...ctx.query,
      });
      return { data: entities?.[0] || null };
    }
  },

  async create(ctx: any) {
    const entity = await strapi.entityService.create('api::blog-post.blog-post', {
      data: ctx.request.body.data,
    });
    return { data: entity };
  },

  async update(ctx: any) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.update('api::blog-post.blog-post', id, {
      data: ctx.request.body.data,
    });
    return { data: entity };
  },

  async delete(ctx: any) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::blog-post.blog-post', id);
    return { data: entity };
  },
};
