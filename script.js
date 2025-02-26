  $("#mySelect").change(function () { });

    //clipboard

    const textElement = document.getElementById("source");
    const copyButton = document.getElementById("copy");

    const copyText = (e) => {
        window.getSelection().selectAllChildren(textElement);
        document.execCommand("copy");
        e.target.setAttribute("tooltip", "Copied! ✅");
    };

    const resetTooltip = (e) => {
        e.target.setAttribute("tooltip", "Copy to clipboard");
    };

    copyButton.addEventListener("click", (e) => copyText(e));
    copyButton.addEventListener("mouseover", (e) => resetTooltip(e));




    // caching the elements
    var UserName = document.getElementById("UserName"),
        UserNameID = document.getElementById("UserNameID"),
        // Pronounce = document.getElementById("Pronounce"),
        // gender1 = document.getElementById("gender1"),

        Designation = document.getElementById("Designation"),
        DesignationID = document.getElementById("DesignationID"),
        phone = document.getElementById("phone"),
        CountryCodeID = document.getElementById("CountryCodeID"),
        CountactNo = document.getElementById("CountactNo"),
        CountactNoID = document.getElementById("CountactNoID"),
        textarea = document.getElementById("textarea"),
        par = document.getElementById("par"),
        phonenumbercountry = document.getElementById("phonenumbercountry"),
        code = document.getElementById("code"),
        phonenumber = document.getElementById("phonenumber"),
        num = document.getElementById("num");
    // country and Phone No.


    // the main function: get the content from source and display it in destination
    function display(source, destination) {
        destination.textContent = source;
    }
    // events
    UserName.onkeyup = function () {
        display(this.value, UserNameID);
    };

    Designation.onkeyup = function () {
        display(this.value, DesignationID);
    };

    // Pronounce.onkeyup = function () {
    //     display("(" + this.value + ")", gender1);
    // };
    // CountryCode.onkeyup = function () { display(this.value, CountryCodeID); };

    phone.onkeyup = function () {
        display(this.value, CountryCodeID);
    };

    // CountactNo.onkeyup = function () { display(this.value, CountactNoID); };

    // phonenumbercountry.onkeyup = function () { display(this.value, code); };

    // phonenumber.onkeyup = function () { display(this.value, num); };

    // Telephone no

    var input = document.querySelector("#phone"),
        errorMsg = document.querySelector("#error-msg"),
        validMsg = document.querySelector("#valid-msg");

    // Error messages based on the code returned from getValidationError
    var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

    // Initialise plugin
    var intl = window.intlTelInput(input, {
        initialCountry: "auto",
        geoIpLookup: function (success, failure) {
            $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                success(countryCode);
            });
        },
        // utilsScript: "js/utils.js"
    });

    document.getElementById("mySelect").addEventListener("change", function () {
        var selectedOption = document.getElementById("mySelect").value;
        var listItems = document.getElementById("myList").querySelectorAll("td");
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active");
        }
        listItems[selectedOption - 1].classList.add("active");
        $(".remove_css").css({
            "fontWeight": "",
            "color": ""
        });
        $(".active").children("span").css({
            "fontWeight": "bolder",
            "color": "#2c68a5"
        });
    });
    // code show

    function show_code() {
        $("#destination").html($("#source").html().escape());
    }

    String.prototype.escape = function () {
        var tagsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        };
        return this.replace(/[&<>]/g, function (tag) {
            return tagsToReplace[tag] || tag;
        });
    };

    // form update

    $('#form').submit(function (e) {
        $('#UserNameID').text($("#UserName").val());
        $('#DesignationID').text($("#Designation").val());
        $('#CountactNoID').text($("#phone").val());
        $('#myList').select($("#mySelect").val());

        // Prevent reload page
        e.preventDefault();
    });
