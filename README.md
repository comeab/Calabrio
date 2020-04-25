# For the purpose of evaluation (will be removed after interview) #
The **core code** of this assignment is on the **path /src/modules/timeSlotModule.js**
Displaying results on the UI is on the path **/src/ui-components/meeting-slots.js** and **/src/index.js**


## Algorithm ##
```
For each pizza expert
   if pizza expert will be working then
       For each of his tasks
          if pizza expert is not having a break then
               add all posisible slots of time he is available for a meeting
          /if
       /For
   /if
/For
```
The algorithm basically, lets each pizza expert / worker fill in a list with all slots of time he is available during his work period.

## Out interface ##

_**getSchedules**: responsible for fetching data from server/locally in a json file_

_**splitTaskInSlots**: splits a period of time into slots of X time where X is the duration of a meeting. So a 120 minute task, with meetings of 15min, can be split into 120/15 = 8 time slots._

_**generateTimeSlots**: For each worker, picks all his tasks and gathers all the possible time slots he can be free for a meeting._

_**getAvailableTimeSlots**: gets the result from all generated slots and filters out those with a minimum number of workers._

## Tech Stack ##
-Vanila JS
-Mocha, Chai
-Webpack and Babel

           
    


# Code test assignment

Programming Case
A Pizza chain has grown a lot recently. Now they are so big that they have some
850 people, known as Pizza Experts, taking pizza orders via phone. To create optimal schedules for their
Pizza Experts they use a state-of-the-art workforce management (WFM) system. This system takes into
account the demand for service and schedule start, end, break and lunch times accordingly.

The Pizza Experts are divided into teams of 8 to 16 people, and each team has a team leader. The team
leaders are responsible for daily coaching, absence reporting, etc. To accomplish this they have a need to
schedule a 15-minute stand-up meeting with the team every day. It is not necessary that all Pizza Experts are
present, but different team leaders have different preferences on how many.

The problem is to find a time slot when there is enough people at work and not on break (lunch or just a
short break).
As a first step PCI wants a tool that based on the json object bellow and an input on how many team members need to be present at the meeting, can find all suitable 15-minute intervals (possible start times are 00, 15, 30 and 45) for the daily stand-up.

JSON object structure
```json
 "Schedules": [
            {
                "Date": "/Date(1450051200000+0000)/",
                "IsFullDayAbsence": false,
                "Name": "Daniel Billsus",
                "PersonId": "4fd900ad-2b33-469c-87ac-9b5e015b2564",
                "Projection": [
                    {
                        "Description": "Social Media",
                        "Start": "/Date(1450080000000+0000)/",
                        "minutes": 120
                    },
                    {
                        "Description": "Short break",
                        "Start": "/Date(1450087200000+0000)/",
                        "minutes": 15
                    }
                ]
            }
       ]
```
