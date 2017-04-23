var express = require('express');
var app = express();
const port = process.env.PORT || 3000;




var cars = [
{
	position: 1,
	team: 'McLaren',
	model: 'M23',
	year: 1973,
	engine: 'Ford 3.0 litre V8'
},
{
	position: 2,
	team: 'Williams',
	model: 'FW14',
	year: 1991,
	engine: 'Renault 3.5 litre V10'
},
{
	position: 3,
	team: 'Mercedes AMG F1',
	model: 'W05 Hybrid',
	year: 2014,
	engine: 'Mercedes-Benz 1.6 litre V6 turbocharged'
},
{
	position: 4,
	team: 'McLaren',
	model: 'MP4/4',
	year: 1988,
	engine: 'Honda 1.5 litre V6 turbocharged'
},
{
	position: 5,
	team: 'Ferrari',
	model: 'F2004',
	year: 2004,
	engine: 'Ferrari Tipo 053 3.0 litre V10'
}
];

app.get('/', function (req, res){
	res.send(cars);
});
app.get('/cars/:position', function (req, res){
	console.log(req.params);
	var car = cars.find(function(car){
		return car.position === Number(req.params.position);
	})
	console.log(car);
	res.send(car);
});
app.listen(port, () => { 
console.log(`Server is up on port ${port}`); 
});