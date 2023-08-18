import TestInformation from "@/domain/test/models/testInformation";

export default interface IGetCliUseCase {
  handler(): Promise<TestInformation>;
}
