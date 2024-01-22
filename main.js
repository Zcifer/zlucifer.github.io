onload = () => {
        document.body.classList.remove("container");
    };
    
    function loadContent(page) {
        $.ajax({
            url: page,
            method: 'GET',
            success: function (data) {
                $('.flower-container').html(data);
            },
            error: function () {
                $('.flower-container').html('<p>Halaman tidak dapat dimuat.</p>');
            }
        });
    }
    