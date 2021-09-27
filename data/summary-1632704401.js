$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,454,172",



			"death": "26,013",



			"dailycount": "1,174",



			"dailydeath": "14",


			"date": "09/26",
			"info": "through 6:00pm 09/25/2021",

			"testingaverage": "135,060",

			"peopletested": "8,579,689",

			"positivity": "1.34%",

			"hospitalizations": "947",
			"datehospitalizations": "09/24"



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



