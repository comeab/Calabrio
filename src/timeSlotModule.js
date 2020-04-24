var timeSlotModule = (function () {

    const EXCLUDED_ACTIVITIES = ["Lunch", "Short break"]
    const POSSIBLE__TIMES = [0,15, 30, 45]

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = `${proxyUrl}http://pizzacabininc.azurewebsites.net/PizzaCabinInc.svc/schedule/`

    let meeting_duration = 15
    let schedules = []

    const setMeetingDuration = (value) =>{
        meeting_duration = value
    }

    
    const getSchedules = async (date)=>{
    
        if(schedules.length>0) return schedules;

        const res = await fetch(`${targetUrl}${date}`)
        const output = await res.json()
        schedules = output.ScheduleResult.Schedules

        return schedules
    }


    const getAvailableTimeSlots = (nr_experts, date = '2015-12-14') => {
          return getSchedules(date)
            .then(schedules => {

                const time_slots = processSchedules(schedules)
                return time_slots.filter(el => el.team.length >= nr_experts)
            })
            .catch(err => console.error(err));
    }

    const processSchedules = (schedules) => {
        console.log(meeting_duration)
        const results= schedules.reduce((time_slot, pizza_expert) => {

            if (!pizza_expert.IsFullDayAbsence) {
                pizza_expert.Projection.forEach(p => {

                    if (!EXCLUDED_ACTIVITIES.includes(p.Description)) {

                        const start_time = new Date(extractTimeStamp(p.Start))

                        const _slot = new Date(start_time.getTime())
                        const first_slot_time = getNextPossibleMeetingTime(_slot.getMinutes(), meeting_duration)
                        _slot.setMinutes(first_slot_time)

                        //we are adding this employee to as many slots as this activity allows
                        for (i = 1; i <= (p.minutes / meeting_duration); i++) {

                            if(POSSIBLE__TIMES.includes(_slot.getMinutes())){
                                if (time_slot[_slot]) {
                                    time_slot[_slot].team.push(pizza_expert)
                                }
                                else {
                                    time_slot[_slot] = { time: new Date(_slot.getTime()), team: [pizza_expert] }
                                }
                            }
                            //we reset time for next slot. 
                            _slot.setMinutes(_slot.getMinutes() + meeting_duration)
                        }
                    }
                })
            }
            return time_slot
        }, [])

        return Object.values(results)

    }

    const displayAvailableTimeSlots =(duration, min_number_experts, parentDomElement)=>{
      
        parentDomElement.innerHTML=''
        
        setMeetingDuration(duration)
        getAvailableTimeSlots(min_number_experts)
        .then(results => {

             results.map(pizza_expert => {
                const meetingSlotComponent = document.createElement('meeting-slot')
                meetingSlotComponent.timeSlot = pizza_expert

                parentDomElement.appendChild(meetingSlotComponent)
            })
        })
    }
    //extract the first number in the string. which is our date
    const extractTimeStamp = (str) =>parseInt(RegExp(/(\d+)/).exec(str)[0]);
    const closestMultiple = (n, x) => n % x ? n + (x - n % x) : n;
    const getNextPossibleMeetingTime = (minutes, meeting_duration) => closestMultiple(minutes, meeting_duration);

    
    return {
        getAvailableTimeSlots,
        displayAvailableTimeSlots
    }
}())


module.exports = timeSlotModule