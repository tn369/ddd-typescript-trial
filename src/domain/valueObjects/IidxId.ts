import AbstractValueObject from "./AbstractValueObject";
class PlayerId extends AbstractValueObject<"PlayerId", string> {
    protected value: string;
    constructor(value: string) {
        super();
        this.validate(value);
        this.value = value.replace("-", "");
    }

    private validate(value: string) {
        if (!value) {
            throw new Error("空白です。");
        }
        if (!/^\d{4}-?\d{4}$/.test(value)) {
            throw new Error("8桁の数値である必要があります。");
        }
    }
    equals(v: PlayerId): boolean {
        return this.value === v.value;
    }
    getValue(): string {
        return this.value;
    }
}
export default PlayerId;
