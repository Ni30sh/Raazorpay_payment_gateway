document.getElementById("paymentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var amount = document.getElementById("amount").value * 100; 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    var options = {
        "key": "rzp_test_wCLxxlH0kBfsnh", // razorpay ki api
        "amount": amount,
        "currency": "INR",
        "name": name,
        "description": "Payment for DakMittr Services",
        "handler": function (response){
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        },
        "prefill": {
            "name": name,
            "email": email,
            "contact": phone
        },
        "theme": {
            "color": "#ff4081"
        }
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
});
