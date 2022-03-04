$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,800,741",

			"death": "30,911",

			"dailycount": "1,605",

			"dailydeath": "59",


			"date": "03/03",
			"info": "through 6:00pm 03/02/2022",

			"testingaverage": "127,541",

			"peopletested": "11,454,435",

			"positivity": "1.55%",

			"hospitalizations": "852",
			"datehospitalizations": "03/02"

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



