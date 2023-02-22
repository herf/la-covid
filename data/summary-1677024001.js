$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,697,051",


			"death": "35,603",

			"dailycount": "378",


			"dailydeath": "10",
			"hospitalizationsever": "172,541",


			"date": "02/21/23",
			"info": "through 12:00pm 02/20/2023",

			"testingaverage": "18,071",

			"peopletested": "12,927,180",

			"positivity": "6.02%",

			"hospitalizations": "714",
			"datehospitalizations": "2/17/23"

				}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#hosp_1').html(content.hospitalizationsever);
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



