$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,473,410",


			"death": "26,353",



			"dailycount": "1,005",


			"dailydeath": "17",


			"date": "10/13",
			"info": "through 6:00pm 10/12/2021",

			"testingaverage": "140,697",

			"peopletested": "8,816,175",

			"positivity": "0.92%",

			"hospitalizations": "684",
			"datehospitalizations": "10/11" 

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



