import { ShowcaseData } from "@showcase/domain/entities/showcase.entity";

export interface IShowcaseRepository {
  get(): Promise<ShowcaseData[]>;
}

export interface IShowcaseDatasource {
  get(): Promise<ShowcaseData[]>;
}
