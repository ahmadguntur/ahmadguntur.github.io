document.addEventListener("DOMContentLoaded", function() {
    disable_submit();

    document.getElementById("rupiah").addEventListener("input", function (e) {
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

    var rupiah = document.getElementById("rupiah");
    rupiah.addEventListener("keyup", function(e) {
    rupiah.value = formatRupiah(this.value, "");
    });

    /* Fungsi formatRupiah */
    function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? " " + rupiah : "";
    }
});
