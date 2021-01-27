$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,085,044", 

								"death": "15,592", 

								"dailycount": "5,927", 

								"dailydeath": "291", 

								"date":"01/26" ,
								"info":"through 6:00pm 01/25/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/26" ,
								"infom":"through 6:00pm 01/25/2021" ,
								
								"testingaverage":"85,051" ,
								"peopletested":"5,410,106" ,
								"positivity":"13.20%" ,		
								"hospitalizations":"6,307"									
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



