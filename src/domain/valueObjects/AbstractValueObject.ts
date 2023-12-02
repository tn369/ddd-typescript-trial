abstract class AbstractValueObject<T extends string, K> {
    readonly valueObjectType: T | undefined;
    abstract equals(v: AbstractValueObject<T, K>): boolean;
}

export default AbstractValueObject;
