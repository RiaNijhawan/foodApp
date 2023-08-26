async function getFormattedRestaurantList(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('API request failed');
        }
        
        const rawData = await response.json();
        
        // Transform the rawData into your desired format
        const formattedData = rawData.restaurants.map(restaurant => {
            return {
                name: restaurant.name,
                cuisine: restaurant.cuisine,
                address: restaurant.location.address,
                // Add more properties as needed
            };
        });
        
        return formattedData;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

const swiggyApiUrl = 'https://api.swiggy.com/restaurants';
const formattedRestaurantList = getFormattedRestaurantList(swiggyApiUrl);

if (formattedRestaurantList !== null) {
    console.log(formattedRestaurantList);
    // Now you can use the formatted restaurant data in your app
}
