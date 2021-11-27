$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,524,294",


			"death": "27,102",


			"dailycount": "2,073",



			"dailydeath": "29",

			"date": "11/25",
			"info": "through 6:00pm 11/24/2021",


			"testingaverage": "147,776",


			"peopletested": "9,368,741",

			"positivity": "0.89%",

			"hospitalizations": "553",
			"datehospitalizations": "11/19"

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



