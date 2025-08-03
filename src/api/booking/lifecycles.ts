// src/api/booking/content-types/booking/lifecycles.ts

export default {
  async beforeCreate(event) {
    const { data } = event.params;
    const { property, startDate, endDate } = data;
    console.log('Booking data:', data);
    let propertyId = property;
    if (property && typeof property === 'object' && property.id) {
      propertyId = property.id;
    }

    if (!propertyId || !startDate || !endDate) return;


    // Find overlapping bookings for the same property (relation-aware)
    const overlapping = await strapi.db.query('api::booking.booking').findMany({
      where: {
        property: { id: propertyId },
        startDate: { $lte: endDate },
        endDate: { $gte: startDate }
      }
    });

    if (overlapping.length > 0) {
      throw new Error('This property is already booked for the selected dates.');
    }
  }
};