$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,694,317",


			"death": "35,545",

			"dailycount": "1,096",


			"dailydeath": "17",
			"hospitalizationsever": "172,177",


			"date": "02/17/23",
			"info": "through 12:00pm 02/16/2023",

			"testingaverage": "18,582",

			"peopletested": "12,920,870",

			"positivity": "5.93%",

			"hospitalizations": "687",
			"datehospitalizations": "2/16/23"

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



