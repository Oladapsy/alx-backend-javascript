const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

const downValA = 3.45;
const downValB = 2.25
const highValA = 4.902;
const highValB = 5.5;
const negA = -3.6;
const negB = -6.2;
const zero = 0;
const SUM = 'SUM';
const DIVIDE = 'DIVIDE';
const SUBTRACT = 'SUBTRACT';

describe('type()', function() {
  describe('Test for Sum', function() {
    it('let us check for when type is sum 2 round down', function() {
      const A = calculateNumber(SUM, downValA, downValB);
      expect(A).to.equal(5);
    });
    it('let us check for when type is sum 1 & 1 round down & up', function() {
      const A = calculateNumber(SUM, highValA, downValB);
      expect(A).to.equal(7);
    });
    it('let us check for when type is sum 2 round up', function() {
      const A = calculateNumber(SUM, highValA, highValB);
      expect(A).to.equal(11);
    });
    it('let us check for when type is sum with -ve val', function() {
      const A = calculateNumber(SUM, negA, negB);
      expect(A).to.equal(-10);
    });
    it('let us check for when type is sum with 0 val', function() {
      const A = calculateNumber(SUM, zero, zero);
      expect(A).to.equal(0);
    });
  });
  describe('Test for Subtract', function() {
    it('let us check for when type is subtract 2 round down', function() {
      const A = calculateNumber(SUBTRACT, downValA, downValB);
      expect(A).to.equal(1);
    });
    it('let us check for when type is subtract 1 & 1 round down & up', function() {
      const A = calculateNumber(SUBTRACT, highValA, downValB);
      expect(A).to.equal(3);
    });
    it('let us check for when type is subtract 2 round up', function() {
      const A = calculateNumber(SUBTRACT, highValA, highValB);
      expect(A).to.equal(-1);
    });
    it('let us check for when type is subtract with -ve val', function() {
      const A = calculateNumber(SUBTRACT, negA, negB);
      expect(A).to.equal(2);
    });
    it('let us check for when type is subtract with 0 val', function() {
      const A = calculateNumber(SUBTRACT, zero, zero);
      expect(A).to.equal(0);
    });
  });
  describe('Test for Divide', function() {
    it('let us check for when type is divide 2 round down', function() {
      const A = calculateNumber(DIVIDE, downValA, downValB);
      expect(A).to.equal(1.5);
    });
    it('let us check for when type is divide 1 & 1 round down & up', function() {
      const A = calculateNumber(DIVIDE, highValA, downValB);
      expect(A).to.equal(2.5);
    });
    it('let us check for when type is divide 2 round up', function() {
      const A = calculateNumber(DIVIDE, highValA, highValB);
      expect(A).to.equal(0.8333333333333334);
    });
    it('let us check for when type is divide with -ve val', function() {
      const A = calculateNumber(DIVIDE, negA, negB);
      expect(A).to.equal(0.6666666666666666);
    });
    it('let us check for when type is divide with 0 val', function() {
      const A = calculateNumber(DIVIDE, zero, zero);
      expect(A).to.equal('Error');
    });
  });
    it('let us check for when type is divide with 0 as valB', function() {
      const A = calculateNumber(DIVIDE, downValA, zero);
      expect(A).to.equal('Error');
    });

})
