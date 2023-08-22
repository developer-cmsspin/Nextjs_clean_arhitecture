
import { mapper } from "@/application/configuration/mappings/mapper";
import { Mapper } from "@automapper/core";
import "reflect-metadata";
import { container } from 'tsyringe';
import { MapperConfigurationExchange } from "./configuration/mappings/mapperExchange";
import GetCliUseCase from "./useCases/test/GetCliUseCase";


export const DependencyInjectionApplication = (): void => {
    container.register<Mapper>("IMapper", { useValue: mapper });
    container.register("IGetCliUseCase", { useClass: GetCliUseCase });
    MapperConfigurationExchange();

}
export default DependencyInjectionApplication