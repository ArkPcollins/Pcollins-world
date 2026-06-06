import { api } from "@/lib/axios";

export class PropertyService {
  static async list(params?: any) {
    const response = await api.get(
      "/properties",
      { params }
    );

    return response.data;
  }

  static async getById(id: string) {
    const response = await api.get(
      `/properties/${id}`
    );

    return response.data;
  }

  static async favorite(id: string) {
    const response = await api.post(
      `/properties/${id}/favorite`
    );

    return response.data;
  }

  static async unfavorite(id: string) {
    const response = await api.delete(
      `/properties/${id}/favorite`
    );

    return response.data;
  }

  static async compare(ids: string[]) {
    const response = await api.post(
      "/properties/compare",
      { ids }
    );

    return response.data;
  }

  static async recommendations() {
    const response = await api.get(
      "/properties/recommendations"
    );

    return response.data;
  }

  static async bookInspection(
    propertyId: string,
    payload: any
  ) {
    const response = await api.post(
      `/properties/${propertyId}/inspection`,
      payload
    );

    return response.data;
  }
}