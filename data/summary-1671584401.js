$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,606,007",


			"death": "38,241",

			"dailycount": "2,186",


			"dailydeath": "21",
			"hospitalizationsever": "164,371",


			"date": "12/20",
			"info": "through 12:00pm 12/19/2022",

			"testingaverage": "30,287",

			"peopletested": "12,795,169",

			"positivity": "10.60%",

			"hospitalizations": "1,251",
			"datehospitalizations": "12/19"

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



