$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,464,157",


			"death": "33,740",

			"dailycount": "1,336",


			"dailydeath": "11",
			"hospitalizationsever": "156,459",


			"date": "10/07",
			"info": "through 12:00pm 10/06/2022",

			"testingaverage": "31,928",

			"peopletested": "12,582,282",

			"positivity": "4.12%",

			"hospitalizations": "500",
			"datehospitalizations": "10/06"

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



