export default abstract class AbstractConverter<E, D> {
  abstract fromDto(dto: D): E;
  abstract fromEntity(entity: E): D;
}
