import IidxId from "./IidxId";

it("IidxId.validate", () => {
    expect(() => new IidxId("")).toThrow(/^空白です。$/);
    expect(() => new IidxId("test")).toThrow(/^8桁の数値である必要があります。$/);
    expect(() => new IidxId("testtes")).toThrow(/^8桁の数値である必要があります。$/);
    expect(() => new IidxId("testtest")).toThrow(/^8桁の数値である必要があります。$/);
    expect(() => new IidxId("12345678")).not.toThrow(/^8桁の数値である必要があります。$/);
    expect(() => new IidxId("1234-5678")).not.toThrow(/^8桁の数値である必要があります。$/);
    expect(() => new IidxId("1234-a678")).toThrow(/^8桁の数値である必要があります。$/);
    expect(() => new IidxId("12345-678")).toThrow(/^8桁の数値である必要があります。$/);
    expect(() => new IidxId("123456789")).toThrow(/^8桁の数値である必要があります。$/);
    expect(() => new IidxId("12345-6789")).toThrow(/^8桁の数値である必要があります。$/);
});

it("IidxId.equals", () => {
    const id1 = new IidxId("1234-5678");
    const id2 = new IidxId("1234-5678");
    expect(id1.equals(id2)).toBeTruthy();

    const id3 = new IidxId("1234-5677");
    expect(id1.equals(id3)).toBeFalsy();
});

it("IidxId.getValue", () => {
    const id = new IidxId("1234-5678");
    expect(id.getValue()).toBe("12345678");
    const id2 = new IidxId("11112222");
    expect(id2.getValue()).toBe("11112222");
});
