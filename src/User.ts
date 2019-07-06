import faker from "faker";

export class User {
  firstName: string;
  lastName: string;
  title: string
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName()
    this.title = faker.name.prefix()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `<div> User Name: ${this.title}  ${this.firstName} ${this.lastName}</div>`;
  }
}
