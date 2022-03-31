$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,832,706",


			"death": "31,655",


			"dailycount": "587",


			"dailydeath": "29",



			"date": "03/30",
			"info": "through 6:00pm 03/29/2022",

			"testingaverage": "110,335",

			"peopletested": "11,684,525",

			"positivity": "0.68%",

			"hospitalizations": "325",
			"datehospitalizations": "03/29"

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



