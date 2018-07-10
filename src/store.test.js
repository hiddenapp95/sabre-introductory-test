import store from "./store"

test('Correctly exports store', () => {
    expect(!!store).toBe(true);
});
