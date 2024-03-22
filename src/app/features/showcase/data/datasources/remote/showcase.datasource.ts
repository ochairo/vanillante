import { ShowcaseData } from "@showcase/domain/entities/showcase.entity";
import { IShowcaseDatasource } from "@showcase/domain/interfaces/showcase.interfaces";

export default class ShowcaseDatasource implements IShowcaseDatasource {
  async get(): Promise<ShowcaseData[]> {
    try {
      // TODO: Get URL from environment.ts
      // TODO: Create HTTP Interceptor
      // TODO: Create Error handling
      const response = await fetch("http://localhost:3000/showcase/get");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
