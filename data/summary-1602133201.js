$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "277,445",
				            "death": "6,709" ,
				            "dailycount": "1,645",
				            "dailydeath": "30" ,
				            "date":"10/07" ,
				            "info":"through 8:00pm 10/06/2020" ,
				            
							"testingaverage":"11,803" ,
							"peopletested":"2,755,076" ,
							"positivity":"3.3%" ,
							"hospitalizations":"696" 							
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
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



