$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,476,791",


			"death": "26,410",


			"dailycount": "1122",


			"dailydeath": "16",


			"date": "10/15",
			"info": "through 6:00pm 10/14/2021",

			"testingaverage": "139,761",

			"peopletested": "8,869,929",

			"positivity": "0.88%",

			"hospitalizations": "658",
			"datehospitalizations": "10/14" 

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



