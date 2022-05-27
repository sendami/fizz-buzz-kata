import { printNumbers } from './index';

describe('Fizz Buzz test', () => {

    it('should print one line per each number from 1 to 100', () => {
        const arr = printNumbers();

        expect(arr.length).toEqual(100);
    })

})