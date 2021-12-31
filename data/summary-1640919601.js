$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,669,545",



			"death": "27,625",



			"dailycount": "20,198",



			"dailydeath": "24",

			"date": "12/30",
			"info": "through 6:00pm 12/29/2021",


			"testingaverage": "105,996",


			"peopletested": "10,015,640",

			"positivity": "8.70%",

			"hospitalizations": "1,251",
			"datehospitalizations": "12/28"

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



