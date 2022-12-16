$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,595,218",


			"death": "34,390",

			"dailycount": "3,192",


			"dailydeath": "22",
			"hospitalizationsever": "163,757",


			"date": "12/15",
			"info": "through 12:00pm 12/14/2022",

			"testingaverage": "31,938",

			"peopletested": "12,781,134",

			"positivity": "11.46%",

			"hospitalizations": "1,256",
			"datehospitalizations": "12/14"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#hosp_1').html(content.hospitalizationsever);
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



