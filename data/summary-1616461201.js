$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,214,683", 
								"death": "22,806", 
								"dailycount": "516", 
								"dailydeath": "9", 
								
								"date":"03/22" ,
								"info":"through 6:00pm 03/21/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/22" ,
								"infom":"through 6:00pm 03/21/2021" ,
								
								"testingaverage":"43,553" , 
								"peopletested":"6,017,661" ,
								"positivity":"1.70%" ,	
								"hospitalizations":"750" 									
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



