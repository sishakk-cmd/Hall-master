// shared API and authentication utilities

// Deployment ID
const DEPLOYMENT_ID = 'AKfycbwIw_UefasK4boBCGTzVEKOGGFqu8hhoODx1xvQjgVRfPWbasdgv6Z-m2l1R2cCh3iEkQ';

// Function to make API calls
async function apiCall(endpoint, method = 'GET', body = null) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(endpoint, options);
    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}

// Function to authenticate user
async function authenticate(username, password) {
    const response = await apiCall('/auth/login', 'POST', { username, password });
    return response.token;
}

export { apiCall, authenticate, DEPLOYMENT_ID };