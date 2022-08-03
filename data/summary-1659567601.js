$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,315,921",


			"death": "32,785",


			"dailycount": "6,637",


			"dailydeath": "22",
			"hospitalizationsever": "146,788",


			"date": "8/3",
			"info": "through 12:00pm 8/2/2022",

			"testingaverage": "43,166",

			"peopletested": "12,354,083",

			"positivity": "14.93%",

			"hospitalizations": "1,242",
			"datehospitalizations": "8/01"

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



