$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,425,863",


			"death": "33,348",


			"dailycount": "2,228",


			"dailydeath": "15",
			"hospitalizationsever": "153,834",


			"date": "9/9",
			"info": "through 12:00pm 9/8/2022",

			"testingaverage": "35,539",

			"peopletested": "12,499,068",

			"positivity": "7.06%",

			"hospitalizations": "765",
			"datehospitalizations": "9/8"

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



