$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,390,012",


			"death": "33,060",


			"dailycount": "3,860",


			"dailydeath": "19",
			"hospitalizationsever": "151,046",


			"date": "8/24",
			"info": "through 12:00pm 8/23/2022",

			"testingaverage": "38,081",

			"peopletested": "12,440,344",

			"positivity": "9.75%",

			"hospitalizations": "924",
			"datehospitalizations": "8/23"

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



