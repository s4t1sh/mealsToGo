import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantServices = (location = "51.219448,4.402464") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("No restaurnat Found");
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({results=[]}) => {
    const mappedResults = results.map((restaurant)=>{
      restaurant.photos = restaurant.photos.map((p) => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      });
        return {
            ...restaurant,
            address: restaurant.vicinity,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now
        }
    })
  return camelize(mappedResults);
};