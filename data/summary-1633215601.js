$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,462,013",



			"death": "26,143",



			"dailycount": "1,427",



			"dailydeath": "20",


			"date": "10/02",
			"info": "through 6:00pm 10/01/2021",

			"testingaverage": "135,614",

			"peopletested": "8,671,649",

			"positivity": "1.18%",

			"hospitalizations": "862",
			"datehospitalizations": "09/30"



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



