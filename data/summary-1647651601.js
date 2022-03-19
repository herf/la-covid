$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,820,159",

			"death": "31,443",

			"dailycount": "723",

			"dailydeath": "38",


			"date": "03/18",
			"info": "through 6:00pm 03/17/2022",

			"testingaverage": "117,943",

			"peopletested": "11,587,718",

			"positivity": "0.75%",

			"hospitalizations": "471",
			"datehospitalizations": "03/17"

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



