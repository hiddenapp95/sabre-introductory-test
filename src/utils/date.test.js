import {getAgeFromDate} from "./date";

test('Difference between "08-07-2018" and "22-02-1995" is 23 years', () => {
    const today = "2018-07-08";
    const inputDate = "1995-02-22";
    const expected = 23;

    expect(getAgeFromDate(inputDate,today)).toBe(expected);
});

