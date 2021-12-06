$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,537,450",



			"death": "27,248",



			"dailycount": "1,103",



			"dailydeath": "2",

			"date": "12/06",
			"info": "through 6:00pm 12/05/2021",


			"testingaverage": "82,841",


			"peopletested": "9,515,741",

			"positivity": "1.43%",

			"hospitalizations": "595",
			"datehospitalizations": "12/04"

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



