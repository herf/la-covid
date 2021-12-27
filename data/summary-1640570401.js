$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,616,033",



			"death": "27,546",



			"dailycount": "20,821",



			"dailydeath": "13",

			"date": "12/26",
			"info": "through 6:00pm 12/25/2021",


			"testingaverage": "143,232",


			"peopletested": "9,943,438",

			"positivity": "2.61%",

			"hospitalizations": "849",
			"datehospitalizations": "12/24"

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



