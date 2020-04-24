import './ui-components/meeting-slots'
import timeSlotModule from './timeSlotModule'

(function () {

    let duration = 15
    let min_nr_pizza_experts = 1

    window.addEventListener('load', () => {

        const mainDiv = document.querySelector('.main');
        timeSlotModule.displayAvailableTimeSlots(duration, min_nr_pizza_experts, mainDiv)

        //Event handlers
        document.querySelector("button#bt_search").addEventListener("click", function () {
            min_nr_pizza_experts = parseInt(document.querySelector("#min_number_experts").value);
            duration = parseInt(document.querySelector("#duration").value);

            timeSlotModule.displayAvailableTimeSlots(duration, min_nr_pizza_experts, mainDiv)

        });
    })

}())
