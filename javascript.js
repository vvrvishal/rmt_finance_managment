var counter = 0;
var filter_dropdown;
const value_array = [];
const arra_for_year = [];

function add_exp_list() {
    var expence_name = $('#exp_name').val();
    var expence_date = $('#exp_date').val();
    var expence_amount = $("#exp_amount").val();
    let expence_object = { "title": expence_name, "date": expence_date, "amount": expence_amount };
    value_array.push(expence_object);
    myarray(expence_object);
}

$("#add_expences").click(function() {
    $(".expance_number").show();
});

function myarray(value) {
    counter++;
    var expence_list =
        `<div class="row expance_${counter} bg-light" style="display:flex; box-shadow:1px 1px 3px 1px lightgray; width:100%; margin:auto;  padding: 1rem; margin-bottom: .5rem; align-items:center; margin-top:.5rem">
                <div class="expance_name col-md-7" style="width:65%;margin-left:20px">
                    <p class="mb-0" style="text-transform: capitalize;">${value.title}</p>
                </div>
                <div class="expance_date col-md-2" style="width:20%;">
                    <p class="mb-0">${value.date}</p>
                </div>
                <div class="expance_amount col-md-2" style="width:15%;">
                    <p class="mb-0">${value.amount}</p>  
                </div>
            </div>`;
    var year1 = value.date
    year_array = year1.split("-");
    year_number = year_array[0];

    console.log(year_number);

    filter_dropdown = `<p class="text mb-1">${year_number}</p>`;
    var name = arra_for_year.push(year_number);
    console.log(name);
    $("#year_list").append(filter_dropdown);

    if ($('#exp_name').val() == '' || $('#exp_name').val() == '' || $("#exp_amount").val() == '') {
        alert("please enter the expence details")
    } else {
        $("#expences_list").append(expence_list);
        $(".expance_number").hide();
        $('#exp_name').val('');
        $('#exp_date').val('');
        $("#exp_amount").val('');
        console.log(value_array);
    }
    $(`.expance_${counter}`).click(function() {
        $(this).remove();
    });
};
$(".filter_dropdown").click(function() {
    $(".filter_dropdown-content").toggle();
});

$("#filter_expences").click(function() {
    $(".filter_dropdown").show();
});

// ================ ledgers part =======================

function create_ledger() {
    var company_name = document.getElementById('company_name').value;
    var ledger_name = document.getElementById('ledger_name').value;
    var ledger_id = document.getElementById('ledger_id').value;
    var opening_balance = document.getElementById('opening_balance').value;
    var gstin = document.getElementById('gstin').value;
    var address = document.getElementById('address').value;
    var panno = document.getElementById('panno').value;
    var counter = 0;

    if (company_name !== '' && ledger_name !== '' && ledger_id !== '' && opening_balance !== '' && gstin !== '' && address !== '' && panno !== '') {
        var gst_regex = /[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}/;
        var pan_regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
        counter++;
        console.log(panno);
        if (gst_regex.test(gstin) && pan_regex.test(panno)) {
            var html_stru = ` <tr>
            <th scope="row">${counter}</th>
            <td>${company_name}</td>
            <td>${ledger_name}</td>
            <td>${ledger_id}</td>
            <td>${opening_balance}</td>
            <td>${gstin}</td>
            <td>${address}</td>
            <td>${panno}</td>
        </tr>`;
            // $('#created_ladgers').app
            document.getElementById('created_ladgers').innerHTML += html_stru;
        } else {
            alert('please enter valid gst and pan number');
        }
    } else {
        if (company_name == '') {
            alert('please enter a company name');
        } else if (ledger_name == '') {
            alert('please enter a ledger name');
        } else if (ledger_id == '') {
            alert('please enter a ledger id');
        } else if (opening_balance == '') {
            alert('please enter a opening balance');
        } else if (gstin == '') {
            alert('please enter a gst number');
        } else if (address == '') {
            alert('please enter a Address');
        } else if (panno == '') {
            alert('please enter a pan number');
        }
    }
}

// ================= menu show and side =================

function open_menu(evt, menu_content) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menu_content).style.display = "block";
    evt.currentTarget.className += " active";
}