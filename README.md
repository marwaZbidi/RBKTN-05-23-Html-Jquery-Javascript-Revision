# hello there

### let's have fun and create our first project together

in this sprint we are going to create a mini app, let's agree that it will be an E-commerce website which is basically website to sell items(the items you are selling can be of your own choice could be books, cars, electronics or even pharmaceutical)

### 1. as a first step let's start by structuring our data:

- create a factory function, call it makeSomething (whatever you're selling).
- make sure you pass an id to your function (use the provided generated id for it).
- make sure as well to pass enough information required: (price, name, category, images, date). \* images should contain more than one element meaning an array with at least two image url.

Note: for generating the dates use **Date()** function.

- now create one item of your choice (you can create as many as you want we will use them anyway, but for now we only need one).

### 2. after creating your first item(s) we are going to create our interface

- open your index html file in your browser and see what we have there.
- now change the title and the header (h1 tag) to match what you are selling and style it a bit (align it in the middle of the screen and give it colors, background you choose).
- after doing so, in your index.html file, try to display the first element that you have created.
- make sure you add all the necessary info about your item. \* for now only add the first image of the images array.
- now still in your main js file, select the image that we desplayed earlier, make it listen to an onClick event to update the src attribute (using jQuery ofc), to the next image in the array \* of course if you keep incrementing our function will stop performing at some point (when you reach the last element).
- now go back to your function and modify it in a way that it will reset back to the first images after it reaches the last one (pro tip use closures for this).

### 3. after we finished dealing with one product let's create a class (OOP) for our shop.

our class will hold our data (the state), and will also be used to interact with it. \* meaning it will be responsible for adding updating removing and also displaying.

- create a class call it makeShop, it will take one parameter which is the name of the shop.
- a property called list that will hold an an empty array of objects initially, later the items generated from the factory function makeSomething.
- a method to add a product to the list: which will be makeSomething but you have to make a small upgrade so it automatically adds an item after creating it.
- a method to remove an item from the list based on it's id.
- a method to update a certain info about a certain item: so it will take three parameters, the id of the item, a reference to the property we want to update and the new value.
- since we have more than one category we will need a method to display information concerning a single category: it will take one parameter which will be the category and will print information concerning all the items in that category in a readable way (you have to use each for that).
- a method that sorts items by their price (use **Array.sort()** for this).
- a method that sorts items by their date (use **Array.sort()** for this).

### 4. now we basically structered our data let's see how we can deliver it to our users.

- now create a function to display one product in our shop using jQuery's **.append()** method (don't forget to remove the already existant item from your index.html).
- you may need some unique selectors for your elements (maybe we will need to change them later on who knows) \* for conviniece use (id + <"key">).
- now you are not selling only one item, so let's display all of our elements altogether using **each** (since we already have a function to append one product we might as well use it).
- the design is not very comfortable to look at right, so it needs to look a bit better for our customers.

### 5. the items are displayed and the shop is looking nice and tidy, but it still lacks some user experience.

- first lets start by giving the user the possibility to look at different images of the same product when clicking on the image (we have already implemented the function let's just add it to our project).
- so now when the user clicks on the image of an item the next image in line will be displayed, if it's the last one it will reset to the the first image and start again.
- the user should be able to sort items by their prices or dates:
- since we already created both functions why don't we just use them.

so the display functions uses our list array to visually show the data in our page. initally it did not take any parameters, so whenever we invoke it it will execute the same code without any changes. so if our function takes a different array with each invokation it will execute different code.

- after taking the above piece of information into consideration now we can create two buttons (sort by price and sort by date) when a user clicks on one of them we will simply execute our display function while passing different parameters (the sorted arrays)

hint (look for jQuery **.empty()** method)

- now we want to give the user the possibility to shop for a specific category so let's implement that feature using the same logic of the previous exercise.
  it will also be nice if our user can search for a specific product using it's name.
- let's first start by creating an input tag.
- let's now look for a way to access the input value (hint: search for **jQuery val()** Method)
- now that we have what we are looking for let's create a button search, now align it with the search input.
- when the user clicks on the search icon display only the item(s) with the corresponding name(s).
  again, you can also use the display function for this.

### 6. now that we have done with our user let's create something to help us manage our website.

- so we'll need another interface to manage our shop.
- also we'll need to toggle our interface between the two views.
- so let's create a button to hide the user interface and show the manager's interface.

  hint: look for the jQuey **hide()** and **show()** methods.

- now we have a view for our manager.
- as any manager we want to add items to our collection.
- for now start by just creating a few inputs for the items.
- since we know how to handle inputs and get their values, let's add the data to our list.
  you might want to make some changes to your makeSomething function depending on how you stored your data.
