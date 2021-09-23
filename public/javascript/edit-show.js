async function editFormHandler(event) {
    event.preventDefault();

    const show_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const date = document.querySelector('input[name="date"]').value;
    const city = document.querySelector('input[name="city"]').value;
    const venue = document.querySelector('input[name="venue"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const contact = document.querySelector('input[name="contact"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const deal = document.querySelector('input[name="deal"]').value;
    const deposit = document.querySelector('input[name="deposit"]').value;
    const showtime = document.querySelector('input[name="showtime"]').value;
    const arrivaltime = document.querySelector('input[name="arrivaltime"]').value;

    const response = await fetch(`/api/shows/${show_id}`, {
        method: 'PUT',
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
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);