$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,622,250",


			"death": "34,599",

			"dailycount": "668",


			"dailydeath": "6",
			"hospitalizationsever": "165,483",


			"date": "12/27",
			"info": "through 12:00pm 12/26/2022",

			"testingaverage": "25,409",

			"peopletested": "12,814,416",

			"positivity": "10.77%",

			"hospitalizations": "1,220",
			"datehospitalizations": "12/23"

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



