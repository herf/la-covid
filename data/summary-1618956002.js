$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								"count": "1,229,641",


								"death": "23,668",

								"dailycount": "360",


								"dailydeath": "33", 


								"date":"04/20" ,
								"info":"through 6:00pm 04/19/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/20" ,
								"infom":"through 6:00pm 04/19/2021" ,

								
								"testingaverage":"55,169", 
								"peopletested":"6,345,694",
								"positivity":"1.10%" ,	
								"hospitalizations":"465"
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



