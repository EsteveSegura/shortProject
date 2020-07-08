
(async () => {
    let apiData = await axios.get('http://localhost:3000/api/s/bufalosalton/a')
    console.log(apiData.data.clicks)
    var ctx = document.getElementById('myChart').getContext('2d');
    let countriesToLabel = apiData.data.clicks.map((item) => {
        return item.country
    })
    let countriesToLabelUnique = Array.from(new Set(countriesToLabel))
    console.log(countriesToLabelUnique)
    let dataToShow = apiData.data.clicks.filter((item) => {
        let countriesArr = Array.from(countriesToLabelUnique);
        if(countriesArr[0] == item.country){
            console.log(item)
            return item
        }
    })
    console.log(dataToShow)
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        data: {
            labels: countriesToLabelUnique,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132,0.5)',
                borderColor: 'rgb(255, 99, 132,0.5)',
                data: [0,45,4]
            }]
        },


        /**
         * 
         * {
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132,0.5)',
                borderColor: 'rgb(255, 99, 132,0.5)',
                data: [0,45,4]
            }
         */
        // Configuration options go here
        options: {}
    });

})()
