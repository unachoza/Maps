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
      <h1>Company Name: ${this.companyName}</h1>
      <h3>CatchPhrase: ${this.catchPhras}</h3>
    </div>
    `;
  }
}
