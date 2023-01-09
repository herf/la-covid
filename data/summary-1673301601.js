$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,652,052",


			"death": "34,867",

			"dailycount": "5,184",


			"dailydeath": "61",
			"hospitalizationsever": "167,855",


			"date": "01/09/23",
			"info": "through 12:00pm 01/08/2023",

			"testingaverage": "17,762",

			"peopletested": "12,843,378	",

			"positivity": "14.11%",

			"hospitalizations": "1,202",
			"datehospitalizations": "01/06/23"

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



