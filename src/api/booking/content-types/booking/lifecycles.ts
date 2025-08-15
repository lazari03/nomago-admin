
// @ts-ignore
const strapi: any = global.strapi || {};

export default {
  async beforeCreate(event) {
    const { property, startDate, endDate } = event.params.data;
    const id = typeof property === 'string' ? property : property?.documentId;
    if (!id || !startDate || !endDate) return;
    const overlapping = await strapi.db.query('api::booking.booking').findMany({
      where: {
        property: { documentId: id },
        startDate: { $lte: endDate },
        endDate: { $gte: startDate }
      }
    });
    if (overlapping.length) throw new Error('This property is already booked for the selected dates.');
  }
};
