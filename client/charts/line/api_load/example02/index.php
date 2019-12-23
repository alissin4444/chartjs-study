<?php include("../../../services/top.php") ?>

<script type="text/javascript">
	const vue = new Vue({
		el: "#vue",
		data: {
			chart_start: false,
			title: "Avaliação das séries",
			label: "Avaliação",
			chart: {
				label: [],
				data: []
			}
		},
		async mounted() {
			await axios.get('http://127.0.0.1:3333/series').then(response => {
				let chart = {
					label: [],
					data: []
				};
				response.data.map(item => {
					chart.label.push(item.nome);
					chart.data.push(item.avaliacao.valor);
				});
				this.chart = chart;
				this.chart_start = true;
			});

			var ctx = document.getElementById('myChart');

			Chart.defaults.global.animation.duration = 2000;
			Chart.defaults.global.title.text = this.title;

			var myChart = new Chart(ctx, {
			    type: 'line',
			    data: {
			        labels: this.chart.label,
			        datasets: [{
			        	label: this.label,
			            data: this.chart.data,
			            backgroundColor: 'rgba(162, 155, 254, 0.5)',
			            borderWidth: 1,
			            borderColor: 'rgba(108, 92, 231, 1.0)',
			            pointBackgroundColor: 'rgba(108, 92, 231, 1.0)',
			            pointBorderColor: 'rgba(108, 92, 231, 1.0)',
			            pointBorderWidth: 3,
			            lineTension: 0.4,
			        }]
			    },
			    options: {
			    	title: {
			    		display: true,
			    		position: "top",
			    		fontSize: 20
			    	},
			    	scales: {
				        yAxes: [{
				            stacked: true
				        }]
				    }
				}
			});
		}
	});
</script>

<?php include("../../../services/bot.php") ?>