$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,827,802",


			"death": "31,561",


			"dailycount": "734",


			"dailydeath": "27",



			"date": "03/24",
			"info": "through 6:00pm 03/23/2022",

			"testingaverage": "112,649",

			"peopletested": "11,636,572",

			"positivity": "0.63%",

			"hospitalizations": "351",
			"datehospitalizations": "03/23"

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



