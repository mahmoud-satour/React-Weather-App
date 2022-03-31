import React ,{Component} from 'react'
import Form from './Components/Form'
import Weather from './Components/Weather';


const  API_KEY = "cfba76c2c136183fe9dc096b17e6fc49";
class App extends Component {


  state = {
    tempreature: '',
    city: '',
    country:'',
    humidity:'',
    description:'',
    error:''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const City = e.target.elements.City.value;
    const Country = e.target.elements.Country.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=cfba76c2c136183fe9dc096b17e6fc49`)
    const data = await api.json();
    if(City && Country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        tempreature: '',
        city: '',
        country:'',
        humidity:'',
        description:'',
        error:'Please Check Your Data'
      })
    }
  };


  render(){
    return(
      <div className="App">
        <Form  getWeather={this.getWeather} />
        <Weather 
        tempreature= {this.state.tempreature}
        city= {this.state.city}
        country= {this.state.country}
        humidity= {this.state.humidity}
        description= {this.state.description}
        error= {this.state.error}
        />
      </div>
    )
  }
}

export default App