
export const charts = [
    {id:1 , color:"bg-blue-500" , title:"Website Views" , description: "Last Campaign Performance" , footer:"campaign sent 2 days ago"},
    {id:2 , color:"bg-green-500" , title:"Daily Sales" , description: "15% increase in today sales" , footer:"updated 4 min ago"},
    {id:3 , color:"bg-gray-800" , title:"Completed Tasks" , description: "Last Campaign Performance" , footer:"just updated"},
]

export const LineChartData = {
    labels:[
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
    datasets:[
        {
            data: [50, 40, 300,320,500,350, 200,230, 500],
            borderColor: "white",
            backgroundColor: "transparent",
            tension: 0.1,
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            pointRadius: 4,
            borderWidth: 3
        },
    ],
};