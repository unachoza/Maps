import { User } from "./User";
import { Company } from "./Company";


interface Mark {
    location: {
        lat: number,
        lng: number
    }
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mark: Mark): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mark.location.lat,
        lng: mark.location.lng
      }
    });
  }
}
