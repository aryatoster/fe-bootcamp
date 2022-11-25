async function getData() {
    let response = await fetch('https://ipapi.co/json');
    let data = await response.json();
    return data;
}

export default getData;