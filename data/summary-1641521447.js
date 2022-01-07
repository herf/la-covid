$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,843,922",




			"death": "27,728",




			"dailycount": "37,215",




			"dailydeath": "30",

			"date": "01/06",
			"info": "through 6:00pm 01/05/2022",


			"testingaverage": "101,745",


			"peopletested": "10,194,338",

			"positivity": "21.69%",

			"hospitalizations": "2,461",
			"datehospitalizations": "01/04"

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



