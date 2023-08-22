import { classes } from "@automapper/classes";
import { Mapper, createMapper } from "@automapper/core";

// Create and export the mapper
export const mapper: Mapper = createMapper({
  strategyInitializer: classes(),
});
