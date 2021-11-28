$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,524,912",



			"death": "27,121",



			"dailycount": "624",




			"dailydeath": "22",

			"date": "11/26",
			"info": "through 6:00pm 11/25/2021",


			"testingaverage": "147,213",


			"peopletested": "9,395,694",

			"positivity": "0.88%",

			"hospitalizations": "556",
			"datehospitalizations": "11/25"

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



