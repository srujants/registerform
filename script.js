$(document).ready(function() {
    // Add floating label effect
    $('input, textarea').on('focus blur', function(e) {
        $(this).siblings('label').toggleClass('active', (e.type === 'focus' || this.value !== ''));
    });

    // Initialize labels for filled inputs
    $('input, textarea').each(function() {
        if (this.value !== '') {
            $(this).siblings('label').addClass('active');
        }
    });

    $('#registrationForm').on('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            fullName: $('#fullName').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            dob: $('#dob').val(),
            gender: $('#gender').val(),
            address: $('#address').val()
        };

        // Show loading state
        const $button = $(this).find('button');
        const originalText = $button.html();
        $button.html('<i class="fas fa-spinner fa-spin"></i> Submitting...');
        $button.prop('disabled', true);

        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: formData,
            success: function(response) {
                $('#displayData').html(response);
                $('#result').addClass('show');
                
                // Scroll to result
                $('html, body').animate({
                    scrollTop: $('#result').offset().top - 50
                }, 1000);
                
                // Reset form
                $('#registrationForm')[0].reset();
            },
            error: function(xhr, status, error) {
                alert('Error submitting form: ' + error);
            },
            complete: function() {
                // Restore button state
                $button.html(originalText);
                $button.prop('disabled', false);
            }
        });
    });
});