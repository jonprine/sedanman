async function deleteFormHandler(event) {
    event.preventDefault();

    const show_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/shows/${show_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);