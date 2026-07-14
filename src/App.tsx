import WeatherDashboard from './components/WeatherDashboard/WeatherDashboard'
import WeatherContextProvider from './context/weatherContext'

function App() {
  return (
    <WeatherContextProvider>
      <WeatherDashboard/>
    </WeatherContextProvider>
  )
}

export default App
