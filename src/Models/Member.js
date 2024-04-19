class Member {
    constructor(firstName, lastName, dateOfBirth, gender, address, phoneNumber, email, joinDate, maritalStatus, baptized, photoUrl) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dateOfBirth = dateOfBirth;
      this.gender = gender;
      this.address = address;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.joinDate = joinDate;
      this.maritalStatus = maritalStatus;
      this.baptized = baptized;
      this.photoUrl = photoUrl;
    }
  }
  
  module.exports = Member;
  