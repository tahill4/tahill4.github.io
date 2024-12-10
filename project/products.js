// Wait for the document to be fully loaded
$(document).ready(function () {
    // Initialize product search autocomplete
    $("#search").autocomplete({
        source: ["Apples", "Bananas", "Lemons", "Grapes", "Broccoli", "Cherries", "Cabbage", "Tomatoes", "Peppers"],
        minLength: 2,
        error: function (xhr, status, error) {
            console.error("Search error:", error);
        }
    });

    // Add hover animation to product items
    $(".item").hover(
        function () {
            $(this).animate({
                width: "420px",
                backgroundColor: "rgb(161, 161, 209)"
            }, 200);
        },
        function () {
            $(this).animate({
                width: "400px",
                backgroundColor: "rgb(141, 141, 189)"
            }, 200);
        }
    );

    // Initialize price calculator
    /*** Calculates total price based on quantity and unit price @param {Object} item - The product item element@returns {number} - The calculated total price
 */
    $(".calculate").click(function () {
        try {
            const item = $(this).closest(".item");
            const price = parseFloat(item.find(".text").text().match(/\$(\d+\.\d+)/)[1]);
            const quantity = parseFloat(item.find("input[type='number']").val());
            const total = (price * quantity).toFixed(2);

            // Display total price
            item.find(".total").remove();
            item.find(".text").append(
                `<div class="total">Total: $${total}</div>`
            ).find(".total").fadeIn();
        } catch (error) {
            console.error("Calculation error:", error);
            $(this).after('<div class="error">Error calculating price</div>');
        }
    });
});