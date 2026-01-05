declare const strapi: any;

export default {
  async find(ctx: any) {
    const entities = await strapi.entityService.findMany('api::product.product', {
      ...ctx.query,
    });
    return { data: entities };
  },

  async findOne(ctx: any) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne('api::product.product', id, {
      ...ctx.query,
    });
    return { data: entity };
  },

  async create(ctx: any) {
    const entity = await strapi.entityService.create('api::product.product', {
      data: ctx.request.body.data,
    });
    return { data: entity };
  },

  async update(ctx: any) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.update('api::product.product', id, {
      data: ctx.request.body.data,
    });
    return { data: entity };
  },

  async delete(ctx: any) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::product.product', id);
    return { data: entity };
  },
};
