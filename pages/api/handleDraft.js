export default async function handler(req, res) { 
    const method = 'GET';
    let url = 'https://387c-116-74-34-218.ngrok-free.app/api/student/student/profile/4';
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyNzU0ODQ0LCJpYXQiOjE2ODI2Njg0NDQsImp0aSI6IjFjNGY2NjNkNTlkMTRmOGY5NWMyNGFjNTFjYmVmMDk0IiwidXNlcl9pZCI6NH0.NL4MRvA_24H7H_aKLw0GSd3wbmvllgirWaN2ySxHmBE';
    const options = {
        method: "GET", // or 'PUT'
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer '+token
        },
       // body: JSON.stringify(data)   
    }
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return res.end(JSON.stringify(data));   
    } catch (error) {
        return res.end(JSON.stringify({'error':error})); 
    }
    
}