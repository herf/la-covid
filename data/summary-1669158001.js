$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,521,712",


			"death": "34,125",

			"dailycount": "1,661",


			"dailydeath": "7",
			"hospitalizationsever": "159,841",


			"date": "11/22",
			"info": "through 12:00pm 11/21/2022",

			"testingaverage": "28,056",

			"peopletested": "12,703,506",

			"positivity": "6.27%",

			"hospitalizations": "727",
			"datehospitalizations": "11/21"

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



