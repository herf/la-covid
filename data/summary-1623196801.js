$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,245,412",
								"death": "24,404",
								"dailycount": "186",
								"dailydeath": "13",
								"date":"06/08" ,
								"info":"through 6:00pm 06/07/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/08" ,
								"infom":"through 6:00pm 06/07/2021" ,

								"testingaverage":"51,363",
								"peopletested":"6,836,250",

								"positivity":"0.40%" ,
								"hospitalizations":"232" 



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
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
				
				$('#dte_m').html(content.datem);
				$('#cse_m').html(content.infom);
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



