$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,895,400",


			"death": "31,996",


			"dailycount": "1,695",


			"dailydeath": "2",


			"date": "05/09",
			"info": "through 6:00pm 05/08/2022",

			"testingaverage": "129,245",

			"peopletested": "11,898,920",

			"positivity": "1.94%",

			"hospitalizations": "242",
			"datehospitalizations": "05/08"

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



