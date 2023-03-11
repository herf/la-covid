$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,714,353",


			"death": "35,814",

			"dailycount": "1,073",


			"dailydeath": "11",
			"hospitalizationsever": "174,219",


			"date": "03/10/23",
			"info": "through 12:00pm 03/09/2023",

			"testingaverage": "17,015",

			"peopletested": "12,960,103",

			"positivity": "5.31%",

			"hospitalizations": "604",
			"datehospitalizations": "3/9/23"

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



