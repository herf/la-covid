$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,595,239",



			"death": "27,533",



			"dailycount": "9,988",



			"dailydeath": "21",

			"date": "12/24",
			"info": "through 6:00pm 12/23/2021",


			"testingaverage": "149,041",


			"peopletested": "9,903,203",

			"positivity": "2.02%",

			"hospitalizations": "801",
			"datehospitalizations": "12/22"

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



