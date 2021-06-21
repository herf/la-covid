$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,247,618",

								"death": "24,441",

								"dailycount": "258",
								"dailydeath": "3",
								"date":"06/20" ,
								"info":"through 6:00pm 06/19/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/11" ,
								"infom":"through 6:00pm 06/10/2021" ,

								"testingaverage":"45,929",

								"peopletested":"6,953,148",

								"positivity":"0.5%" , 
								"hospitalizations":"219" 

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



