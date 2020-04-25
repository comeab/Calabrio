import './ui-components/meeting-slots'
import * as timeSlotModule from './modules/timeSlotModule'

let duration = 15;
let min_nr_pizza_experts = 5;

window.addEventListener('DOMContentLoaded', () => {

    const mainDiv = document.querySelector('.main');
    displayAvailableTimeSlots(duration, min_nr_pizza_experts, mainDiv)

    //Event handlers
    document.querySelector("button#bt_search").addEventListener("click", function () {
        min_nr_pizza_experts = parseInt(document.querySelector("#min_number_experts").value);
        duration = parseInt(document.querySelector("#duration").value);

        displayAvailableTimeSlots(duration, min_nr_pizza_experts, mainDiv)

    });
})


const displayAvailableTimeSlots = (duration, min_number_experts, parentDomElement) => {

    parentDomElement.innerHTML = ''
    const docFrag = document.createDocumentFragment()

    timeSlotModule.setMeetingDuration(duration)
    timeSlotModule.getAvailableTimeSlots(min_number_experts)
        .then(results => {

            results.map(pizza_expert => {
                const meetingSlotComponent = document.createElement('meeting-slot')
                meetingSlotComponent.timeSlot = pizza_expert

                docFrag.appendChild(meetingSlotComponent)

            })
            parentDomElement.appendChild(docFrag)
        })
}