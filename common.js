// shared API and authentication utilities

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

export { apiCall, authenticate };