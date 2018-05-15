import React, { Component } from 'react'
import request from 'superagent'
import { 
LineChart, 
Line, 
CartesianGrid, 
XAxis, 
YAxis, 
Tooltip,
BarChart,
Legend,
Bar,
PieChart,
Pie
 } from 'recharts';

const API_URL = 'http://localhost:3000'

class ReportePagos extends Component {

constructor(){
      super()
      this.state = {
        pagos: []
      }
    }

componentDidMount() {
 
      request
          .get(`${API_URL}/api/pagos`)
          .then((data) => {
            this.setState({
              pagos: data.body
            })
          })
          .catch(function(e) {
            console.log(e)
          })

}




  render() {

  	return (
        <div>
          <div className='contenedor__card'>
            <div className='form__separador'>
              <h1 className='form__titulo tv'>Tipo Pagos</h1>
            </div>
            <BarChart width={600} height={300} data={this.state.pagos}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}  >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="tipo_pago"  />
              <YAxis  />
              <Tooltip/>
              <Legend />
              <Bar stackId="" dataKey="cantidad"  fill="#2ca02c "/>
            </BarChart>
          </div>

         

        </div>
            
  	);
  }
}

export default ReportePagos;
