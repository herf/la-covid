$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,766,161",

			"death": "29,980",

			"dailycount": "2,133",

			"dailydeath": "55",


			"date": "02/15",
			"info": "through 6:00pm 02/14/2022",

			"testingaverage": "156,668",

			"peopletested": "11,292,885",

			"positivity": "4.47%",

			"hospitalizations": "1,995",
			"datehospitalizations": "02/14"


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



