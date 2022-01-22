$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "2,428,744",



			"death": "28,346",


			"dailycount": "43,091",


			"dailydeath": "65",

			"date": "01/21",
			"info": "through 6:00pm 01/20/2022",

			"testingaverage": "246,495",


			"peopletested": "10,804,730",

			"positivity": "17.78%",


			"hospitalizations": "4,792",
			"datehospitalizations": "01/20"


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



