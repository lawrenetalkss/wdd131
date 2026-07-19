// ========== FOOTER: Current Year ==========
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// ========== FOOTER: Last Modified Date ==========
const lastModifiedElement = document.getElementById('lastModified');
const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

// ========== WIND CHILL CALCULATION ==========
/**
 * Calculates wind chill factor in Celsius
 * Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
 * Where T = temperature in °C, V = wind speed in km/h
 */
function calculateWindChill(temperature, windSpeed) {
    // Check conditions for valid wind chill calculation (Metric units)
    // Conditions: Temperature <= 10°C AND Wind speed > 4.8 km/h
    if (temperature > 10 || windSpeed <= 4.8) {
        return null; // Conditions not met - return null for "N/A"
    }
    
    // Calculate wind chill using the formula
    const windChill = 13.12 + (0.6215 * temperature) - 
                      (11.37 * Math.pow(windSpeed, 0.16)) + 
                      (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    
    return Math.round(windChill); // Round to nearest integer
}

// ========== DISPLAY WIND CHILL ==========
// Nigeria weather - Static values matching the weather section
const temperature = 32; // °C
const windSpeed = 8; // km/h

// Get the wind chill element
const windChillElement = document.getElementById('wind-chill');

// Calculate wind chill
const windChill = calculateWindChill(temperature, windSpeed);

// Display result or "N/A" if conditions not met
if (windChill !== null) {
    windChillElement.textContent = `${windChill}°C`;
} else {
    windChillElement.textContent = 'N/A';
}

// ========== (Optional) Log for debugging ==========
console.log(`Temperature: ${temperature}°C`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Wind Chill: ${windChillElement.textContent}`);

// ========== (Optional) Future API Preparation ==========
// This code structure prepares for future real-time weather data
// The calculateWindChill function can be reused with dynamic data