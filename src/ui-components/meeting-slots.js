class MeetingSlot extends HTMLElement {

    constructor() {
        super()
        this.addEvents()

    }
    set timeSlot(value) {
        this._timeSlot = value
        this.render()
    }
    get timeSlot() {
        return this._timeSlot
    }

    formatDate(date) {
        const addZero = (i) => i < 10 ? "0" + i : i
        return addZero(date.getHours()) + ":" + addZero(date.getMinutes())
    }
    render() {
        const div = document.createElement('div')

        div.innerHTML = `
            <div class='card'>
                <div><b>${this.formatDate(this._timeSlot.time)} -  (${this._timeSlot.team.length}) </b></div>       
                <div class='team show'>
                    ${this._timeSlot.team.map(el => {
            return `<div>${el.Name}</div>`
        }).join('')}
                </div>
            </div>
            `
        this.appendChild(div)
    }

    addEvents() {
        this.addEventListener('mouseenter', e => {
            this.querySelector(".team").classList.toggle("show")
        });
        this.addEventListener('mouseleave', e => {
            this.querySelector(".team").classList.toggle("show")
        });
    }
}

customElements.define('meeting-slot', MeetingSlot)