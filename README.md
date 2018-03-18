#Fruitastic Exercise

This goal of this exercise is to take JSON data from an external source, and to visualize it into a simple UI.

You'll be using the FruitasticAPI, which is a silly service that returns random people's favorite fruits as an array. It has one method: .get(callback) which accepts a function that is called with one parameter (JSON response) when the data is ready. Do not modify FruitasticApi.js.

Use any library/framework you like and add whatever files you need. Style with CSS any way you like.

A UX mockup is provided.
  
  
##Design spec:

* Load data by calling FruitasticApi.get().
* Create a horizontal bar chart (no more than 400px wide) that shows how popular each fruit is compared to the others. This should be based on the total number of favorites for each fruit. Each row should have a label for the name of the fruit, plus its total count. There's no need to show an axis with units on it.
* Underneath the bar chart, display a list of all the items in the array you got from FruitasticApi.get(). Each item should display the person's name and favorite fruit.
* Each bar chart should be click-able. when clicked, visually highlight the row and use console.log to output 'Fruit selected: {fruitname}, {fruitnameTotal}'
* Do not cause a browser refresh, or navigate to another html page.

  
##Stretch goals! (optional):

- When a bar chart row is clicked, the list should be filtered to only display the people that chose that fruit as their favorite.
- Create an animation where the bars grow to their correct width when the data is loaded.
- Stack each bar from top to bottom in order of most popular to least popular.
- Each bar is a different color.


