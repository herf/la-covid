$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,848,030",


			"death": "31,830",


			"dailycount": "973",


			"dailydeath": "11",


			"date": "04/13",
			"info": "through 6:00pm 04/12/2022",

			"testingaverage": "106,551",

			"peopletested": "11,765,882",

			"positivity": "0.95%",

			"hospitalizations": "256",
			"datehospitalizations": "04/12"

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



