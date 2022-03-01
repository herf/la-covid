$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,797,628",

			"death": "30,773",

			"dailycount": "1,093",

			"dailydeath": "58",


			"date": "03/01",
			"info": "through 6:00pm 02/28/2022",

			"testingaverage": "123,896",

			"peopletested": "11,431,492",

			"positivity": "1.84%",

			"hospitalizations": "927",
			"datehospitalizations": "02/28"

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



