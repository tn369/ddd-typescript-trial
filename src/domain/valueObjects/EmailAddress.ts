import AbstractValueObject from "./AbstractValueObject";
class EmailAddress extends AbstractValueObject<"EmailAddress", string> {
    protected value: string;
    constructor(value: string) {
        super();
        this.validate(value);
        this.value = value;
    }

    private validate(value: string) {
        if (!value) {
            throw new Error("メールアドレスが空白です。");
        }
        if (value.length > 319) {
            throw new Error("メールアドレスが長すぎます。");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            throw new Error("メールアドレスが有効ではありません。");
        }
    }
    equals(v: EmailAddress): boolean {
        return this.value === v.value;
    }
    getValue(): string {
        return this.value;
    }
}
export default EmailAddress;
