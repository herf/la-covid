$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,232,079",

								"death": "23,801",

								"dailycount": "326",

								"dailydeath": "26", 

								"date":"04/27" ,
								"info":"through 6:00pm 04/26/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/27" ,
								"infom":"through 6:00pm 04/26/2021" ,

								"testingaverage":"65,788",
								"peopletested":"6,453,904 ",

								"positivity":"0.80%" ,	
								"hospitalizations":"411"
								
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



