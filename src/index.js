import './ui-components/meeting-slots'
import timeSlotModule from './timeSlotModule'

(function () {
    
    window.addEventListener('load', () => {
        document.querySelector("button#bt_search").addEventListener("click", loadTimeSlots);
        displayTimeSlots(15, 5);
    })


   const displayTimeSlots = function(duration, min_number_experts){
        const mainDiv = document.querySelector('.main');
        timeSlotModule.displayAvailableTimeSlots(duration,min_number_experts,mainDiv)
    }

    const loadTimeSlots=function() {
        
        const nr_experts = parseInt(document.querySelector("#min_number_experts").value);
        const duration = parseInt(document.querySelector("#duration").value);

        displayTimeSlots(duration, nr_experts)
    }

}())
