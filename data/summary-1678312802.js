$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,712,457",


			"death": "35,792",

			"dailycount": "901",


			"dailydeath": "11",
			"hospitalizationsever": "174,192",


			"date": "03/08/23",
			"info": "through 12:00pm 03/07/2023",

			"testingaverage": "17,440",

			"peopletested": "12,955,460",

			"positivity": "5.33%",

			"hospitalizations": "645",
			"datehospitalizations": "3/7/23"

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



