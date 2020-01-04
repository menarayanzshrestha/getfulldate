const { convertTo12HRFormat, getFullDate } = require('./index');

//unit test
test('it should return hour minute and ampm', () => {
    let data = convertTo12HRFormat(new Date(1578073312473));
    expect(data).toBe('11:26 PM');
})

//integration test
test('it should return month day hour minute and ampm', () => {
    let data = getFullDate(new Date(1578073312473));
    expect(data).toBe('Jan 03, 2020 11:26 PM');

    let data2 = getFullDate(new Date(1578073312473),false);
    expect(data2).toBe('Jan 03, 2020 ');
})