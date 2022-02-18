$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,772,569",

			"death": "30,146",

			"dailycount": "3,312",

			"dailydeath": "67",


			"date": "02/17",
			"info": "through 6:00pm 02/16/2022",

			"testingaverage": "152,791",

			"peopletested": "11,316,558",

			"positivity": "3.82%",

			"hospitalizations": "1,713",
			"datehospitalizations": "02/16"


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



