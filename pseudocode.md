



#Slot Machine



1. On Page load:
- possible sound or flashing lights around Page.

2. On Start
- when user clicks knob it activates the divs to randomize and shuffles object in each slot 
- knob: 
    - knob will highlight on hover.
    - knob when clicked :
        - if knob is clicked will activate randomizer/ shuffle animation.
- possible lights / added flare on hover. 


3. On Stop
- Stop button is activated after knob is clicked. 
- Stop button will be active as long as there are slots still shuffling.
    - Between Stop Button clicks, there will be a 2 second delay until selected tile is shown.

3. On Click Shuffle Button:


- Shows Selected tile.
- if all slots are spinning:
    - loops through all tiles
- if stopped button is clicked
    - stops first slot
        - selected tile is revealed 
 - if first slot is already stopped
    - stops second slot
        - selected tile is revealed 
- if second slot is already stopped
    - stops last slot
        - last selected tile is revealed.
    

4. If 3 Are A Match
- Alert for match
    - possible add money won to score board ( + 10 ?)
    - clear board 
    - re activates shuffler animation. 



5. If No Match 
- Alert for no match
    - possible subtract money from score board ?
    - clear board
    - re activates shuffler animation.

6. If Two Match: 
- Alert for match
    - possible add money won to score board ( + 5?)
    - clear board
    - re activates shuffler animation 



7. Set Time Interval for Slot shuffling :
- 3 second delay between each start of slot 
    - set interval function for when slots(emojis) get called to start spinning.
    - spin one second 
    - each spin for three seconds
        


    