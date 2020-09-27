$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "266,988",
				            "death": "6,504" ,
				            "dailycount": "1,236",
				            "dailydeath": "18" ,
				            "date":"09/26" ,
				            "info":"through 8:00pm 09/25/2020" ,
				            
							"testingaverage":"12,128" ,
							"peopletested":"2,623,709" ,
							"positivity":"3%" ,
							"hospitalizations":"715" 							
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



