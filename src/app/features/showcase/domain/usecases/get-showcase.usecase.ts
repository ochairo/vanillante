import { IShowcaseRepository } from "@showcase/domain/interfaces/showcase.interfaces";

export default class GetShowcase {
  constructor(private repository: IShowcaseRepository) {}

  async execute() {
    return await this.repository.get();
  }
}
