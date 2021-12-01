$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,527,132",



			"death": "27,166",



			"dailycount": "843",



			"dailydeath": "28",

			"date": "11/30",
			"info": "through 6:00pm 11/29/2021",


			"testingaverage": "99,228",


			"peopletested": "9,420,648",

			"positivity": "1.22%",

			"hospitalizations": "569",
			"datehospitalizations": "11/28"

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



