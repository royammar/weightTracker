import React,{useState,useEffect} from "react";
import {Line} from 'react-chartjs-2'

export default function MonthPreview({ month }) {
  const [currMonth, setCurrMonth] = useState("");





  useEffect(() => {
    setCurrMonth({
        labels: month.data.map((item) => item.date),
        datasets: [
          {
            label: "Weight",
            data: month.data.map((item) => item.weight),
            backgroundColor: ["rgba(75,192,192,0.6"],
            borderWidth: 4,
          },
        ],
      });

    return () => {};

  }, []);

  return (
    <div >
        {currMonth&&
        <Line data={currMonth} options={{responsive:true,
            title:{text:`Month: ${month.month}`,display:true},
        scales:{
            yAxes:[{
                ticks:{
                    
                }
            }]
        }
        
        }}></Line>  }

    </div>
)

    }



