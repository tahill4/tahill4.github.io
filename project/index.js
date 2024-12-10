// Wait for document to be fully loaded
$(document).ready(function () {
    // Animate welcome message on page load
    $("#welcome").hide().fadeIn(1500);

    // Load reviews dynamically with error handling
    $.ajax({
        url: 'reviews.json',
        success: function (data) {
            data.reviews.forEach(review => {
                $("#container").append(`
                    <div class="comment">
                        <img src="images/${review.image}">
                        <span>${review.text}</span>
                    </div>
                `).hide().fadeIn();
            });
        },
        error: function (xhr, status, error) {
            $("#container").append(`
                <div class="error">
                    Unable to load reviews. Please try again later.
                </div>
            `);
            console.error("Error loading reviews:", error);
        }
    });

    // Add hover effect to comments
    $(".comment").hover(
        function () {
            $(this).css({
                "background-color": "rgb(116, 187, 172)",
                "transform": "scale(1.02)"
            });
        },
        function () {
            $(this).css({
                "background-color": "rgb(136, 207, 192)",
                "transform": "scale(1)"
            });
        }
    );
});