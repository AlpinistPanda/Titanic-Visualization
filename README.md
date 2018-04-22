# Titanic Visualization

## Overview
This project is D3 data visualization example to show details of passengers of Titanic whether they survived, or died and which class passengers were they. I did this project to satisfy the requirements of Udacity Data Analyst Nanodegree.


## Setup

You can download or clone the project and open titanic.html on Firefox browser and it should work. But it doesn't work on other browsers. For other browsers an html server should be setup.

Python has a builtin Html server, it is possible to google and find information about how to setup server with Python. Or any Apache server will work as well.

## Focus

I tried to focus on the issue of many people lost during the sinking. Many data visualizations use bars, pies, etc. to represent humans, but I feel it is not fair to represent a human lost in this event as some number. This was a tragedy and I wanted to show many people lost in the event. So I wanted to show the extend of the human loss. I also wanted to show different aspects of these people, like which class were they, or their gender.

## Feedback

The project required me to get feedback of at least 3 people.

### 1st feedback
1st feedback was in the initial stage when I was still doing sketches and deciding on how to represent the data. I was planning to represent the passenger with some rectangles, every passenger would be represented with a small rectangle. And also my initial decision was to give different colors to every class to differentiate each class.

The feedback was to find a better way to represent passengers so I decided to find a vector that looks like a human shape. I found a human pictogram online and decided to use it. Also I got rid of the colors to simplify the visualization. But only used colors to show the genders for the passengers.


### 2nd feedback

At this stage I had my first working example with pictograms representing the passengers, and I created clusters for each different groups of passengers for example Women - Survived - First class so there were 12 boxes with pictograms. This was hard to read the information. Feedback was to simplify these clusters. So I decided to remove the boxes and have two labels on the top saying Deceased and Survived clearly separating the data into two distinct categories. And 3 more labels on the sides showing the classes of the passengers.

### 3rd feedback

3rd feedback was more about design aspects such as the colors of the icons, the labels and borders. We worked with a mockup and I revised the design to finalise.
![Design](https://github.com/AlpinistPanda/Titanic-Visualization/blob/master/Design.png)

## Resources

http://bl.ocks.org/alansmithy/d832fc03f6e6a91e99f4 for the pictogram

http://bl.ocks.org/williaster/af5b855651ffe29bdca1 for the tooltip
