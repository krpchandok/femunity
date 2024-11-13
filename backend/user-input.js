function sendJSONData(data) {
    fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').textContent = 'Data uploaded successfully!';
    })
    .catch(error => {
        document.getElementById('responseMessage').textContent = 'Error uploading data.';
        console.error('Error:', error);
    });
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    const selectElement = document.getElementById('symptoms');
    const selectedOptions = Array.from(selectElement.selectedOptions);

    const selectedSymptoms = selectedOptions.map(option => option.value);

    const input = {
        name: document.getElementById('name').value,
        location: document.getElementById('location').value,
        age: document.getElementById('age').value,
        symptoms: selectedSymptoms
    };

    function convertUserInput(input) {
        return {
            name: input.name,
            location: input.location,
            age: input.age,
            symptoms: input.symptoms
        };
    }

    const jsonData = convertUserInput(input);

    sendJSONData(jsonData);
});
