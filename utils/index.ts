const demoLocation = "Houston"

export async function fetchProperties() {
    const headers = {
		'X-RapidAPI-Key': '42b97c882cmsh31433d2d04c642ep1226eajsnd300b404463e',
		'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
	}

    const response = await fetch(`https://zillow56.p.rapidapi.com/search?location=${demoLocation}%2C%20tx&status=forRent&isApartment=true&isTownhouse=false&price_min=4000&beds_min=1&beds_max=2&hasPool=true&onlyWithPhotos=true`, 
        {headers: headers}    
    )

    const result = await response.json()

    return result.results
}