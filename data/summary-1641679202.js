$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,921,890",




			"death": "27,772",




			"dailycount": "34,448",




			"dailydeath": "16",

			"date": "01/08",
			"info": "through 6:00pm 01/07/2022",


			"testingaverage": "109,788",


			"peopletested": "10,269,014",

			"positivity": "22.78%",

			"hospitalizations": "3,200",
			"datehospitalizations": "01/06"

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



