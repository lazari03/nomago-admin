export default {
  async beforeCreate(event) {
    const { data } = event.params;
    const { property, startDate, endDate } = data;
    // property can be an object or just the documentId
    let propertyDocumentId = property;
    if (property && typeof property === 'object' && property.documentId) {
      propertyDocumentId = property.documentId;
    }

    if (!propertyDocumentId || !startDate || !endDate) return;

    // Find overlapping bookings for the same property using documentId
    const overlapping = await strapi.db.query('api::booking.booking').findMany({
      where: {
        property: { documentId: propertyDocumentId },
        startDate: { $lte: endDate },
        endDate: { $gte: startDate }
      }
    });

    if (overlapping.length > 0) {
      throw new Error('This property is already booked for the selected dates.');
    }
  }
};