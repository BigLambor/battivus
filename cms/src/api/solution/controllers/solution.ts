declare const strapi: any;

export default {
  async find(ctx: any) {
    const entities = await strapi.entityService.findMany('api::solution.solution', {
      ...ctx.query,
    });
    return { data: entities };
  },

  async findOne(ctx: any) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne('api::solution.solution', id, {
      ...ctx.query,
    });
    return { data: entity };
  },

  async create(ctx: any) {
    const entity = await strapi.entityService.create('api::solution.solution', {
      data: ctx.request.body.data,
    });
    return { data: entity };
  },

  async update(ctx: any) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.update('api::solution.solution', id, {
      data: ctx.request.body.data,
    });
    return { data: entity };
  },

  async delete(ctx: any) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::solution.solution', id);
    return { data: entity };
  },
};
