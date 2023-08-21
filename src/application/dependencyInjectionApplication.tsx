
import "reflect-metadata";
import { container } from 'tsyringe';
import GetCliUseCase from "./useCases/test/GetCliUseCase";
import { MapperConfigurationExchange } from "./configuration/mappings/mapperExchange";


export const DependencyInjectionApplication = (): void => {
    MapperConfigurationExchange();
    container.register("IGetCliUseCase", { useClass: GetCliUseCase });
}
export default DependencyInjectionApplication