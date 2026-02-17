// Function to simulate or fetch Instance Metadata
async function updateInstanceDetails() {
    const idDisplay = document.getElementById('instance-id');
    const azDisplay = document.getElementById('az');

    // In a real AWS EC2 environment, you'd fetch from the metadata IP
    // For this template, we'll simulate the load balancer rotation
    const mockInstances = [
        { id: 'i-0abcd1234efgh5678', az: 'us-east-1a' },
        { id: 'i-09876fedc4321ba0', az: 'us-east-1b' }
    ];

    const randomPick = mockInstances[Math.floor(Math.random() * mockInstances.length)];

    idDisplay.innerText = randomPick.id;
    azDisplay.innerText = randomPick.az;
}

function checkHealth() {
    alert("Health Check: 200 OK. All systems operational across Multi-AZ deployment.");
    updateInstanceDetails();
}

// Initialize on load
window.onload = updateInstanceDetails;