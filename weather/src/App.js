import React, { useState } from "react";

function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "9c67eb2190a0537f4bd6d8f7d143e93a";

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  return (
    <div style={styles.container}>
      <h2>🌤 Weather Dashboard</h2>

      <div>
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKey}
          style={styles.input}
        />
        <button onClick={fetchWeather} style={styles.button}>
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && <p>⏳ Loading...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      {/* Weather Data */}
      {weather && (
        <div style={styles.card}>
          <h3>{weather.name}</h3>
          <p>🌡 Temp: {weather.main.temp}°C</p>
          <p>🌥 Condition: {weather.weather[0].main}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    width: "200px",
    marginRight: "10px",
  },
  button: {
    padding: "10px 15px",
    cursor: "pointer",
  },
  card: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    display: "inline-block",
  },
};

export default WeatherDashboard;