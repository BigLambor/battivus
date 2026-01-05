declare const strapi: any;

export default {
  async find(ctx: any) {
    const entities = await strapi.entityService.findMany('api::category.category', {
      ...ctx.query,
    });
    return { data: entities };
  },

  async findOne(ctx: any) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne('api::category.category', id, {
      ...ctx.query,
    });
    return { data: entity };
  },

  async create(ctx: any) {
    const entity = await strapi.entityService.create('api::category.category', {
      data: ctx.request.body.data,
    });
    return { data: entity };
  },

  async update(ctx: any) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.update('api::category.category', id, {
      data: ctx.request.body.data,
    });
    return { data: entity };
  },

  async delete(ctx: any) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::category.category', id);
    return { data: entity };
  },
};
