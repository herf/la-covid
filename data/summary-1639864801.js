$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,560,377",



			"death": "27,432",



			"dailycount": "3,730",



			"dailydeath": "21",

			"date": "12/18",
			"info": "through 6:00pm 12/17/2021",


			"testingaverage": "154,372",


			"peopletested": "9,770,490",

			"positivity": "1.18%",

			"hospitalizations": "749",
			"datehospitalizations": "12/16"

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



