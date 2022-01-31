$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,648,751",

			"death": "28,923",

			"dailycount": "16,835",

			"dailydeath": "40",

			"date": "01/30",
			"info": "through 6:00pm 01/29/2022",

			"testingaverage": "207,376",

			"peopletested": "11,053,438",

			"positivity": "14.52%",

			"hospitalizations": "3,852",
			"datehospitalizations": "01/29"
				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.datehospitalizations);
				$('#cse').html(content.info);	
			
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



