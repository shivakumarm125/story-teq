// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  try {
    // Fetch the general vehicle information
    const response = await fetch('/api/vehicles.json');
    const vehicles = await response.json();

    //Fetch detailed information for each vehicle
    const vehicleDetailsPromises = vehicles.map(async (vehicle) => {
      try {
        const detailResponse = await fetch(`${vehicle.apiUrl}`);
        const details = await detailResponse.json();

        // Check if the price is available
        if (!details.price) {
          throw new Error('Price information is missing');
        }

        // Combine general vehicle info with details
        return {
          ...vehicle,
          ...details,
        };
      } catch (error) {
        // Ignore vehicles with broken apiUrl or missing price information
        console.error(`Error fetching details for vehicle ${vehicle.id}:`, error);
        return null;
      }
    });

    // Wait for all detail fetches to complete
    const vehicleDetails = await Promise.all(vehicleDetailsPromises);

    // Filter out the invalid vehicles
    const validVehicles = vehicleDetails.filter((vehicle) => vehicle !== null);

    // Return all the combined data
    return validVehicles;
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
    return [];
  }
}
