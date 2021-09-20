// function posts new show to database

async function postNewShowHandler(event) {
    event.preventDefault();


    const date = document.querySelector('#item-date').value.trim();
    const city = document.querySelector('#item-city').value.trim();
    const venue = document.querySelector('#item-venue').value.trim();
    const address = document.querySelector('#item-address').value.trim();
    const contact = document.querySelector('#item-contact').value.trim();
    const phone = document.querySelector('#item-phone').value.trim();
    const email = document.querySelector('#item-email').value.trim();
    const deal = document.querySelector('#item-deal').value.trim();
    const deposit = document.querySelector('#item-deposit').value.trim();
    const showtime = document.querySelector('#item-showtime').value.trim();
    const arrivaltime = document.querySelector('#item-arrivaltime').value.trim();

    const response = await fetch(`/api/shows`, {
        method: 'post',
        body: JSON.stringify({
            date,
            city,
            venue,
            address,
            contact,
            phone,
            email,
            deal,
            deposit,
            showtime,
            arrivaltime
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/');
        console.log("success");
    }
    else {
        alert(response.statusText);
    }
}


// event handler
document.querySelector('#submit').addEventListener('click', postNewShowHandler);
  