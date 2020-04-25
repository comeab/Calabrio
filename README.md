# Calabrio code test assignment

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
