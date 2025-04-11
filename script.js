// Wait for the page to load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the form and the element to display the total cost
  const form = document.getElementById("pizza-order-form");
  const totalDisplay = document.getElementById("total");

  // Define the topping price and delivery fee
  const toppingPrice = 2;
  const deliveryFee = 5;

  // Add an event listener to the form for the "submit" event
  form.addEventListener("submit", function (event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the selected size and its price
    const sizeDropdown = document.getElementById("pizza-size");
    const basePrice = parseFloat(sizeDropdown.options[sizeDropdown.selectedIndex].dataset.price);

    // Get all the selected toppings
    const selectedToppings = document.querySelectorAll('input[name="topping"]:checked');

    // Check if the delivery option is selected
    const deliverySelected = document.getElementById("delivery").checked;

    // Calculate the total cost
    let totalCost = basePrice + (selectedToppings.length * toppingPrice);
    if (deliverySelected) {
      totalCost += deliveryFee;
    }
    
       // Update the total cost on the page
       totalDisplay.textContent = `Total Cost: $${totalCost}`;
      });
    });