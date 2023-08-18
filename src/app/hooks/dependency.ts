"use client";

import DependencyInjectionApplication from "@/application/dependencyInjectionApplication";
import { DependencyInjectionInfrastructureService } from "@/infrastructure/service/dependencyInjectionInfrastructureService";
import "reflect-metadata";
import { container } from "tsyringe";

export function dependencyInjection() {
  DependencyInjectionApplication();
  DependencyInjectionInfrastructureService();
}

export function getDependency<T>(token: string): T {
  return container.resolve<T>("ITestAction");
}
