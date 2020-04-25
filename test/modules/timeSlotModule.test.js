import * as timeSlotModule from '../../src/modules/timeSlotModule'
let chai = require('chai');
let assert = chai.assert;
let data = require('./pizza_experts_test.json')



describe('Processing schedules', function () {
  it('split time in slots of 15 minute duration', function () {
    const testObject = {
      Start: "/Date(1450080000000+0000)/",
      Description: "Social media",
      minutes: 120
    }
    const arr = timeSlotModule.splitTaskInSlots(testObject.Start, testObject.minutes, 15)
    assert.equal(arr.length, 8)
    assert.equal(arr[arr.length - 1].getTime(), new Date('2015-12-14T09:45:00.000Z').getTime())
  });

});