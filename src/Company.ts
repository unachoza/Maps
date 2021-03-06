import faker from "faker";

export class Company {
  companyName: string;
  catchPhras: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhras = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `
     <div>
      <div><strong>Company Name:</strong> ${this.companyName}</div>
      <div><strong>CatchPhrase:</strong> ${this.catchPhras}</div>
    </div>
    `;
  }
}
