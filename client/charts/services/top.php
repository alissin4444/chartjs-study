<!DOCTYPE html>
<html>
<head>
	<title>charts.js</title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>
<body style="background: #eee">


<div class="row">
	<div class="col-4 d-flex m-5 pt-3">
		<h4 class="text-muted mr-2">CHARTJS</h4>
		<h6 class="text-muted">By Alissin Santos</h6>
	</div>
	<div id="vue" class="col-8 container mt-5 pt-3" style="width:100%; max-width: 800px;">
		<canvas v-if="chart_start" id="myChart"></canvas>	

		<div v-else class="d-flex justify-content-center align-items-center">
		  <div class="spinner-border text-muted mr-3" role="status"></div>
		  <span class="text-muted">Carregando...</span>
		</div>
	</div>	
</div>

<!-- A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets. -->


<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>