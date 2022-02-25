$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,789,292",

			"death": "30,519",

			"dailycount": "1,985",

			"dailydeath": "74",


			"date": "02/24",
			"info": "through 6:00pm 02/23/2022",

			"testingaverage": "138,657",

			"peopletested": "11,386,483",

			"positivity": "2.37%",

			"hospitalizations": "1,150",
			"datehospitalizations": "02/23"

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



