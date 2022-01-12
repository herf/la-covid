$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "2,046,208",




			"death": "27,812",




			"dailycount": "34,827",




			"dailydeath": "15",

			"date": "01/11",
			"info": "through 6:00pm 01/10/2022",


			"testingaverage": "151,606",


			"peopletested": "10,395,625",

			"positivity": "22.12%",

			"hospitalizations": "3,766",
			"datehospitalizations": "01/10"

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



