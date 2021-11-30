document.addEventListener("DOMContentLoaded", function() {
    disable_submit();

    document.getElementById("onlyNumber").addEventListener("input", function (e) {
        if (e.target.value != "") {
            document.getElementById("full_name").disabled = false;
            document.getElementById("email").disabled = false;
            document.getElementById("phone").disabled = false;
            document.getElementById("comment").disabled = false;
        }
        else {
            document.getElementById("full_name").disabled = true;
            document.getElementById("email").disabled = true;
            document.getElementById("phone").disabled = true;
            document.getElementById("comment").disabled = true;
        }
    });

    var name_filled = false;
    var email_filled = false;
    var phone_filled = false;

    document.getElementById("full_name").addEventListener('input', function (e) {
        if (e.target.value != "") {
            name_filled = true;
        } else {
            name_filled = false;
        }

        if (name_filled && email_filled && phone_filled) {
            enable_submit();
        } else {
            disable_submit();
        }
    });
    document.getElementById("email").addEventListener('input', function (e) {
        if (e.target.value != "") {
            email_filled = true;
        } else {
            email_filled = false;
        }

        if (name_filled && email_filled && phone_filled) {
            enable_submit();
        } else {
            disable_submit();
        }
    });
    document.getElementById("phone").addEventListener('input', function (e) {
        if (e.target.value != "") {
            phone_filled = true;
        } else {
            phone_filled = false;
        }

        if (name_filled && email_filled && phone_filled) {
            enable_submit();
        } else {
            disable_submit();
        }
    });

    function enable_submit() {
        document.getElementById("donasi_button").style = 'background: rgb(4, 90, 4);';
        document.getElementById("donasi_link").href = 'donasisukses.html';
        document.getElementById("donasi_link").onclick = '';
    }

    function disable_submit() {
        document.getElementById("donasi_button").style = 'background: #dddddd';
        document.getElementById("donasi_link").href = '#';
        document.getElementById("donasi_link").onclick = function () { return false; };
    }
});