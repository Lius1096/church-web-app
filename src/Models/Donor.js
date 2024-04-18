class Donor {
    constructor(firstName, lastName, email, phoneNumber, address, donationAmount, donationDate) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.address = address;
      this.donationAmount = donationAmount;
      this.donationDate = donationDate;
    }
  }
  
  module.exports = Donor;
  