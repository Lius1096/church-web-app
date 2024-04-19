class Event {
    constructor(title, description, startDate, endDate, location, organizer, imageUrl) {
      this.title = title;
      this.description = description;
      this.startDate = startDate;
      this.endDate = endDate;
      this.location = location;
      this.organizer = organizer;
      this.imageUrl = imageUrl;
    }
  }
  
  module.exports = Event;
  