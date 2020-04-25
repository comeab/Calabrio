import { remoteServerUrl, localDataUrl } from './api_url'
const fetch = require('node-fetch')
const EXCLUDED_TASKS = ["Lunch", "Short break"];
const POSSIBLE__TIMES = [0, 15, 30, 45];

const apiUrl = remoteServerUrl;
let meetingDuration = 15;
let schedules = [];

const getSchedules = async (date) => {

    if (schedules.length > 0) return schedules;

    const res = await fetch(`${apiUrl}${date}`);
    const output = await res.json();
    schedules = output.ScheduleResult.Schedules;

    return schedules;
}

const generateTimeSlots = (schedules, meetingDuration) => {

    const results = schedules.reduce((timeSlots, pizzaExpert) => {
        const { Name, PersonId } = pizzaExpert;

        if (!pizzaExpert.IsFullDayAbsence) {

            pizzaExpert.Projection.forEach(task => {
                //only get tasks where pizza expert is available
                if (!isPizzaExpertOnABreak(task.Description)) {
                    //we calculate all possible time slots based meeting duration within this task.    
                    const timeSlotsOfCurrentTask = splitTaskInSlots(task.Start, task.minutes, meetingDuration)
                    timeSlotsOfCurrentTask.forEach(slot => {
                        if (!timeSlots[slot]) {
                            timeSlots[slot] = { time: slot, team: [] }
                        }
                        timeSlots[slot].team.push({ Name: Name, PersonId: PersonId });
                    })
                }
            })
        }
        return timeSlots
    }, [])

    return Object.values(results)
}

//@export only for unit testing
export const splitTaskInSlots = (taskStart, taskDuration, meetingDuration) => {
    let timeSlots = [];
    const startTime = new Date(extractTimeStamp(taskStart));
    const slot = new Date(startTime.getTime());

    //next possible point in time this worker can participate in a meeting
    const nextPossibleSlot = getNextPossibleTimeSlot(slot.getMinutes(), meetingDuration);
    slot.setMinutes(nextPossibleSlot);

    //we are adding this employee to as many slots as this activity allows
    for (let i = 1; i <= (taskDuration / meetingDuration); i++) {
        if (isValidStartTime(slot.getMinutes())) {
            timeSlots.push(new Date(slot.getTime()));
        }
        //we reset time for next slot. 
        slot.setMinutes(slot.getMinutes() + meetingDuration);
    }
    return timeSlots;
}

export const getAvailableTimeSlots = (nr_experts, date = '2015-12-14') => {

    return getSchedules(date)
        .then(schedules => {
            const timeSlots = generateTimeSlots(schedules, meetingDuration);

            return timeSlots.filter(el => el.team.length >= nr_experts);
        })
        .catch(err => console.error(err))
}

export const setMeetingDuration = (value) => {
    meetingDuration = value;
}



//helper functions
const getNextPossibleTimeSlot = (minutes, meetingDuration) => closestMultiple(minutes, meetingDuration);
const isPizzaExpertOnABreak = (task) => EXCLUDED_TASKS.includes(task);
const isValidStartTime = (time) => POSSIBLE__TIMES.includes(time);

const extractTimeStamp = (str) => parseInt(RegExp(/(\d+)/).exec(str)[0]);
const closestMultiple = (n, x) => n % x ? n + (x - n % x) : n;