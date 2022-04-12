$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,847,097",


			"death": "31,819",


			"dailycount": "795",


			"dailydeath": "13",


			"date": "04/12",
			"info": "through 6:00pm 04/11/2022",

			"testingaverage": "108,780",

			"peopletested": "11,761,526",

			"positivity": "0.90%",

			"hospitalizations": "270",
			"datehospitalizations": "04/11"

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



