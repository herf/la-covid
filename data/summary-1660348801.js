$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "3,351,082",


			"death": "32,922",


			"dailycount": "3,995",


			"dailydeath": "19",
			"hospitalizationsever": "149,437",


			"date": "8/12",
			"info": "through 12:00pm 8/11/2022",

			"testingaverage": "38,688",

			"peopletested": "12,392,466",

			"positivity": "12.47%",

			"hospitalizations": "1,065",
			"datehospitalizations": "8/11"

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



