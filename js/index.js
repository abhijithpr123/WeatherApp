document.getElementById("search").addEventListener('click', async () => {
    let city = document.getElementById("city").value;
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=afe66245bd764aaaac3a5196ef5c2d17`);
        if (res.status !== 200)
            return alert(`${city} not found`)
        const data = await res.json();
        const clouds = data.clouds.all;
              const cloudyBg =
        "url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg')";
      const clearBg =
        "url('https://t3.ftcdn.net/jpg/14/63/72/50/360_F_1463725010_Omm579saIDvqCYqXN3rBRbTQ0SBR0sby.jpg')";
  
      document.body.style.backgroundImage = clouds >= 75 ? cloudyBg : clearBg;
      document.body.style.backgroundSize = "cover";
      document.body.style.transition = "background-image 1s ease-in-out";


        let str = `
        <div class="grid grid-cols-3 gap-2">
            <div class="flex bg-blue-500/60 items-center justify-between p-4 rounded-xl w-100">
                <div>
                    <h2 class="text-3xl font-bold text-gray-800">${data.name}</h2>
                    <p class="text-md font-semibold">${data.weather[0].main}</p>
                    <p class="text-md capitalize">${data.weather[0].description}</p>
                    <p class="text-3xl font-bold mt-2">
                        ${(data.main.temp - 273.15).toFixed(1)}°C
                    </p>
                </div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                    alt="${data.weather[0].main}" class="w-30 h-30">
            </div>

            <div class="bg-gray-100/25 p-4 rounded-xl space-y-2 col-span-2">
                <h3 class="text-lg font-semibold">Temperature Details</h3>
                <div class="grid grid-cols-2 gap-3 text-gray-700">
                    <p><b>Feels Like:</b> ${(data.main.feels_like - 273.15).toFixed(1)}°C</p>
                    <p><b>Min:</b> ${(data.main.temp_min - 273.15).toFixed(1)}°C</p>
                    <p><b>Max:</b> ${(data.main.temp_max - 273.15).toFixed(1)}°C</p>
                    <p><b>Humidity:</b> ${data.main.humidity}%</p>
                    <p><b>Pressure:</b> ${data.main.pressure} hPa</p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">

                <div class="bg-gray-100/50 p-4 rounded-xl">
                    <h3 class="text-lg font-semibold">Wind</h3>
                    <p class="text-gray-700"><b>Speed:</b> ${data.wind.speed} m/s</p>
                    <p class="text-gray-700"><b>Direction:</b> ${data.wind.deg}°</p>
                </div>

                <div class="bg-gray-100/50 p-4 rounded-xl">
                    <h3 class="text-lg font-semibold">Clouds</h3>
                    <p class="text-gray-700"><b>Cloudiness:</b> ${data.clouds.all}%</p>
                </div>

            </div>
            <div class="p-4 grid grid-cols-2 col-span-2 gap-3">
                <div class="flex gap-2 bg-yellow-50/45 p-5 rounded-xl">
                    <div class="flex flex-col justify-center gap-5">
                        <h3 class="text-lg font-semibold">Sunrise</h3>
                        <p class="text-gray-700">
                            ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                        </p>
                    </div>
                    <div>
                        <img src="./assets/sunset.png" alt="" class="w-30 h-30">
                    </div>

                </div>
                <div class="flex gap-2 bg-yellow-50/45 p-5 rounded-xl">
                    <div class="flex flex-col justify-center gap-5">
                        <h3 class="text-lg font-semibold">Sunset</h3>
                        <p class="text-gray-700">
                            ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                        </p>
                    </div>
                    <div>
                        <img src="./assets/853530.png" alt="" class="w-30 h-30">
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-100/25 p-4 rounded-xl ">
            <h3 class="text-lg font-semibold">Other Details</h3>
            <p class="text-gray-700"><b>Visibility:</b> ${data.visibility / 1000} km</p>
            <p class="text-gray-700"><b>Timezone:</b> ${data.timezone}</p>
            <p class="text-gray-700"><b>Country:</b> ${data.sys.country}</p>
        </div>

        `;
        document.getElementById("display").innerHTML = str;
    } catch (error) {
        console.error('Error fetching data:', error);
    }

})