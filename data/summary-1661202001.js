$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,383,792",


			"death": "33,027",


			"dailycount": "1,596",


			"dailydeath": "4",
			"hospitalizationsever": "150,996",


			"date": "8/22",
			"info": "through 12:00pm 8/21/2022",

			"testingaverage": "38,860",

			"peopletested": "12,434,410",

			"positivity": "10.10%",

			"hospitalizations": "930",
			"datehospitalizations": "8/19"

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



