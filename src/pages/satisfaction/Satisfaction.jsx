import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function Satisfaction() {
  const chartRef = useRef(null);
  const [data, setData] = useState({ feliz: 210, normal: 20, triste: 5 });

  useEffect(() => {
    renderChart(data);
  }, [data]);

  const renderChart = (data) => {
    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('satisfactionChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Feliz', 'Normal', 'Triste'],
        datasets: [{
          data: [data.feliz, data.normal, data.triste],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(201, 203, 207, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.raw;
              }
            }
          },
          datalabels: {
            color: 'white',
            formatter: (value, ctx) => {
              return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value;
            }
          }
        }
      }
    });
  };

  const handleAddClick = (type) => {
    setData(prevData => ({
      ...prevData,
      [type]: prevData[type] + 1
    }));
  };


  return (
    <main className="container mt-3">
      <h1 style={{ textAlign: "center" }}>Registros de satisfações de nossos clientes</h1>
      <p style={{ textAlign: "center" }}>Nossos clientes sempre nos fornecem um valioso feedback sobre nossos serviços. Compilamos registros detalhados de suas
        satisfações para garantir que continuemos a atender e exceder suas expectativas. Leia abaixo para saber mais sobre as
        experiências positivas de nossos clientes.</p>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "150px" }}>
        <button onClick={() => handleAddClick('feliz')} style={{ marginRight: "10px", border: "none", borderRadius: "15px", padding: "0px 25px 0px 25px", background: "rgba(75, 192, 192, 0.6)" }}>Feliz</button>
        <button onClick={() => handleAddClick('normal')} style={{ marginRight: "10px", border: "none", borderRadius: "15px", padding: "0px 25px 0px 25px", background: "rgba(201, 203, 207, 0.6)"}}>Normal</button>
        <button onClick={() => handleAddClick('triste')} style={{ border: "none", borderRadius: "15px", padding: "0px 25px 0px 25px", background: "rgba(255, 99, 132, 0.6)" }}>Triste</button>
      </div>
      <canvas id="satisfactionChart" style={{ maxWidth: "500px", maxHeight: "500px", margin: "auto" }}></canvas>
    </main>
  );
}
