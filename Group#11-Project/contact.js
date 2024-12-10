// Wait for the document to be fully loaded
$(document).ready(function () {
    // Initialize form validation
    $("#contactForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required"
        },
        messages: {
            name: "Please enter your name",
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email"
            },
            message: "Please enter your message"
        },
        // Handle form submission
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "submit.php",
                data: $(form).serialize(),
                success: function () {
                    // Show success message
                    $("#container").append(
                        $("<div>")
                            .addClass("success")
                            .text("Message sent successfully!")
                            .hide()
                            .fadeIn()
                    );
                    // Reset form
                    form.reset();
                },
                error: function (xhr, status, error) {
                    $("#container").append(
                        $("<div>")
                            .addClass("error")
                            .text("Failed to send message. Please try again.")
                            .hide()
                            .fadeIn()
                    );
                    console.error("Form submission error:", error);
                }
            });
        }
    });

    // Add input field animations
    $("input, textarea").focus(function () {
        $(this).animate({
            borderColor: "rgb(91, 146, 223)"
        }, 200);
    }).blur(function () {
        $(this).animate({
            borderColor: "#ccc"
        }, 200);
    });
});