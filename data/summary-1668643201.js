$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,511,076	",


			"death": "34,081",

			"dailycount": "2,215",


			"dailydeath": "9",
			"hospitalizationsever": "159,463 ",


			"date": "11/16",
			"info": "through 12:00pm 11/15/2022",

			"testingaverage": "26,887",

			"peopletested": "12,679,876",

			"positivity": "5.51%",

			"hospitalizations": "589",
			"datehospitalizations": "11/15"

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



