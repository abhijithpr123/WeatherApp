document.getElementById("search").addEventListener('click', async () => {
    let city = document.getElementById("city").value;
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=afe66245bd764aaaac3a5196ef5c2d17`);
        if (res.status !== 200)
            return alert(`${city} not found`)
        const data = await res.json();
        console.log(data)
        let str = `
            <p>${data.name}</p>
            <p>${data.name}</p>
        `;
        document.getElementById("display").innerHTML = str;
    } catch (error) {
        console.error('Error fetching data:', error);
    }

})