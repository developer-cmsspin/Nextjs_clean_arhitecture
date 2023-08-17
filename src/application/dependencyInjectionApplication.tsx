
import "reflect-metadata";
import { container } from 'tsyringe';
import GetCliUseCase from "./UseCases/test/GetCliUseCase";


export const DependencyInjectionApplication = (): void => {
    container.register("IGetCliUseCase", { useClass: GetCliUseCase });
}
export default DependencyInjectionApplication