$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "2,010,964",




			"death": "27,798",




			"dailycount": "43,582",




			"dailydeath": "13",

			"date": "01/10",
			"info": "through 6:00pm 01/09/2022",


			"testingaverage": "132,523",


			"peopletested": "10,113,302",

			"positivity": "22.64%",

			"hospitalizations": "3,472",
			"datehospitalizations": "01/08"

					}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
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



