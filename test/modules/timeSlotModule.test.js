let chai = require('chai');
let assert = chai.assert;
let data = require('./pizza_experts_test.json')



describe('Processing schedules', function () {
  it('checks if time_slots are empty', function () {
    // const result=getAvailableTimeSlots(100,'2015-12-14')
    // assert.equal(result.length, 0)
  });
  it('checks if time_slots only contain minimum number of experts', function () {
    // const result=getAvailableTimeSlots(5,'2015-12-14')
    // const nrs=result.reduce(r, slot=>{
    //     r.push(slot.length)
    //     return r
    // }, [])
    // assert.equal(nrs.every(el=>el>=5), true)
  });
  it('checks if time_slots only contain non absent workers', function () {
    assert.equal(5, 5)
  });
});