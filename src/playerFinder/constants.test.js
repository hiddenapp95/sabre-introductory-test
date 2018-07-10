import * as constants from "./constants";

test('Constant NAME is a string', () => {
    expect(typeof constants.NAME === 'string').toBe(true);
});

