/**
 * Created by Frederik on 12/2/2024.
 */

import { getLocationService } from "lightning/mobileCapabilities";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class LocationServiceUtil {
  static async getCurrentPosition(options = { enableHighAccuracy: true }) {
    const locationService = getLocationService();

    if (!locationService?.isAvailable()) {
      throw new Error("LocationService Is Not Available");
    }

    const result = await locationService.getCurrentPosition(options);
    return {
      latitude: Number(result.coords.latitude.toFixed(6)),
      longitude: Number(result.coords.longitude.toFixed(6)),
      rawLocation: result
    };
  }
}