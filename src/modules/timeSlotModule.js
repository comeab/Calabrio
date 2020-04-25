import  * as api from './api_url'

const EXCLUDED_ACTIVITIES = ["Lunch", "Short break"];
const POSSIBLE__TIMES = [0, 15, 30, 45];

const apiUrl=api.localDataUrl;
let meeting_duration = 15;
let schedules = [];

const getSchedules = async (date) => {

    if (schedules.length > 0) return schedules;

    const res = await fetch(`${apiUrl}${date}`)
    const output = await res.json()
    schedules = output.ScheduleResult.Schedules

    return schedules
}

const processSchedules = (schedules) => {
 
    const results = schedules.reduce((time_slot, pizza_expert) => {

        if (!pizza_expert.IsFullDayAbsence) {

            pizza_expert.Projection.forEach(p => {

                //only get non-break activities
                if (isValidActivity(p.Description)) {

                    const start_time = new Date(extractTimeStamp(p.Start))

                    const slot = new Date(start_time.getTime())
                    const first_slot_time = getNextPossibleTimeSlot(slot.getMinutes(), meeting_duration)
                    slot.setMinutes(first_slot_time)

                    //we are adding this employee to as many slots as this activity allows
                    for (let i = 1; i <= (p.minutes / meeting_duration); i++) {

                        //extract only the information that we want exposed
                        const {Name, PersonId}=pizza_expert

                        if (isValidStartTime(slot.getMinutes())) {
                            if (time_slot[slot]) {
                                time_slot[slot].team.push({Name:Name, PersonId:PersonId})
                            }
                            else {
                                time_slot[slot] = { time: slot, team: [{Name:Name, PersonId:PersonId}] }
                            }
                        }
                        //we reset time for next slot. 
                        slot.setMinutes(slot.getMinutes() + meeting_duration)
                    }
                }
            })
        }
        return time_slot
    }, [])

    return Object.values(results)

}

//helper functions
const extractTimeStamp = (str) => parseInt(RegExp(/(\d+)/).exec(str)[0]);
const closestMultiple = (n, x) => n % x ? n + (x - n % x) : n;
const getNextPossibleTimeSlot = (minutes, meeting_duration) => closestMultiple(minutes, meeting_duration);
const isValidActivity=(activity)=>!EXCLUDED_ACTIVITIES.includes(activity);
const isValidStartTime=(time)=>POSSIBLE__TIMES.includes(time);

export const getAvailableTimeSlots = (nr_experts, date = '2015-12-14') => {
    
    return getSchedules(date)
        .then(schedules => {
            const time_slots = processSchedules(schedules)
            return time_slots.filter(el => el.team.length >= nr_experts)
        })
        .catch(err => console.error(err));
}

export const setMeetingDuration = (value) => {
    meeting_duration = value
}
