$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,764,073",

			"death": "29,928",

			"dailycount": "2,457",

			"dailydeath": "26",


			"date": "02/14",
			"info": "through 6:00pm 02/13/2022",

			"testingaverage": "158,852",

			"peopletested": "11,288,217",

			"positivity": "4.89%",

			"hospitalizations": "2,054",
			"datehospitalizations": "02/13"


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



