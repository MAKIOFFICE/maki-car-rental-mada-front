import { Http } from "./http";

export default class CarService {
  static async getCarList() {
    return await Http.get("/appaTK2gCtI8GL3Qd/tblF0lWbYZbzt7fX3");
  }

  static async getCarListByPlace(params) {
    let filterFormula = "";
    
    if (params) {
      filterFormula = `availability_place = '${params}'`;
    }
    
    return await Http.get("/appaTK2gCtI8GL3Qd/tblF0lWbYZbzt7fX3", {
      filterByFormula: filterFormula,
    });
  }

  // static async getImageByCarId(carId) {
  //   return await Http.get("/appaTK2gCtI8GL3Qd/tblyapLCeKyAKxxui", carId);
  // }

  static async createLocation() {
    return await Http.post("/appaTK2gCtI8GL3Qd/tbl3ZxOPypZ6kmARC");
  }
}