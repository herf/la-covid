$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,888,408",


			"death": "31,991",


			"dailycount": "3,270",


			"dailydeath": "6",


			"date": "05/06",
			"info": "through 6:00pm 05/05/2022",

			"testingaverage": "130,518",

			"peopletested": "11,883,392",

			"positivity": "1.77%",

			"hospitalizations": "239",
			"datehospitalizations": "05/05"

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



