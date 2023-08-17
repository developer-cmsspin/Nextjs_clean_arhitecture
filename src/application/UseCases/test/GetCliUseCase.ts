import IGetCliUseCase from "@/domain/interfaces/application/cli/iGetCliUseCase";

export default class GetCliUseCase implements IGetCliUseCase {
  async handler(): Promise<TestInformation> {
    return new TestInformation();
  }
}
